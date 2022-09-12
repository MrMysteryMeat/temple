import { ethers, network } from "hardhat";
import { Signer, BigNumber, BigNumberish, BytesLike, Contract, providers } from "ethers";
import { expect, should } from "chai";
import axios from 'axios';
import { blockTimestamp, shouldThrow, toAtto } from "./helpers";
import { DEPLOYED_CONTRACTS } from '../scripts/deploys/helpers';
import addresses from "./constants";
import { ERC20, ERC20__factory, Exposure, Exposure__factory, IERC20, IERC20__factory,
  JoiningFee,
  JoiningFee__factory,
  TempleZaps, TempleZaps__factory,
  TempleERC20Token,
  TempleERC20Token__factory,
  TempleStableAMMRouter,
  TempleStableAMMRouter__factory,
  Vault, VaultedTemple, VaultedTemple__factory, 
  VaultProxy, VaultProxy__factory, Vault__factory, 
  GenericZap__factory, GenericZap, 
  UniswapV2Pair, UniswapV2Router02NoEth,
  UniswapV2Router02NoEth__factory, UniswapV2Pair__factory,
  ICurvePool__factory, ICurvePool, ICurveFactory__factory, IUniswapV2Pair__factory, IBalancerVault__factory, IBalancerVault
} from "../typechain";

const { WETH, USDC, UNI, FRAX, ETH, OGT, FEI, BNB, FXS, BAL } = addresses.tokens;
const { BINANCE_ACCOUNT_8, WETH_WHALE, FRAX_WHALE, FXS_WHALE } = addresses.accounts;
const { ZEROEX_EXCHANGE_PROXY, TEMPLE_STABLE_ROUTER, UNISWAP_V2_ROUTER, CURVE_FACTORY, 
  TEMPLE_FRAX_PAIR, BALANCER_VAULT } = addresses.contracts;
const { MULTISIG, TEMPLE, TEMPLE_V2_ROUTER } = DEPLOYED_CONTRACTS.mainnet;

const ZEROEX_QUOTE_ENDPOINT = 'https://api.0x.org/swap/v1/quote?';
const defaultTokens = [
  FRAX, USDC, FEI, USDC, UNI,
  WETH, FXS, BNB, BAL, ETH
];

let genericZaps: GenericZap;
let templeZaps: TempleZaps;
let vaultProxy: VaultProxy;
let vault: Vault;
let templeExposure: Exposure;
let vaultedTemple: VaultedTemple;
let templeToken: TempleERC20Token;
let joiningFee: JoiningFee;
let fraxToken: ERC20;
let templeRouter: TempleStableAMMRouter;
let owner: Signer;
let alice: Signer;
let alan: Signer;
let binanceSigner: Signer;
let wethSigner: Signer;
let fraxSigner: Signer;
let ownerAddress: string;
let aliceAddress: string;
let alanAddress: string;
let balancerVault: IBalancerVault;
let poolId: string;
let bptPoolToken: string;


describe("Temple Stax Core Zaps", async () => {
  before(async () => {
    // as real-time live data is being queried from 0x API, there's the possibility that prices may differ from forked mainnet tests (due to block number)
    // and hence tokens out (in tests) may differ from real expected values 
    // use most recent block number in tests (with enough block confirmations)
    await resetFork(await getLatestBlockNumberWithEnoughConfirmations());
  });

  // reset to normal test state after all tests have finished
  after(async () => {
    await network.provider.request({
      method: "hardhat_reset",
      params: []
    });
  });

  beforeEach(async () => {
    [owner, alice, alan] = await ethers.getSigners();
    binanceSigner = await impersonateAddress(BINANCE_ACCOUNT_8);
    wethSigner = await impersonateAddress(WETH_WHALE);
    fraxSigner = await impersonateAddress(FRAX_WHALE);

    ownerAddress = await owner.getAddress();
    aliceAddress = await alice.getAddress();
    alanAddress = await alan.getAddress();

    genericZaps = await new GenericZap__factory(owner).deploy(UNISWAP_V2_ROUTER);
    templeZaps = await new TempleZaps__factory(owner).deploy(
      TEMPLE,
      TEMPLE_V2_ROUTER,
      genericZaps.address
    );
  
    templeRouter = TempleStableAMMRouter__factory.connect(TEMPLE_STABLE_ROUTER, owner);

    await approveDefaultTokens(genericZaps);

    balancerVault = IBalancerVault__factory.connect(BALANCER_VAULT, alice);
    poolId = "0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014";
    bptPoolToken = "0x5c6Ee304399DBdB9C8Ef030aB642B10820DB8F56";
  });

  describe("Admin", async () => {
    it("admin tests", async () => {
      await shouldThrow(genericZaps.connect(alice).setApprovedTargets([FRAX, TEMPLE], [ZEROEX_EXCHANGE_PROXY, TEMPLE_STABLE_ROUTER], [true, true]), /Ownable: caller is not the owner/);
      await shouldThrow(genericZaps.connect(alice).toggleContractActive(), /Ownable: caller is not the owner/);
      await shouldThrow(genericZaps.connect(alice).recoverToken(FRAX, aliceAddress, 100), /Ownable: caller is not the owner/);
      await shouldThrow(templeZaps.connect(alice).setZaps(templeRouter.address), /Ownable: caller is not the owner/);

      // happy paths
      await genericZaps.setApprovedTargets([FRAX, TEMPLE], [ZEROEX_EXCHANGE_PROXY, TEMPLE_STABLE_ROUTER], [true, true]);
      await genericZaps.toggleContractActive();
      await templeZaps.setZaps(genericZaps.address);
    });

    it("sets zaps", async () => {
      await expect(templeZaps.setZaps(genericZaps.address))
        .to.emit(templeZaps, "SetZaps")
        .withArgs(genericZaps.address);

      expect(await templeZaps.zaps()).to.eq(genericZaps.address);
    });

    it("sets approved targets", async () => {
      await shouldThrow(genericZaps.setApprovedTargets([FRAX], [ZEROEX_EXCHANGE_PROXY], [true, true]), /Invalid Input length/);
      await genericZaps.setApprovedTargets([FRAX, UNI], [ZEROEX_EXCHANGE_PROXY, TEMPLE_STABLE_ROUTER], [true, false]);
      expect(await genericZaps.approvedTargets(FRAX, ZEROEX_EXCHANGE_PROXY)).to.eq(true);
      expect(await genericZaps.approvedTargets(UNI, TEMPLE_STABLE_ROUTER)).to.eq(false);
    });

    it("toggles contract active", async () => {
      const currentState = await genericZaps.paused();
      await genericZaps.toggleContractActive();
      expect(await genericZaps.paused()).to.eq(!currentState);
    });

    it("recovers token", async () => {
      //  invalid receiver
      await shouldThrow(templeZaps.recoverToken(ETH, ETH, 100), /TempleZaps: Invalid receiver/);
      await shouldThrow(templeZaps.recoverToken(ETH, aliceAddress, ethers.utils.parseEther("1100")), /TempleZaps: insufficient eth balance/);
      // transfer frax to zaps contract
      const frax = IERC20__factory.connect(FRAX, fraxSigner);
      await frax.transfer(genericZaps.address, 1000);
            
      // recover
      const checkSumedAddr = ethers.utils.getAddress(FRAX);
      await expect(genericZaps.recoverToken(FRAX,  ownerAddress, 1000))
          .to.emit(genericZaps, "TokenRecovered")
          .withArgs(checkSumedAddr, ownerAddress, 1000);
      
      expect(await getBalance(frax, ownerAddress)).eq(1000);

      // recover ETH
      const ethBalanceBefore = await genericZaps.provider.getBalance(genericZaps.address);
      await expect(genericZaps.recoverToken(ETH, ownerAddress, ethBalanceBefore))
        .to.emit(genericZaps, "TokenRecovered")
        .withArgs(ETH, ownerAddress, ethBalanceBefore);
      expect(await genericZaps.provider.getBalance(genericZaps.address))
        .to.eq(0);
    });
  });

  describe("Temple Zaps", async () => {

    beforeEach(async () => {
      await approveDefaultTokens(genericZaps);
      await templeZaps.setTempleRouter(TEMPLE_STABLE_ROUTER);
      await templeZaps.setSupportedStables([FRAX, FEI], [true, true]);

        templeToken = await airdropTemple(
          owner,
          [owner, alice],
          toAtto(100000)
        );
      
        joiningFee = await new JoiningFee__factory(owner).deploy(
            toAtto(1),
        );
      
        templeExposure = await new Exposure__factory(owner).deploy(
          "temple exposure",
          "TPL-VAULT-EXPOSURE",
          templeToken.address,
        )
      
        vaultedTemple = await new VaultedTemple__factory(owner).deploy(
          templeToken.address,
          templeExposure.address
        );
      
        await templeExposure.setLiqidator(vaultedTemple.address);
      
        vault = await new Vault__factory(owner).deploy(
            "Temple 1m Vault",
            "TV_1M",
            templeToken.address,
            templeExposure.address,
            vaultedTemple.address,
            60 * 10,
            60,
            { p: 1, q: 1},
            joiningFee.address,
            await blockTimestamp()
        );
        fraxToken = ERC20__factory.connect(FRAX, owner);
        
        await templeExposure.setMinterState(vault.address, true);
        await templeExposure.setMinterState(ownerAddress, true);
      
        await templeToken.connect(alice).increaseAllowance(vault.address, toAtto(1000000));

        // supported stables
        await templeZaps.setSupportedStables([FRAX, FEI], [true, true]);
    });

    afterEach(async () => {
      resetFork(await getLatestBlockNumberWithEnoughConfirmations());
    });

    it("sets temple router", async () => {
      await templeZaps.setTempleRouter(TEMPLE_STABLE_ROUTER);
      expect(await templeZaps.templeRouter()).to.eq(TEMPLE_STABLE_ROUTER);
    });

    it("sets supported stables", async () => {
      await shouldThrow(templeZaps.setSupportedStables([UNI, FRAX], [true]), /Invalid Input length/);
      await templeZaps.setSupportedStables([USDC, FRAX], [true, false]);
      expect(await templeZaps.supportedStables(USDC)).to.eq(true);
      expect(await templeZaps.supportedStables(FRAX)).to.eq(false);
    });

    it("zap eth but zero value", async () => {
      await shouldThrow(templeZaps.zapInTemple(
        ETH,
        100,
        1,
        FRAX,
        1,
        ZEROEX_EXCHANGE_PROXY,
        '0x',
        { value: 0 }
      ), /Swap: Input ETH mismatch/);
    });

    it("should throw error when paused", async () => {
      await templeZaps.toggleContractActive();
      expect(await templeZaps.paused()).to.be.true;
      await shouldThrow(templeZaps.zapInTemple(
        ETH,
        0,
        0,
        ETH,
        0,
        ETH,
        "0x"
      ), /ZapBase: Paused/);
    });

    it("should throw error for unsupported stable", async () => {
      await templeZaps.setSupportedStables([FRAX, FEI], [false, false]);
      await shouldThrow(templeZaps.zapInTemple(
        ETH,
        0,
        0,
        FRAX,
        0,
        ETH,
        "0x"
      ), /TempleZaps: Unsupported stable/);
    });

    it("should throw error for unapproved token", async () => {
      
      await shouldThrow(genericZaps.zapIn(
        OGT,
        100,
        FRAX,
        10,
        ZEROEX_EXCHANGE_PROXY,
        '0x'
      ), /GenericZaps: Unsupported token\/target/);
    });

    it("should zap ETH to TEMPLE", async () => {
      const tokenAddr = ETH;
      const tokenAmount = "5";
      await zapTemple(
        alice,
        aliceAddress,
        templeZaps,
        genericZaps,
        tokenAddr,
        tokenAmount
      );
    });

    it("should zap ERC20 tokens to TEMPLE", async () => {
      const tokenAddr = FXS;
      const tokenAmount = "5";

      // send some tokens
      const whale = await impersonateAddress(BINANCE_ACCOUNT_8);
      const tokenContract = IERC20__factory.connect(tokenAddr, whale);
      await tokenContract.transfer(aliceAddress, ethers.utils.parseEther(tokenAmount));

      await zapTemple(
        alice,
        aliceAddress,
        templeZaps,
        genericZaps,
        tokenAddr,
        tokenAmount
      );
    });

    it("should zap ERC20 tokens to TEMPLE for another recipient", async () => {
      const tokenAddr = FXS;
      const tokenAmount = "5";

      // send some FXS
      const bnbWhale = await impersonateAddress(BINANCE_ACCOUNT_8);
      const fxsToken = IERC20__factory.connect(tokenAddr, bnbWhale);
      await fxsToken.transfer(aliceAddress, ethers.utils.parseEther(tokenAmount));

      await zapTemple(
        alice,
        alanAddress,
        templeZaps,
        genericZaps,
        tokenAddr,
        tokenAmount
      );
    });

    it("should zap ERC20 tokens to Temple and deposit in vault", async () => {
      const tokenAddr = FXS;
      const tokenAmount = "5";

      // send some BNB
      const whale = await impersonateAddress(FXS_WHALE);
      const bnbToken = IERC20__factory.connect(tokenAddr, whale);
      await bnbToken.transfer(aliceAddress, ethers.utils.parseEther(tokenAmount));
      await templeZaps.setSupportedStables([FRAX, FEI], [true, true]);
      await zapInVault(
        alice,
        templeZaps,
        tokenAddr,
        tokenAmount,
        vault.address,
        aliceAddress
      );
    });

    it("should zap ERC20 tokens to Temple and deposit in vault for another user", async () => {
      const tokenAddr = FXS;
      const tokenAmount = "5";

      // send some BNB
      const whale = await impersonateAddress(FXS_WHALE);
      const bnbToken = IERC20__factory.connect(tokenAddr, whale);
      await bnbToken.transfer(aliceAddress, ethers.utils.parseEther(tokenAmount));
      await templeZaps.setSupportedStables([FRAX, FEI], [true, true]);
      await zapInVault(
        alice,
        templeZaps,
        tokenAddr,
        tokenAmount,
        vault.address,
        alanAddress
      );
    });

    it("should zap ETH to Temple and deposit in vault", async () => {
      const tokenAddr = ETH;
      const tokenAmount = "5";

      // send some BNB
      const whale = await impersonateAddress(FXS_WHALE);
      const bnbToken = IERC20__factory.connect(tokenAddr, whale);
      await bnbToken.transfer(aliceAddress, ethers.utils.parseEther(tokenAmount));
      await templeZaps.setSupportedStables([FRAX, FEI], [true, true]);
      await zapInVault(
        alice,
        templeZaps,
        tokenAddr,
        tokenAmount,
        vault.address,
        aliceAddress
      );
    });

    it("zaps token and adds temple LP", async () => {
      const tokenAddr = ethers.utils.getAddress(FXS);
      const tokenAmount = "1";

      // send some tokens
      const whale = await impersonateAddress(BINANCE_ACCOUNT_8);
      const tokenContract = IERC20__factory.connect(tokenAddr, whale);
      await tokenContract.transfer(aliceAddress, ethers.utils.parseEther(tokenAmount));

      await templeZaps.connect(owner).setSupportedStables([FRAX, FEI], [true, true]);
      const pairContract = IERC20__factory.connect(TEMPLE_FRAX_PAIR, alice);
      const lpBefore = await pairContract.balanceOf(aliceAddress);

      await zapInTempleLP(
        alice,
        templeZaps,
        genericZaps,
        TEMPLE_FRAX_PAIR,
        tokenAddr,
        tokenAmount,
        aliceAddress,
        false
      );

      const lpAfter = await pairContract.balanceOf(aliceAddress);
      expect(lpAfter).gt(lpBefore);
    });

    it("zaps ETH and adds temple LP", async () => {
      const tokenAddr = ETH;
      const tokenAmount = "1";

      await templeZaps.connect(owner).setSupportedStables([FRAX, FEI], [true, true]);
      const pairContract = IERC20__factory.connect(TEMPLE_FRAX_PAIR, alice);
      const lpBefore = await pairContract.balanceOf(aliceAddress);

      await zapInTempleLP(
        alice,
        templeZaps,
        genericZaps,
        TEMPLE_FRAX_PAIR,
        tokenAddr,
        tokenAmount,
        aliceAddress,
        false
      );

      const lpAfter = await pairContract.balanceOf(aliceAddress);
      expect(lpAfter).gt(lpBefore);
    });
  });

  describe("Generic Zaps", async () => {
    
    const tokenAddr = ethers.utils.getAddress(FXS);
    const tokenAmount = "50";
    const fxsCvxFxsPool = "0xd658A338613198204DCa1143Ac3F01A722b5d94A";
    const cvxFxs = "0xFEEf77d3f69374f66429C91d732A244f074bdf74";
    beforeEach( async () => {
      // send some FXS
      const bnbWhale = await impersonateAddress(BINANCE_ACCOUNT_8);
      const fxsToken = IERC20__factory.connect(tokenAddr, bnbWhale);
      await fxsToken.transfer(aliceAddress, ethers.utils.parseEther(tokenAmount));
    });

    afterEach( async () => {
      await resetFork(await getLatestBlockNumberWithEnoughConfirmations());
    });

    it("zaps in erc20 tokens to erc20 tokens", async () => {
      await zapIn(
        alice,
        aliceAddress,
        genericZaps,
        tokenAddr,
        tokenAmount,
        UNI
      );
    });

    it("zaps in erc20 tokens to erc20 tokens for another user", async () => {
      await zapIn(
        alice,
        alanAddress,
        genericZaps,
        tokenAddr,
        tokenAmount,
        UNI
      );
    });

    it("zaps in ETH to erc20 tokens", async () => {
      await zapIn(
        alice,
        aliceAddress,
        genericZaps,
        ETH,
        tokenAmount,
        UNI
      );
    });

    it("zaps in token to uniswap v2 LP", async () => {
      const router = UniswapV2Router02NoEth__factory.connect(UNISWAP_V2_ROUTER, alice);
      const fxsFraxPairAddress = "0xE1573B9D29e2183B1AF0e743Dc2754979A40D237";
      const pair = UniswapV2Pair__factory.connect(fxsFraxPairAddress, alice);
      
      await zapInLPUniV2(
        alice,
        genericZaps,
        router,
        pair,
        tokenAddr,
        tokenAmount,
        aliceAddress,
        false,
        false
      );
    });

    it("zaps in ETH to uniswap v2 LP", async () => {
      const router = UniswapV2Router02NoEth__factory.connect(UNISWAP_V2_ROUTER, alice);
      const fxsFraxPairAddress = "0xE1573B9D29e2183B1AF0e743Dc2754979A40D237";
      const pair = UniswapV2Pair__factory.connect(fxsFraxPairAddress, alice);
      
      await zapInLPUniV2(
        alice,
        genericZaps,
        router,
        pair,
        ETH,
        tokenAmount,
        aliceAddress,
        false,
        false
      );
    });

    it("zaps in token to uniswap v2 LP, transferring residual", async () => {
      const router = UniswapV2Router02NoEth__factory.connect(UNISWAP_V2_ROUTER, alice);
      const fxsFraxPairAddress = "0xE1573B9D29e2183B1AF0e743Dc2754979A40D237";
      const pair = UniswapV2Pair__factory.connect(fxsFraxPairAddress, alice);
      
      await zapInLPUniV2(
        alice,
        genericZaps,
        router,
        pair,
        tokenAddr,
        tokenAmount,
        aliceAddress,
        false,
        true
      );
    });

    it("zaps in token to uniswap v2 LP for another user, transferring residual", async () => {
      const router = UniswapV2Router02NoEth__factory.connect(UNISWAP_V2_ROUTER, alice);
      const fxsFraxPairAddress = "0xE1573B9D29e2183B1AF0e743Dc2754979A40D237";
      const pair = UniswapV2Pair__factory.connect(fxsFraxPairAddress, alice);
      
      await zapInLPUniV2(
        alice,
        genericZaps,
        router,
        pair,
        tokenAddr,
        tokenAmount,
        alanAddress,
        false,
        true
      );
    });

    it("zaps in token to curve LP", async () => {
      const pool = ICurvePool__factory.connect(fxsCvxFxsPool, alice);
      const poolAddress = pool.address;

      await genericZaps.setApprovedTargets([FXS, cvxFxs], [poolAddress, poolAddress], [true, true]);
      await zapInLPCurvePool(
        alice,
        genericZaps,
        pool,
        tokenAddr,
        tokenAmount,
        aliceAddress,
        true,
        false
      );
    });

    it("zaps in ETH to curve LP", async () => {
      const pool = ICurvePool__factory.connect(fxsCvxFxsPool, alice);
      const poolAddress = pool.address;

      await genericZaps.setApprovedTargets([FXS, cvxFxs], [poolAddress, poolAddress], [true, true]);
      await zapInLPCurvePool(
        alice,
        genericZaps,
        pool,
        ETH,
        tokenAmount,
        aliceAddress,
        true,
        false
      );
    });

    it("zaps in curve LP for another user", async () => {
      const pool = ICurvePool__factory.connect(fxsCvxFxsPool, alice);
      const poolAddress = pool.address;
      await genericZaps.setApprovedTargets([FXS, cvxFxs], [poolAddress, poolAddress], [true, true]);
      await zapInLPCurvePool(
        alice,
        genericZaps,
        pool,
        tokenAddr,
        tokenAmount,
        alanAddress,
        true,
        false
      );
    });

    it("zaps in token to balancer LP, one sided liquidity", async () => {
      const res = await balancerVault.getPoolTokens(poolId);

      await zapInBalancerLP(
        alice,
        genericZaps,
        balancerVault,
        tokenAddr,
        tokenAmount,
        res.tokens,
        aliceAddress,
        poolId,
        bptPoolToken,
        true,
        1
      );
    });

    it("zaps in ETH to balancer LP, one sided liquidity", async () => {
      const res = await balancerVault.getPoolTokens(poolId);

      await zapInBalancerLP(
        alice,
        genericZaps,
        balancerVault,
        ETH,
        tokenAmount,
        res.tokens,
        aliceAddress,
        poolId,
        bptPoolToken,
        true,
        1
      );
    });

    it("zaps in token to balancer LP for another user, one sided liquidity", async () => {
      const res = await balancerVault.getPoolTokens(poolId);

      await zapInBalancerLP(
        alice,
        genericZaps,
        balancerVault,
        tokenAddr,
        tokenAmount,
        res.tokens,
        alanAddress,
        poolId,
        bptPoolToken,
        true,
        1
      );
    });

    it("zaps in token to balancer LP, two sided liquidity", async () => {
      const res = await balancerVault.getPoolTokens(poolId);

      await zapInBalancerLP(
        alice,
        genericZaps,
        balancerVault,
        tokenAddr,
        tokenAmount,
        res.tokens,
        aliceAddress,
        poolId,
        bptPoolToken,
        false,
        1
      );
    });

    it("zaps in ETH to balancer LP, two sided liquidity", async () => {
      const res = await balancerVault.getPoolTokens(poolId);

      await zapInBalancerLP(
        alice,
        genericZaps,
        balancerVault,
        ETH,
        tokenAmount,
        res.tokens,
        aliceAddress,
        poolId,
        bptPoolToken,
        false,
        1
      );
    });

    it("zaps in token to balancer LP for another user, two sided liquidity", async () => {
      const res = await balancerVault.getPoolTokens(poolId);

      await zapInBalancerLP(
        alice,
        genericZaps,
        balancerVault,
        tokenAddr,
        tokenAmount,
        res.tokens,
        alanAddress,
        poolId,
        bptPoolToken,
        false,
        1
      );
    });
  });
});

async function approveDefaultTokens(
  zaps: GenericZap
) {
  let tokens = [];
  let approvals = [];
  let approvedTargets = [];
  const targets = [ZEROEX_EXCHANGE_PROXY, UNISWAP_V2_ROUTER, TEMPLE_STABLE_ROUTER];
  for (const token of defaultTokens) {
    for (const target of targets) {
      tokens.push(token);
      approvedTargets.push(target);
      approvals.push(true);
    }
  }
  await zaps.setApprovedTargets(tokens, approvedTargets, approvals);
}

async function zapInBalancerLP(
  signer: Signer,
  zaps: GenericZap,
  balancerVault: IBalancerVault,
  fromToken: string,
  fromAmount: string,
  tokens: Array<string>,
  zapInFor: string,
  poolId: string,
  poolToken: string,
  isOneSidedLiquidityAddition: boolean,
  limitSlippageTolerance: number
) {
  // init vars
  const signerAddress = await signer.getAddress();
  const fromTokenContract = IERC20__factory.connect(fromToken, signer);
  // not necessarily an IERC20 but does the balanceOf query
  const bptPoolToken = IERC20__factory.connect(poolToken, signer);
  let fromTokenDecimals;
  let sellToken;
  let symbol;
  if (fromToken === ETH) {
    symbol = 'ETH';
    fromTokenDecimals = 18;
    sellToken = 'ETH';
  } else {
    symbol = await fromTokenContract.symbol();
    fromTokenDecimals = await fromTokenContract.decimals();
    sellToken = fromToken;
  }
  const fromAmountBN = ethers.utils.parseUnits(fromAmount, fromTokenDecimals);
  // approve zaps
  await approveContract(fromToken, fromAmountBN, fromTokenDecimals, signer, zaps.address);

  const sellAmount = fromAmountBN.toString();
  let swapCallData, price, guaranteedPrice, gas, estimatedGas;
  let firstSwapMinAmountOut, poolSwapMinAmountOut, minLiquidityOut;
  let useAltFunction = false;
  let otherToken, toToken;
  let poolSwapData;
  // check if from token is one of balancer pool tokens
  let isOneOf;
  for (let i=0; i<tokens.length; i++) {
    if (equalAddresses(tokens[i], fromToken)) {
      isOneOf = true;
      break;
    }
  }
  // if foreign token, populate swap data via 0x protocol
  if (!isOneOf) {
    // populate swap data
    toToken = tokens[0];
    const url = `${ZEROEX_QUOTE_ENDPOINT}sellToken=${sellToken}&sellAmount=${sellAmount}&buyToken=${toToken}`;
    const response = await axios.get(url);
    ({
      data: { data: swapCallData, price, guaranteedPrice, gas, estimatedGas },
    } = response);

    console.log(`Price of ${symbol} in ${toToken}: ${price}`);

    const toTokenContract = IERC20__factory.connect(toToken, signer);
    const toTokenDecimals = await toTokenContract.decimals();
    const minTokenReceived = parseFloat(guaranteedPrice) * parseFloat(fromAmount);
    const minTokenReceivedWei = ethers.utils.parseUnits(
      minTokenReceived.toString(),
      toTokenDecimals
    );
    firstSwapMinAmountOut = minTokenReceivedWei;
    otherToken = tokens[1];
  } else {
    toToken = fromToken;
    swapCallData = "0x";
    firstSwapMinAmountOut = fromAmountBN;
    otherToken = equalAddresses(fromToken, tokens[0]) ? tokens[1]: tokens[0];
  }

  // populate swap data params
  const kind = 0; // out given in
  let swapInAmount;
  let remainder;
  let userData;
  let assetInIndex, assetOutIndex;
  if (!isOneSidedLiquidityAddition) {
    assetInIndex = equalAddresses(toToken, tokens[0]) ? 0 : 1;
    assetOutIndex = assetInIndex == 0 ? 1 : 0;
    swapInAmount = firstSwapMinAmountOut.div(2);
    const batchSwapSteps = [{
      poolId,
      assetInIndex,
      assetOutIndex,
      amount: swapInAmount,
      userData: "0x"
    }];
    const funds = {
      sender: zaps.address, // zaps contract will hold the funds then
      fromInternalBalance: false,
      recipient: zaps.address,
      toInternalBalance: false
    };
    
    const assets = assetInIndex == 0 ? tokens : [tokens[1], tokens[0]];
    const assetDeltas = await balancerVault.queryBatchSwap(0, batchSwapSteps, assets, funds);
    
    const limit = assetDeltas[1].mul(-1).mul(100 - limitSlippageTolerance).div(100);
    poolSwapMinAmountOut = limit.toString();
    // remainder is token y given x (approximated)
    remainder = limit;

    // populate and encode pool swap data
    const singleSwap = {
      poolId,
      kind,
      assetIn: toToken,
      assetOut: otherToken,
      amount: swapInAmount,
      userData: "0x"
    };
    poolSwapData = balancerVault.interface.encodeFunctionData("swap", [singleSwap, funds, limit, ethers.utils.parseEther("1000")]);
  } else {
    // one sided liquidity
    // no need to pool swap for equal amounts, just directly use vault to add liquidity
    poolSwapData = "0x";
    swapInAmount = firstSwapMinAmountOut;
    poolSwapMinAmountOut = 0;
    remainder = 0;
    assetInIndex = equalAddresses(toToken, tokens[0]) ? 0 : 1;
  }
  
  // now create vault request
  // sort tokens/assets and amounts
  const assets = tokens; // tokens already queried sorted
  // allow for some slippage (also bc firstswapminamount is being used)
  const maxAmountForFirstSwapMinAmountOut = swapInAmount.mul(101).div(100);
  const maxAmountForRemainder = BigNumber.from(remainder).mul(101).div(100);
  const maxAmountsIn = equalAddresses(assets[0], tokens[0]) ? [maxAmountForFirstSwapMinAmountOut, maxAmountForRemainder] : [maxAmountForRemainder, maxAmountForFirstSwapMinAmountOut];
  // pool used in tests is a WeightedPool so encoding data accordingly
  if (!isOneSidedLiquidityAddition) {
    // exact tokens join EXACT_TOKENS_IN_FOR_BPT_OUT index 1
    // using maxAmountsIn for amountsIn
    userData = ethers.utils.defaultAbiCoder.encode(["uint256", "uint256[]", "uint256"], [1, maxAmountsIn, 1]);
  } else {
    // single token join TOKEN_IN_FOR_EXACT_BPT_OUT index 2
    // enterTokenIndex set as asset 0
    userData = ethers.utils.defaultAbiCoder.encode(["uint256", "uint256", "uint256"], [2, 1, assetInIndex]);
  }
  minLiquidityOut = 1;
  const fromInternalBalance = false;
  const joinPoolRequest = {
    assets,
    maxAmountsIn,
    userData,
    fromInternalBalance
  }
  const uniAmountAMin = BigNumber.from(0);
  const uniAmountBMin = BigNumber.from(0);
  const shouldTransferResidual = false;
  const zapLiqRequest = {
    firstSwapMinAmountOut,
    useAltFunction,
    poolSwapMinAmountOut,
    isOneSidedLiquidityAddition,
    otherToken,
    shouldTransferResidual,
    minLiquidityOut,
    uniAmountAMin,
    uniAmountBMin,
    poolSwapData
  };

  // balances before
  const fromTokenBalanceBefore = await getBalance(fromTokenContract, signerAddress);
  const bptBalanceBefore = await getBalance(bptPoolToken, zapInFor);
  const overrides: { value?: BigNumber } = {};
  if (fromToken === ETH) {
    overrides.value = ethers.utils.parseEther(fromAmount);
  }
  const zapsConnect = zaps.connect(signer);
  if (equalAddresses(zapInFor, signerAddress)) {
    await expect(zapsConnect.zapLiquidityBalancerPool(
      fromToken,
      fromAmountBN,
      poolId,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      zapLiqRequest,
      joinPoolRequest,
      overrides
    ))
    .to.emit(zaps, "ZappedLiquidityBalancerPool")
    .withArgs(signerAddress, fromToken, fromAmountBN, maxAmountsIn);
  } else {
    await expect(zapsConnect.zapLiquidityBalancerPoolFor(
      fromToken,
      fromAmountBN,
      poolId,
      zapInFor,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      zapLiqRequest,
      joinPoolRequest,
      overrides
    ))
    .to.emit(zaps, "ZappedLiquidityBalancerPool")
    .withArgs(zapInFor, fromToken, fromAmountBN, maxAmountsIn);
  }

  // checks
  const diff = fromTokenBalanceBefore.sub(fromAmountBN);
  if (fromToken === ETH) {
    expect(await getBalance(fromTokenContract, signerAddress)).to.lte(diff);
  } else {
    expect(await getBalance(fromTokenContract, signerAddress)).to.eq(diff);
  }
  expect(await getBalance(bptPoolToken, zapInFor)).to.gt(bptBalanceBefore);
}

async function zapInTempleLP(
  signer: Signer,
  zaps: TempleZaps,
  gZaps: GenericZap,
  pair: string,
  fromToken: string,
  fromAmount: string,
  zapInFor: string,
  transferResidual: boolean
) {
  // init vars
  const signerAddress = await signer.getAddress();
  const fromTokenContract = IERC20__factory.connect(fromToken, signer);
  const pairContract = IUniswapV2Pair__factory.connect(pair, signer);
  let fromTokenDecimals;
  let sellToken;
  let symbol;
  if (fromToken === ETH) {
    symbol = 'ETH';
    fromTokenDecimals = 18;
    sellToken = 'ETH';
  } else {
    symbol = await fromTokenContract.symbol();
    fromTokenDecimals = await fromTokenContract.decimals();
    sellToken = fromToken;
  }
  const fromAmountBN = ethers.utils.parseUnits(fromAmount, fromTokenDecimals);
  // approve zaps
  await approveContract(fromToken, fromAmountBN, fromTokenDecimals, signer, zaps.address);

  const token0 = await pairContract.token0();
  const token1 = await pairContract.token1();
  const sellAmount = fromAmountBN.toString();
  let swapCallData, price, guaranteedPrice, gas, estimatedGas;
  let minAmountOut; // in case of first swap from 0x
  let lpSwapMinAmountOut;
  let remainder;
  let reserveA, reserveB, ts;
  let amountAMin, amountBMin;
  let toToken = token0; // defaulted
  const tokenCheckSummed = ethers.utils.getAddress(fromToken);
  // if token is neither token0 nor token1, get swap data
  if (tokenCheckSummed != token0 && tokenCheckSummed != token1) {
    // use stable
    toToken = equalAddresses(token0, TEMPLE) ? token1 : token0;
    const url = `${ZEROEX_QUOTE_ENDPOINT}sellToken=${sellToken}&sellAmount=${sellAmount}&buyToken=${toToken}`;
    const response = await axios.get(url);
    ({
      data: { data: swapCallData, price, guaranteedPrice, gas, estimatedGas },
    } = response);

    console.log(`Price of ${symbol} in ${toToken}: ${price}`);

    // calculate min amount out for stable
    const toTokenContract = IERC20__factory.connect(toToken, signer);
    const toTokenDecimals = await toTokenContract.decimals();
    const minTokenReceived = parseFloat(guaranteedPrice) * parseFloat(fromAmount);
    const minTokenReceivedWei = ethers.utils.parseUnits(
      minTokenReceived.toString(),
      toTokenDecimals
    );
    minAmountOut = minTokenReceivedWei;
    [reserveA, reserveB, ts] = await pairContract.getReserves();
    const reserveIn = equalAddresses(token0, TEMPLE) ? reserveB : reserveA;
    const swapInAmount = await gZaps.getSwapInAmount(reserveIn, minTokenReceivedWei);
    remainder = minTokenReceivedWei.sub(swapInAmount);
    lpSwapMinAmountOut = await templeRouter.swapExactStableForTempleQuote(pair, swapInAmount);
  } else {
    [reserveA, reserveB, ts] = await pairContract.getReserves();
    // fromToken could be either stable or temple
    let reserveIn;
    if (equalAddresses(tokenCheckSummed, TEMPLE)) {
      reserveIn = equalAddresses(token0, TEMPLE) ? reserveA : reserveB;
      const swapInAmount = await gZaps.getSwapInAmount(reserveIn, fromAmountBN);
      remainder = fromAmountBN.sub(swapInAmount);
      let priceBelowIv;
      [priceBelowIv, lpSwapMinAmountOut] = await templeRouter.swapExactTempleForStableQuote(pair, swapInAmount);
    } else {
      reserveIn = equalAddresses(token0, TEMPLE) ? reserveB : reserveA;
      const swapInAmount = await gZaps.getSwapInAmount(reserveIn, fromAmountBN);
      remainder = fromAmountBN.sub(swapInAmount);
      lpSwapMinAmountOut = await templeRouter.swapExactStableForTempleQuote(pair, swapInAmount);
    }
    swapCallData = "0x";
    minAmountOut = 0;
  }

  // so now liquidity addition will be for remainder(stable) + lpSwapMinAmountOut(temple)
  const amountADesired = equalAddresses(token0, TEMPLE) ? lpSwapMinAmountOut : remainder;
  const amountBDesired = equalAddresses(token0, TEMPLE) ? remainder : lpSwapMinAmountOut;
  [amountAMin, amountBMin] = await gZaps.addLiquidityGetMinAmounts(amountADesired, amountBDesired, pair);
  const stableToken = equalAddresses(token0, TEMPLE) ? token1 : token0;

  const params = {
    amountAMin,
    amountBMin,
    lpSwapMinAmountOut,
    stableToken,
    transferResidual
  };
  
  const zapsConnect = zaps.connect(signer);
  const overrides: { value?: BigNumber } = {};
  if (fromToken === ETH) {
    overrides.value = ethers.utils.parseEther(fromAmount);
  }
  
  if (signerAddress == zapInFor) {
    await expect(zapsConnect.zapInTempleLP(
      fromToken,
      fromAmountBN,
      minAmountOut,
      ZEROEX_EXCHANGE_PROXY,
      params,
      swapCallData,
      overrides
    ))
    .to.emit(zaps, "ZappedInTempleLP");
  } else {
    await expect(zapsConnect.zapInTempleLP(
      fromToken,
      fromAmountBN,
      minAmountOut,
      ZEROEX_EXCHANGE_PROXY,
      params,
      swapCallData,
      overrides
    ))
    .to.emit(zaps, "ZappedInTempleLP");
  }
}

function equalAddresses(
  addressA: string,
  addressB: string
): boolean {
  return ethers.utils.getAddress(addressA) == ethers.utils.getAddress(addressB);
}

async function zapInLPCurvePool(
  signer: Signer,
  zaps: GenericZap,
  pool: ICurvePool,
  fromToken: string,
  fromAmount: string,
  zapInFor: string,
  useAltFunction: boolean,
  isOneSidedLiquidityAddition: boolean
) {
  // init vars
  const signerAddress = await signer.getAddress();
  const token0 = await pool.coins(0);
  const token1 = await pool.coins(1);
  const curveFactory = ICurveFactory__factory.connect(CURVE_FACTORY, signer);
  const fromTokenContract = IERC20__factory.connect(fromToken, signer);
  let fromTokenDecimals;
  let sellToken;
  let symbol;
  if (fromToken === ETH) {
    symbol = 'ETH';
    fromTokenDecimals = 18;
    sellToken = 'ETH';
  } else {
    symbol = await fromTokenContract.symbol();
    fromTokenDecimals = await fromTokenContract.decimals();
    sellToken = fromToken;
  }
  const fromAmountBN = ethers.utils.parseUnits(fromAmount, fromTokenDecimals);
  // approve zaps
  await approveContract(fromToken, fromAmountBN, fromTokenDecimals, signer, zaps.address);

  const sellAmount = fromAmountBN.toString();
  let swapCallData, price, guaranteedPrice, gas, estimatedGas;
  let firstSwapMinAmountOut;
  let otherToken;
  let toToken = token0; // defaulted
  let poolSwapMinAmountOut;
  let poolSwapData = "0x";
  let dy;
  
  const tokenCheckSummed = ethers.utils.getAddress(fromToken);
  // if token is neither token0 nor token1, get swap data
  if (tokenCheckSummed != token0 && tokenCheckSummed != token1) {
    toToken = token0 == WETH ? token1 : token0;
    const url = `${ZEROEX_QUOTE_ENDPOINT}sellToken=${sellToken}&sellAmount=${sellAmount}&buyToken=${toToken}`;
    const response = await axios.get(url);
    ({
      data: { data: swapCallData, price, guaranteedPrice, gas, estimatedGas },
    } = response);

    console.log(`Price of ${symbol} in ${toToken}: ${price}`);

    // calculate min amount out
    const toTokenContract = IERC20__factory.connect(toToken, signer);
    const toTokenDecimals = await toTokenContract.decimals();
    const minTokenReceived = parseFloat(guaranteedPrice) * parseFloat(fromAmount);
    const minTokenReceivedWei = ethers.utils.parseUnits(
      minTokenReceived.toString(),
      toTokenDecimals
    );
    firstSwapMinAmountOut = minTokenReceivedWei;
    otherToken = toToken == token0 ? token1 : token0;
    
  } else {
    //
    toToken = fromToken;
    swapCallData = "0x";
    firstSwapMinAmountOut = fromAmountBN;
    otherToken = tokenCheckSummed == token0 ? token1: token0;
  }
  // compose swap data
  const ABI = [
    "function add_liquidity(uint256[],uint256,bool,address)",
    "function exchange(uint256,uint256,uint256,uint256,bool,address)"
  ]; // special case for test pool (meta)
  const iface = new ethers.utils.Interface(ABI);

  if (isOneSidedLiquidityAddition) {
    if (toToken == token0) {
      dy = await pool.get_dy(0, 1, firstSwapMinAmountOut);
    } else {
      dy = await pool.get_dy(1, 0, firstSwapMinAmountOut);
    }
    poolSwapData = "0x";
  } else {
    let indexes = [];
    let toSwapIn = firstSwapMinAmountOut;
    const leftover = toSwapIn.div(2);
    toSwapIn = toSwapIn.sub(leftover);
    if (toToken == token0) {
      dy = await pool.get_dy(0, 1, toSwapIn);
      // amounts[0] = leftover;
      // amounts[1] = dy;
      indexes =[0, 1];
    } else {
      dy = await pool.get_dy(1, 0, toSwapIn);
      // amounts[0] = dy;
      // amounts[1] = leftover;
      indexes = [1, 0];
    }
    poolSwapData = iface.encodeFunctionData("exchange", [indexes[0], indexes[1], toSwapIn, dy, false, zaps.address]);
  }
  
  // const minMintAmount = await pool.calc_token_amount(amounts, true);
  const minLiquidityOut = 1;
  // const mintAmount = await pool.add_liquidity(amounts, minMintAmount, zapInFor);
  //poolSwapData = pool.interface.encodeFunctionData("add_liquidity", [amounts, minMintAmount, zapInFor]);
  //poolSwapData = iface.encodeFunctionData("add_liquidity", [amounts, minMintAmount, false, zapInFor]);
  //poolSwapData = pool.interface.encodeFunctionData("exchange", [])

  poolSwapMinAmountOut = dy;
  const uniAmountAMin = BigNumber.from(0);
  const uniAmountBMin = BigNumber.from(0);
  const shouldTransferResidual = false;
  const zapLiqRequest = {
    firstSwapMinAmountOut,
    useAltFunction,
    poolSwapMinAmountOut,
    isOneSidedLiquidityAddition,
    otherToken,
    shouldTransferResidual,
    minLiquidityOut,
    uniAmountAMin,
    uniAmountBMin,
    poolSwapData
  }

  const zapsConnect = zaps.connect(signer);
  const overrides: { value?: BigNumber } = {};
  if (fromToken === ETH) {
    overrides.value = ethers.utils.parseEther(fromAmount);
  }

  if (signerAddress == zapInFor) {
    await expect(zapsConnect.zapLiquidityCurvePool(
      fromToken,
      fromAmountBN,
      pool.address,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      zapLiqRequest,
      overrides
    ))
    .to.emit(zaps, "ZappedLPCurve");
  } else {
    await expect(zapsConnect.zapLiquidityCurvePoolFor(
      fromToken,
      fromAmountBN,
      pool.address,
      zapInFor,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      zapLiqRequest,
      overrides
    ))
    .to.emit(zaps, "ZappedLPCurve");
  }

  // checks

}

async function zapInLPUniV2(
  signer: Signer,
  zaps: GenericZap,
  router: UniswapV2Router02NoEth,
  pair: UniswapV2Pair,
  fromToken: string,
  fromAmount: string,
  zapInFor: string,
  useAltFunction: boolean,
  shouldTransferResidual: boolean
) {
  // init vars
  const signerAddress = await signer.getAddress();
  const token0 = await pair.token0();
  const token1 = await pair.token1();
  const pairToken0Contract = IERC20__factory.connect(token0, signer);
  const pairToken1Contract = IERC20__factory.connect(token1, signer);
  const fromTokenContract = IERC20__factory.connect(fromToken, signer);
  let fromTokenDecimals;
  let sellToken;
  let symbol;
  if (fromToken === ETH) {
    symbol = 'ETH';
    fromTokenDecimals = 18;
    sellToken = 'ETH';
  } else {
    symbol = await fromTokenContract.symbol();
    fromTokenDecimals = await fromTokenContract.decimals();
    sellToken = fromToken;
  }
  const fromAmountBN = ethers.utils.parseUnits(fromAmount, fromTokenDecimals);
  // approve zaps
  await approveContract(fromToken, fromAmountBN, fromTokenDecimals, signer, zaps.address);
 
  const sellAmount = fromAmountBN.toString();
  let swapCallData, price, guaranteedPrice, gas, estimatedGas;
  let firstSwapMinAmountOut;
  let otherToken;
  let poolSwapMinAmountOut;
  let amountToSwapIn;
  let reserveIn, reserveOut; 
  const isOneSidedLiquidityAddition = false;
  const poolSwapData = "0x";
  // if token is neither token0 nor token1, get swap data
  const tokenCheckSummed = ethers.utils.getAddress(fromToken);
  if (tokenCheckSummed != token0 && tokenCheckSummed != token1) {
    const toToken = token0 == WETH ? token1 : token0;
    const url = `${ZEROEX_QUOTE_ENDPOINT}sellToken=${sellToken}&sellAmount=${sellAmount}&buyToken=${toToken}`;
    const response = await axios.get(url);
    ({
      data: { data: swapCallData, price, guaranteedPrice, gas, estimatedGas },
    } = response);

    console.log(`Price of ${symbol} in ${toToken}: ${price}`);

    // calculate min amount out
    const toTokenContract = IERC20__factory.connect(toToken, signer);
    const toTokenDecimals = await toTokenContract.decimals();
    const minTokenReceived = parseFloat(guaranteedPrice) * parseFloat(fromAmount);
    const minTokenReceivedWei = ethers.utils.parseUnits(
      minTokenReceived.toString(),
      toTokenDecimals
    );
    firstSwapMinAmountOut = minTokenReceivedWei;
    otherToken = toToken == token0 ? token1 : token0;
    const reserveData = await pair.getReserves();
    // approximation as amount could be more than min amount. swap
    if (toToken == token0) {
      amountToSwapIn = await zaps.getSwapInAmount(reserveData[0], firstSwapMinAmountOut);
      reserveIn = reserveData[0];
      reserveOut = reserveData[1];
    } else {
      amountToSwapIn = await zaps.getSwapInAmount(reserveData[1], firstSwapMinAmountOut);
      reserveIn = reserveData[1];
      reserveOut = reserveData[0];
    }
    // use swap in amount to get tokens out
    poolSwapMinAmountOut = await router.getAmountOut(amountToSwapIn, reserveIn, reserveOut);
  } else {
    swapCallData = "0x";
    firstSwapMinAmountOut = fromAmountBN;
    otherToken = tokenCheckSummed == token0 ? token1: token0;
    const reserveData = await pair.getReserves();
    // approximation as amount could be more than min amount
    if (tokenCheckSummed == token0) {
      amountToSwapIn = await zaps.getSwapInAmount(reserveData[0], firstSwapMinAmountOut);
      reserveIn = reserveData[0];
      reserveOut = reserveData[1];
    } else {
      amountToSwapIn = await zaps.getSwapInAmount(reserveData[1], firstSwapMinAmountOut);
      reserveIn = reserveData[1];
      reserveOut = reserveData[0];
    }
    poolSwapMinAmountOut = await router.getAmountOut(amountToSwapIn, reserveIn, reserveOut);
  }
  const minLiquidityOut = 1;
  const uniAmountAMin = BigNumber.from(0);
  const uniAmountBMin = BigNumber.from(0);
  const zapLiqRequest = {
    firstSwapMinAmountOut,
    useAltFunction,
    poolSwapMinAmountOut,
    isOneSidedLiquidityAddition,
    otherToken,
    shouldTransferResidual,
    minLiquidityOut,
    uniAmountAMin,
    uniAmountBMin,
    poolSwapData
  }

  const zapsConnect = zaps.connect(signer);
  const overrides: { value?: BigNumber } = {};
  if (fromToken === ETH) {
    overrides.value = ethers.utils.parseEther(fromAmount);
  }

  const liquidityBefore = await pair.balanceOf(zapInFor);
  const tokenBalanceBefore = await getBalance(fromTokenContract, zapInFor);
  const pairToken0BalanceBefore = await getBalance(pairToken0Contract, zapInFor);
  const pairToken1BalanceBefore = await getBalance(pairToken0Contract, zapInFor);
  const signerTokenBalanceBefore = await getBalance(fromTokenContract, signerAddress);
  const zapsTokenBalanceBefore = await getBalance(fromTokenContract, zaps.address);
  const zapsPairToken0BalanceBefore = await getBalance(pairToken0Contract, zaps.address);
  const zapsPairToken1BalanceBefore = await getBalance(pairToken1Contract, zaps.address);
  if (signerAddress == zapInFor) {
    await expect(zapsConnect.zapLiquidityUniV2(
      fromToken,
      fromAmountBN,
      pair.address,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      zapLiqRequest,
      overrides
    ))
    .to.emit(zaps, "ZappedLPUniV2");
  } else {
    await expect(zapsConnect.zapLiquidityUniV2For(
      fromToken,
      fromAmountBN,
      pair.address,
      zapInFor,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      zapLiqRequest,
      overrides
    ))
    .to.emit(zaps, "ZappedLPUniV2");
  }

  // checks
  const liquidityAfter = await pair.balanceOf(zapInFor);
  const signerTokenBalanceAfter = await getBalance(fromTokenContract, signerAddress);
  expect(liquidityAfter.sub(liquidityBefore)).to.gt(0);

  // ensure no residual tokens
  if (shouldTransferResidual) {
    expect(signerTokenBalanceBefore.sub(signerTokenBalanceAfter)).to.lte(fromAmountBN);

    const zapsTokenBalanceAfter = await getBalance(fromTokenContract, zaps.address);
    const zapsPairToken0BalanceAfter = await getBalance(pairToken0Contract, zaps.address);
    const zapsPairToken1BalanceAfter =await getBalance(pairToken1Contract, zaps.address);
    const pairToken0BalanceAfter = await getBalance(pairToken0Contract, zapInFor); 
    const pairToken1BalanceAfter = await getBalance(pairToken1Contract, zapInFor);
    expect(zapsTokenBalanceAfter.sub(zapsTokenBalanceBefore)).to.eq(0);
    expect(zapsPairToken0BalanceAfter.sub(zapsPairToken0BalanceBefore)).to.eq(0);
    expect(zapsPairToken1BalanceAfter).to.eq(zapsPairToken1BalanceBefore);
    // user residuals received
    if (equalAddresses(signerAddress, zapInFor)) {
      // also because based on adding liquidity, a pair token might have been sent as initial token
      expect(pairToken0BalanceBefore.sub(pairToken0BalanceAfter)).to.gte(0);
      expect(pairToken1BalanceBefore.sub(pairToken1BalanceAfter)).to.gte(0);
    } else {
      expect(pairToken0BalanceAfter.sub(pairToken0BalanceBefore)).to.gte(0);
      expect(pairToken1BalanceAfter.sub(pairToken1BalanceBefore)).to.gte(0);
    }
    
  } else {
    expect(signerTokenBalanceBefore.sub(signerTokenBalanceAfter)).to.gte(fromAmountBN);
  }
}

async function airdropTemple(
  owner: Signer,
  airdropRecipients: Signer[],
  airdropAmount: BigNumberish
): Promise<TempleERC20Token> {
  const templeMultisig = await impersonateAddress(MULTISIG)
  const templeToken = TempleERC20Token__factory.connect(TEMPLE, templeMultisig);
  const templeTokenOwner = TempleERC20Token__factory.connect(TEMPLE, owner);

  await templeToken.addMinter(ownerAddress);
  for (const u of airdropRecipients) {
    await templeTokenOwner.mint(await u.getAddress(), airdropAmount)
  }

  return templeTokenOwner;
}

// zap temple using templezaps contract, which uses generic zaps
async function zapTemple(
  signer: Signer,
  zapInfor: string,
  templeZaps: TempleZaps,
  zaps: GenericZap,
  tokenAddr: string,
  tokenAmount: string,
) {
  const tokenContract = IERC20__factory.connect(tokenAddr, signer);
  const templeToken = IERC20__factory.connect(TEMPLE, signer);
  let symbol;
  let decimals;
  let sellToken;
  if (tokenAddr === ETH) {
    symbol = 'ETH';
    decimals = 18;
    sellToken = 'ETH';
  } else {
    symbol = await tokenContract.symbol();
    decimals = await tokenContract.decimals();
    sellToken = tokenAddr;
  }

  // Get TEMPLE balance before zap
  const signerAddress = await signer.getAddress();
  const balanceBefore = signerAddress == zapInfor ? await getBalance(templeToken, signerAddress) : await getBalance(templeToken, zapInfor);

  // Approve token
  if (tokenAddr !== ETH) {
    await tokenContract.approve(
      templeZaps.address,
      ethers.utils.parseUnits(tokenAmount, decimals)
    );
    const allowance = await tokenContract.allowance(
      signerAddress,
      templeZaps.address
    );
  }

  // Get quote from 0x API
  let swapCallData, price, guaranteedPrice, gas, estimatedGas;
  const sellAmount = ethers.utils.parseUnits(tokenAmount, decimals).toString();

  if (tokenAddr === FRAX) {
    guaranteedPrice = '0.99';
    swapCallData = '0x';
  } else {
    const url = `${ZEROEX_QUOTE_ENDPOINT}sellToken=${sellToken}&sellAmount=${sellAmount}&buyToken=${FRAX}`;
    const response = await axios.get(url);
    ({
      data: { data: swapCallData, price, guaranteedPrice, gas, estimatedGas },
    } = response);

    console.log(`Price of ${symbol} in FRAX: ${price}`);
  }

  const minFraxReceived = parseFloat(guaranteedPrice) * parseFloat(tokenAmount);
  const minFraxReceivedWei = ethers.utils.parseUnits(
    minFraxReceived.toString(),
    18
  );
  const fraxPair = await templeRouter.tokenPair(FRAX);
  // Do zap
  const minExpectedTemple = await getExpectedTemple(
    signer,
    guaranteedPrice,
    tokenAmount,
    fraxPair
  );

  const templeZapsConnect = templeZaps.connect(signer);
  const overrides: { value?: BigNumber } = {};
  if (tokenAddr === ETH) {
    overrides.value = ethers.utils.parseEther(tokenAmount);
  }
  const checkSumedTokenAddr = ethers.utils.getAddress(tokenAddr);
  const checkSumedFraxAddr = ethers.utils.getAddress(FRAX);
  if (signerAddress == zapInfor) {
    await templeZapsConnect.zapInTemple(
      tokenAddr,
      sellAmount,
      minExpectedTemple,
      FRAX,
      minFraxReceivedWei,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      overrides
    )
    //.to.emit(zaps, "ZappedIn")
    //.withArgs(templeZaps.address, checkSumedTokenAddr, sellAmount, checkSumedFraxAddr, minFraxReceivedWei);
  } else {
    await templeZapsConnect.zapInTempleFor(
      tokenAddr,
      sellAmount,
      minExpectedTemple,
      FRAX,
      minFraxReceivedWei,
      zapInfor,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      overrides
    )
    //.to.emit(zaps, "ZappedIn")
  }
  
  console.log(
    `Minimum expected Temple: ${ethers.utils.formatUnits(
      minExpectedTemple,
      18
    )}`
  );

  /// check amounts
  const balanceAfter = await getBalance(templeToken, zapInfor);

  expect(balanceAfter.gte(minExpectedTemple)).to.be.true;
  expect(balanceAfter).to.gte(minExpectedTemple.add(balanceBefore));
}

async function zapIn(
  signer: Signer,
  zapInfor: string,
  zaps: GenericZap,
  tokenAddr: string,
  tokenAmount: string,
  toTokenAddr: string
) {
  const tokenContract = IERC20__factory.connect(tokenAddr, signer);
  const toTokenContract = IERC20__factory.connect(toTokenAddr, signer);
  let symbol;
  let decimals;
  let sellToken;
  if (tokenAddr === ETH) {
    symbol = 'ETH';
    decimals = 18;
    sellToken = 'ETH';
  } else {
    symbol = await tokenContract.symbol();
    decimals = await tokenContract.decimals();
    sellToken = tokenAddr;
  }

  // Get TEMPLE balance before zap
  const signerAddress = await signer.getAddress();
  //const balanceBefore = await getBalance(tokenContract, signerAddress);
  const balanceBefore = signerAddress == zapInfor ? 
    await getBalance(toTokenContract, signerAddress) : await getBalance(toTokenContract, zapInfor);

  // Approve token
  if (tokenAddr !== ETH) {
    await tokenContract.approve(
      zaps.address,
      ethers.utils.parseUnits(tokenAmount, decimals)
    );
    const allowance = await tokenContract.allowance(
      signerAddress,
      zaps.address
    );
  }

  // Get quote from 0x API
  let swapCallData, price, guaranteedPrice, gas, estimatedGas;
  const sellAmount = ethers.utils.parseUnits(tokenAmount, decimals).toString();
  const url = `${ZEROEX_QUOTE_ENDPOINT}sellToken=${sellToken}&sellAmount=${sellAmount}&buyToken=${toTokenAddr}`;
  const response = await axios.get(url);
  ({
    data: { data: swapCallData, price, guaranteedPrice, gas, estimatedGas },
  } = response);

  console.log(`Price of ${symbol} in ${toTokenAddr}: ${price}`);

  const zapsConnect = zaps.connect(signer);
  const overrides: { value?: BigNumber } = {};
  if (tokenAddr === ETH) {
    overrides.value = ethers.utils.parseEther(tokenAmount);
  }

  const minTokenReceived = parseFloat(guaranteedPrice) * parseFloat(tokenAmount);
  const minTokenReceivedWei = ethers.utils.parseUnits(
    minTokenReceived.toString(),
    18
  );
  
  if (signerAddress == zapInfor) {
    await expect(zapsConnect.zapIn(
      tokenAddr,
      sellAmount,
      toTokenAddr,
      minTokenReceivedWei,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      overrides
    ))
    .to.emit(zapsConnect, "ZappedIn");
  } else {
    await expect(zapsConnect.zapInFor(
      tokenAddr,
      sellAmount,
      toTokenAddr,
      minTokenReceivedWei,
      zapInfor,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      overrides
    ))
    .to.emit(zapsConnect, "ZappedIn");
  }

  // Get balance after zap
  const balanceAfter = await getBalance(toTokenContract, zapInfor);

  expect(balanceAfter.gte(minTokenReceivedWei)).to.be.true;
  expect(balanceAfter).to.gte(minTokenReceivedWei.add(balanceBefore));
}

async function zapInVault(
  signer: Signer,
  zaps: TempleZaps,
  tokenAddr: string,
  tokenAmount: string,
  vaultAddr: string,
  zapInFor: string
) {
  const tokenContract = IERC20__factory.connect(tokenAddr, signer);
  const templeToken = IERC20__factory.connect(TEMPLE, signer);

  let symbol;
  let decimals;
  let sellToken;
  if (tokenAddr === ETH) {
    symbol = 'ETH';
    decimals = 18;
    sellToken = 'ETH';
  } else {
    symbol = await tokenContract.symbol();
    decimals = await tokenContract.decimals();
    sellToken = tokenAddr;
  }

  // Get TEMPLE balance before zap
  const signerAddress = await signer.getAddress();
  const balanceBefore = await getBalance(templeToken, signerAddress);

  // Approve token
  if (tokenAddr !== ETH) {
    await tokenContract.approve(
      zaps.address,
      ethers.utils.parseUnits(tokenAmount, decimals)
    );
    const allowance = await tokenContract.allowance(
      signerAddress,
      zaps.address
    );
  }
  
  // Get quote from 0x API
  let swapCallData, price, guaranteedPrice, gas, estimatedGas;
  const sellAmount = ethers.utils.parseUnits(tokenAmount, decimals).toString();

  if (tokenAddr === FRAX) {
    guaranteedPrice = '0.99';
    swapCallData = '0x';
  } else {
    const url = `${ZEROEX_QUOTE_ENDPOINT}sellToken=${sellToken}&sellAmount=${sellAmount}&buyToken=${FRAX}`;
    const response = await axios.get(url);
    ({
      data: { data: swapCallData, price, guaranteedPrice, gas, estimatedGas },
    } = response);

    console.log(`Price of ${symbol} in FRAX: ${price}`);
  }

  // Do zap
  const zapsConnect = zaps.connect(signer);
  const overrides: { value?: BigNumber } = {};
  if (tokenAddr === ETH) {
    overrides.value = ethers.utils.parseEther(tokenAmount);
  }

  const sellAmountBN = BigNumber.from(sellAmount);
  const feePerTempleScaledPerHour = await joiningFee.calc(await vault.firstPeriodStartTimestamp(), await vault.periodDuration(), vault.address);
  ///////
  const fee = sellAmountBN.mul(feePerTempleScaledPerHour).div(toAtto(1));
  // convert to approximate temple value for later checks
  const minExpectedTemple = await getExpectedTemple(
    signer,
    guaranteedPrice,
    tokenAmount,
    await templeRouter.tokenPair(FRAX)
  );
  const minFraxReceived = parseFloat(guaranteedPrice) * parseFloat(tokenAmount);
  const minFraxReceivedWei = ethers.utils.parseUnits(
    minFraxReceived.toString(),
    18
  );
  const vaultExposureTokenBefore = await templeExposure.balanceOf(vault.address);
  const vaultedTempleAmountBefore = await getBalance(templeToken, vaultedTemple.address)
  await zaps.setSupportedStables([FRAX, FEI], [true, true]);
  if (equalAddresses(signerAddress, zapInFor)) {
    await expect(zapsConnect.zapInVault(
      tokenAddr,
      sellAmount,
      minExpectedTemple,
      FRAX,
      minFraxReceivedWei,
      vaultAddr,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      overrides
    ))
    .to.emit(zapsConnect, "ZappedTempleInVault");
  } else {
    await expect(zapsConnect.zapInVaultFor(
      tokenAddr,
      sellAmount,
      minExpectedTemple,
      FRAX,
      minFraxReceivedWei,
      vaultAddr,
      zapInFor,
      ZEROEX_EXCHANGE_PROXY,
      swapCallData,
      overrides
    ))
    .to.emit(zapsConnect, "ZappedTempleInVault");
  }
  

  expect(await templeExposure.balanceOf(vault.address)).to.gte(vaultExposureTokenBefore.add(minExpectedTemple));
  expect(await getBalance(templeToken, vaultedTemple.address)).to.gte(vaultedTempleAmountBefore.add(minExpectedTemple));
  expect(await vault.balanceOf(zapInFor)).to.gte(minExpectedTemple.sub(fee));
  expect(await getBalance(templeToken, vaultedTemple.address)).to.gte(minExpectedTemple);

  // Get Temple balance after zap
  const balanceAfter = await getBalance(templeToken, signerAddress);
  expect(balanceAfter).to.gte(balanceBefore);
}

async function impersonateAddress(address: string) {
  await network.provider.request({
    method: 'hardhat_impersonateAccount',
    params: [address],
  });
  return ethers.provider.getSigner(address);
}

async function getExpectedTemple(
  signer: Signer,
  guaranteedPrice: string,
  tokenAmount: string,
  pair: string
): Promise<BigNumber> {
  const ammContract = TempleStableAMMRouter__factory.connect(TEMPLE_STABLE_ROUTER, signer);
  const minFraxReceived = parseFloat(guaranteedPrice) * parseFloat(tokenAmount);
  const minFraxReceivedWei = ethers.utils.parseUnits(
    minFraxReceived.toString(),
    18
  );
  const quote = await ammContract.swapExactStableForTempleQuote(pair, minFraxReceivedWei);
  return quote;
}

async function approveContract(
  fromToken: string,
  fromAmountBN: BigNumber,
  fromTokenDecimals: number,
  signer: Signer,
  contractAddress: string
) {
  const signerAddress = await signer.getAddress();
  const fromTokenContract = IERC20__factory.connect(fromToken, signer);
  // approve zaps
  if (fromToken !== ETH) {
    await fromTokenContract.approve(
      contractAddress,
      fromAmountBN,
    );
    const allowance = await fromTokenContract.allowance(
      signerAddress,
      contractAddress
    );
  }
}

async function getBalance(token: IERC20, owner: string) {
  if (equalAddresses(token.address, ETH)) {
    return await token.provider.getBalance(owner);
  }
  return await token.balanceOf(owner);
};

async function getLatestBlockNumberWithEnoughConfirmations(): Promise<Number> {
  const provider = new ethers.providers.StaticJsonRpcProvider(process.env.TESTS_MAINNET_RPC_URL);
  const blockNumber = await provider.getBlockNumber() - 5;
  return blockNumber;
}

async function resetFork(blockNumber: Number) {
  await network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl: process.env.TESTS_MAINNET_RPC_URL,
          blockNumber
        },
      },
    ],
  });
}