/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VaultedTemple, VaultedTempleInterface } from "../VaultedTemple";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_templeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_templeExposure",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "toAccount",
        type: "address",
      },
    ],
    name: "toTemple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c36380380610c3683398101604081905261002f916100b9565b61003833610069565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561010a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100cb578182fd5b82516100d6816100f2565b60208401519092506100e7816100f2565b809150509250929050565b6001600160a01b038116811461010757600080fd5b50565b610b1d806101196000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b14610089578063d9caed12146100b5578063f2fde38b146100c857600080fd5b80634d4c23a81461006c578063715018a614610081575b600080fd5b61007f61007a366004610a23565b6100db565b005b61007f6101d5565b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61007f6100c33660046109c8565b610262565b61007f6100d63660046109ae565b61045b565b60025473ffffffffffffffffffffffffffffffffffffffff1633146101ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604d60248201527f5661756c7454656d706c654d616e616765723a204f6e6c792054656d7065457860448201527f706f737572652063616e2072656465656d2074656d706c65206f6e206265686160648201527f6c66206f662061207661756c7400000000000000000000000000000000000000608482015260a4015b60405180910390fd5b6001546101d19073ffffffffffffffffffffffffffffffffffffffff16828461058b565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101a4565b6102606000610618565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101a4565b73ffffffffffffffffffffffffffffffffffffffff8216610360576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f746f2061646472657373207a65726f000000000000000000000000000000000060448201526064016101a4565b73ffffffffffffffffffffffffffffffffffffffff831661044b5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103d5576040519150601f19603f3d011682016040523d82523d6000602084013e6103da565b606091505b5050905080610445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f73656e64206661696c656400000000000000000000000000000000000000000060448201526064016101a4565b50505050565b61045683838361058b565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101a4565b73ffffffffffffffffffffffffffffffffffffffff811661057f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101a4565b61058881610618565b50565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261045690849061068d565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006106ef826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166107999092919063ffffffff16565b805190915015610456578080602001905181019061070d9190610a03565b610456576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101a4565b60606107a884846000856107b2565b90505b9392505050565b606082471015610844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101a4565b843b6108ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101a4565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108d59190610a4e565b60006040518083038185875af1925050503d8060008114610912576040519150601f19603f3d011682016040523d82523d6000602084013e610917565b606091505b5091509150610927828286610932565b979650505050505050565b606083156109415750816107ab565b8251156109515782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a49190610a6a565b803573ffffffffffffffffffffffffffffffffffffffff811681146109a957600080fd5b919050565b6000602082840312156109bf578081fd5b6107ab82610985565b6000806000606084860312156109dc578182fd5b6109e584610985565b92506109f360208501610985565b9150604084013590509250925092565b600060208284031215610a14578081fd5b815180151581146107ab578182fd5b60008060408385031215610a35578182fd5b82359150610a4560208401610985565b90509250929050565b60008251610a60818460208701610abb565b9190910192915050565b6020815260008251806020840152610a89816040850160208701610abb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60005b83811015610ad6578181015183820152602001610abe565b83811115610445575050600091015256fea26469706673582212208ec11fc7065ed5746fec00f34876819aa0d9fd994d5e41c213d3547b2e82703564736f6c63430008040033";

type VaultedTempleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultedTempleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VaultedTemple__factory extends ContractFactory {
  constructor(...args: VaultedTempleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "VaultedTemple";
  }

  deploy(
    _templeToken: string,
    _templeExposure: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultedTemple> {
    return super.deploy(
      _templeToken,
      _templeExposure,
      overrides || {}
    ) as Promise<VaultedTemple>;
  }
  getDeployTransaction(
    _templeToken: string,
    _templeExposure: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _templeToken,
      _templeExposure,
      overrides || {}
    );
  }
  attach(address: string): VaultedTemple {
    return super.attach(address) as VaultedTemple;
  }
  connect(signer: Signer): VaultedTemple__factory {
    return super.connect(signer) as VaultedTemple__factory;
  }
  static readonly contractName: "VaultedTemple";
  public readonly contractName: "VaultedTemple";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultedTempleInterface {
    return new utils.Interface(_abi) as VaultedTempleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultedTemple {
    return new Contract(address, _abi, signerOrProvider) as VaultedTemple;
  }
}