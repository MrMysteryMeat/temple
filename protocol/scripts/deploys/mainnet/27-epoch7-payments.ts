import '@nomiclabs/hardhat-ethers';
import { ethers, network } from 'hardhat';
import { TempleTeamPayments__factory } from '../../../typechain';
import {
  DeployedContracts,
  DEPLOYED_CONTRACTS,
  expectAddressWithPrivateKey,
  toAtto,
  waitForMaxGas,
} from '../helpers';

// @dev: UPDATE THIS
const maxGasPrice = ethers.utils.parseUnits('100', 'gwei');

async function main() {
  expectAddressWithPrivateKey();
  const [owner] = await ethers.getSigners();

  let DEPLOYED: DeployedContracts;

  if (DEPLOYED_CONTRACTS[network.name] === undefined) {
    console.log(`No contracts configured for ${network.name}`);
    return;
  } else {
    DEPLOYED = DEPLOYED_CONTRACTS[network.name];
  }

  let currentGasPrice = await waitForMaxGas(maxGasPrice);

  const templeTeamPaymentsFactory = new TempleTeamPayments__factory(owner);
  const startDate = Math.round(Date.now() / 1000);
  const templeTeamPayments = await templeTeamPaymentsFactory.deploy(
    DEPLOYED.TEMPLE,
    10, // although no vesting, but has to be at least 1 second vesting else division by zero error
    startDate,
    {
      gasPrice: currentGasPrice,
    }
  );
  console.log(
    `Deployed... waiting for transaction to mine: ${templeTeamPayments.deployTransaction.hash}`
  );
  await templeTeamPayments.deployed();
  console.log('Contract deployed');
  console.log(
    `yarn hardhat verify --network ${network.name} ${templeTeamPayments.address} ${DEPLOYED.TEMPLE} 10 ${startDate}`
  );

  const allocs: { [address: string]: number } = {
    '0x09D65b16F0FB469a1Cab065d0060a9dFA89dabe1': 2268.04,
    '0xE9e073dC07bd0a7b825108683b5ac095dD2eCE60': 17545.57,
    '0x49F29f02947F609f1b3779A293B106215d4434d5': 5213.4,
    '0xA1D0Ff488595Eb262c086A344421a43717F8fCAF': 721.65,
    '0xF9B4De4bB735ACE677813ac8E24B6530B2D595E9': 1288.66,
    '0xF94A14fdEbf75007329E50f0aC9f459fF566B157': 1030.93,
    '0x228900C0263B6Ac19E66fF491E30c83d3473a2d8': 3127.09,
    '0xe345e9605391c13Fd2502e7141D54b752AaDB184': 8762.89,
    '0x87997a32A5Ba852D95CFC7c803B3b3371B223aE2': 5154.64,
    '0x62370003cEbacd6415d32375095FFc8AB7238eBC': 1546.39,
    '0x4e51F68940FaC327B2f018B6b79109031031fe8b': 1030.93,
    '0xd82C6E486FBd0Be55fD5589532aF8D69aB29C1AA': 1511.12,
    '0x08e19c5B9667FA2d49A6709482aa5aC0C4a7b198': 2010.31,
    '0xbCB921901a212E9876DB73fa32C8d92aCB6AAbF8': 10309.28,
    '0x0d27AD08BC0Fd7b35a075df3373273de12d0E830': 618.56,
    '0x2acfd61F1ccbE5F8fF1fF34a6eC2958685b8Fc89': 2061.86,
    '0x248e5c90143E6E283E5c45387b10D91049C390c8': 206.19,
    '0x5245859F78bb510aB9c8A4Ce74506Ec1F7D24DD3': 721.65,
    '0xe5D74520A77EDaa6Fff050975775213FA01948c9': 7989.69,
    '0xfED4FEd3C90C4e93D203D25EF2B148C863b68356': 7989.69,
    '0x588282ADA5B9D872d0eBF506c5C1b541e2a60BBa': 7216.49,
    '0x10AD3Fc9eE37acCdA9E58439C53B8A564C31eC5b': 8247.42,
    '0x832d7aed44ff0396770Be2F2f3603153A8c787E9': 4639.18,
    '0x052ABf6EA12f00Aa68E93e64B2f3d4D2Cc78494e': 5154.64,
    '0x0F9fd136c773fbe39E4F05440d5448ca8cBe457c': 9793.81,
    '0x2c90982BEc7A5aD00A65ce87C4F62263A3055cBB': 5567.01,
    '0x27E9578BD639A2876636A0DDEfFeb7bd4b539003': 824.74,
    '0x06e6F9DE62afa6F2Ca092Fe17fF57dAc3Ae30db1': 6494.85,
    '0x7f068d2890bD5ce602DCB9d040515306d067cA02': 1030.93,
    '0x73E29Bb563592610a4DdDfbeEFC0259E3A27e410': 618.56,
    '0x294A29Ad8842E7234EE16B1b16f1F98747B715Eb': 206.19,
    '0x3f0e5DbC6093E8773F14f0186FFE32F733C34ef7': 773.2,
    '0xDCeC3b61fFB8b946A5c07129F3855adDc7077ad6': 206.19,
    '0xF225d51037eBcC32B3347184A89a10F1FF3e58df': 2061.86,
    '0x8CC8bA612168B5A8cBefb977D7DE7375A61A1009': 14011.06,
    '0x779731032c24356199a7baaFae20f4271c0Ccc80': 206.19,
    '0xe107f0FfB7FBC701b00CEcc3E8d003339E271b93': 1134.02,
    '0x9743b92460fC79F070D2059D6C533bE84A1dd493': 16237.11,
    '0x8B81e8E65B9BA652A8F8455062BFe4930929d7D1': 721.65,
    '0x056c7b90255cA73EF674F75d9653bB5d947c4C9E': 1546.39,
    '0x71e41D0dFeA7ca196c7B104F01EfFd1102af9694': 48910.71,
  };

  currentGasPrice = await waitForMaxGas(maxGasPrice);
  console.log('Setting allocations');
  const tx1 = await templeTeamPayments.setAllocations(
    Object.keys(allocs),
    Object.values(allocs).map((a) => toAtto(a)),
    {
      gasPrice: currentGasPrice,
    }
  );
  await tx1.wait();
  console.log('Mined');
  console.log(
    `Total $TEMPLE allocated: ${Object.values(allocs).reduce(
      (sum, cur) => (sum += cur),
      0
    )}, across ${Object.keys(allocs).length} addresses`
  );

  currentGasPrice = await waitForMaxGas(maxGasPrice);
  console.log('Transferring owner');
  const tx2 = await templeTeamPayments.transferOwnership(DEPLOYED.MULTISIG, {
    gasPrice: currentGasPrice,
  });
  await tx2.wait();
  console.log('Mined');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });