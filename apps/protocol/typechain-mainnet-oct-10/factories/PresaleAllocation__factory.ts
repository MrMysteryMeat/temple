/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PresaleAllocation,
  PresaleAllocationInterface,
} from "../PresaleAllocation";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allocationOf",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "setAllocation",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6107488061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c5780638da5cb5b146100665780638e40ee9b14610084578063a4f82f27146100a0578063f2fde38b146100d1575b600080fd5b6100646100ed565b005b61006e610175565b60405161007b919061059b565b60405180910390f35b61009e600480360381019061009991906104e8565b61019e565b005b6100ba60048036038101906100b591906104bf565b6102ad565b6040516100c89291906105f6565b60405180910390f35b6100eb60048036038101906100e691906104bf565b6102d1565b005b6100f56103c9565b73ffffffffffffffffffffffffffffffffffffffff16610113610175565b73ffffffffffffffffffffffffffffffffffffffff1614610169576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610160906105d6565b60405180910390fd5b61017360006103d1565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101a66103c9565b73ffffffffffffffffffffffffffffffffffffffff166101c4610175565b73ffffffffffffffffffffffffffffffffffffffff161461021a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610211906105d6565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550505050565b60016020528060005260406000206000915090508060000154908060010154905082565b6102d96103c9565b73ffffffffffffffffffffffffffffffffffffffff166102f7610175565b73ffffffffffffffffffffffffffffffffffffffff161461034d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610344906105d6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b4906105b6565b60405180910390fd5b6103c6816103d1565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506104a4816106e4565b92915050565b6000813590506104b9816106fb565b92915050565b6000602082840312156104d157600080fd5b60006104df84828501610495565b91505092915050565b6000806000606084860312156104fd57600080fd5b600061050b86828701610495565b935050602061051c868287016104aa565b925050604061052d868287016104aa565b9150509250925092565b61054081610630565b82525050565b600061055360268361061f565b915061055e8261066c565b604082019050919050565b600061057660208361061f565b9150610581826106bb565b602082019050919050565b61059581610662565b82525050565b60006020820190506105b06000830184610537565b92915050565b600060208201905081810360008301526105cf81610546565b9050919050565b600060208201905081810360008301526105ef81610569565b9050919050565b600060408201905061060b600083018561058c565b610618602083018461058c565b9392505050565b600082825260208201905092915050565b600061063b82610642565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6106ed81610630565b81146106f857600080fd5b50565b61070481610662565b811461070f57600080fd5b5056fea2646970667358221220b1b7678249c6033d5b95bbe0e335eece604791776b9f8ad2cb595ed40152de3664736f6c63430008040033";

export class PresaleAllocation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PresaleAllocation> {
    return super.deploy(overrides || {}) as Promise<PresaleAllocation>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PresaleAllocation {
    return super.attach(address) as PresaleAllocation;
  }
  connect(signer: Signer): PresaleAllocation__factory {
    return super.connect(signer) as PresaleAllocation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PresaleAllocationInterface {
    return new utils.Interface(_abi) as PresaleAllocationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PresaleAllocation {
    return new Contract(address, _abi, signerOrProvider) as PresaleAllocation;
  }
}