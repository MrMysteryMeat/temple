/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FakeERC20, FakeERC20Interface } from "../FakeERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f4138038062000f418339810160408190526200003491620001c7565b8151829082906200004d9060039060208501906200006e565b508051620000639060049060208401906200006e565b505050505062000281565b8280546200007c906200022e565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b600082601f83011262000125578081fd5b81516001600160401b03808211156200014257620001426200026b565b604051601f8301601f19908116603f011681019082821181831017156200016d576200016d6200026b565b8160405283815260209250868385880101111562000189578485fd5b8491505b83821015620001ac57858201830151818301840152908201906200018d565b83821115620001bd57848385830101525b9695505050505050565b60008060408385031215620001da578182fd5b82516001600160401b0380821115620001f1578384fd5b620001ff8683870162000114565b9350602085015191508082111562000215578283fd5b50620002248582860162000114565b9150509250929050565b600181811c908216806200024357607f821691505b602082108114156200026557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610cb080620002916000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806340c10f1911610081578063a457c2d71161005b578063a457c2d7146101b4578063a9059cbb146101c7578063dd62ed3e146101da57600080fd5b806340c10f191461016157806370a082311461017657806395d89b41146101ac57600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f578063395093511461014e57600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610220565b6040516100ee9190610b78565b60405180910390f35b61010a610105366004610b4f565b6102b2565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a366004610b14565b6102ca565b604051601281526020016100ee565b61010a61015c366004610b4f565b6102ee565b61017461016f366004610b4f565b61033a565b005b61011e610184366004610ac1565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100e1610348565b61010a6101c2366004610b4f565b610357565b61010a6101d5366004610b4f565b61042d565b61011e6101e8366004610ae2565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461022f90610c26565b80601f016020809104026020016040519081016040528092919081815260200182805461025b90610c26565b80156102a85780601f1061027d576101008083540402835291602001916102a8565b820191906000526020600020905b81548152906001019060200180831161028b57829003601f168201915b5050505050905090565b6000336102c081858561043b565b5060019392505050565b6000336102d88582856105ee565b6102e38585856106c5565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102c09082908690610335908790610be9565b61043b565b6103448282610978565b5050565b60606004805461022f90610c26565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610420576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102e3828686840361043b565b6000336102c08185856106c5565b73ffffffffffffffffffffffffffffffffffffffff83166104dd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610417565b73ffffffffffffffffffffffffffffffffffffffff8216610580576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610417565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106bf57818110156106b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610417565b6106bf848484840361043b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610417565b73ffffffffffffffffffffffffffffffffffffffff821661080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610417565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156108c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610417565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610905908490610be9565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161096b91815260200190565b60405180910390a36106bf565b73ffffffffffffffffffffffffffffffffffffffff82166109f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610417565b8060026000828254610a079190610be9565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610a41908490610be9565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610abc57600080fd5b919050565b600060208284031215610ad2578081fd5b610adb82610a98565b9392505050565b60008060408385031215610af4578081fd5b610afd83610a98565b9150610b0b60208401610a98565b90509250929050565b600080600060608486031215610b28578081fd5b610b3184610a98565b9250610b3f60208501610a98565b9150604084013590509250925092565b60008060408385031215610b61578182fd5b610b6a83610a98565b946020939093013593505050565b6000602080835283518082850152825b81811015610ba457858101830151858201604001528201610b88565b81811115610bb55783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610c21577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b600181811c90821680610c3a57607f821691505b60208210811415610c74577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea264697066735822122049b20821eb4b0efc4060af621abd3ab0bca5fa7c0d59630f910a29090396179464736f6c63430008040033";

type FakeERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FakeERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FakeERC20__factory extends ContractFactory {
  constructor(...args: FakeERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FakeERC20";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FakeERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<FakeERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): FakeERC20 {
    return super.attach(address) as FakeERC20;
  }
  connect(signer: Signer): FakeERC20__factory {
    return super.connect(signer) as FakeERC20__factory;
  }
  static readonly contractName: "FakeERC20";
  public readonly contractName: "FakeERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeERC20Interface {
    return new utils.Interface(_abi) as FakeERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeERC20 {
    return new Contract(address, _abi, signerOrProvider) as FakeERC20;
  }
}