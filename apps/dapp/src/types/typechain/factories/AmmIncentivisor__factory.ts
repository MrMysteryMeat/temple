/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AmmIncentivisor,
  AmmIncentivisorInterface,
} from "../AmmIncentivisor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stablecToken",
        type: "address",
      },
      {
        internalType: "contract IFaith",
        name: "_faith",
        type: "address",
      },
      {
        internalType: "contract TempleERC20Token",
        name: "_templeToken",
        type: "address",
      },
      {
        internalType: "contract TempleStaking",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "contract ITempleFraxAMMRouter",
        name: "_router",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Pair",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "contract LockedOGTemple",
        name: "_lockedOGTemple",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
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
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boughtTemple",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bonusTemple",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintedOGTemple",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "faithGranted",
        type: "uint256",
      },
    ],
    name: "BuyTheDipComplete",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakeAndLockMultiplier",
        type: "uint256",
      },
    ],
    name: "SetStakeAndLockMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountStablec",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "templeOutMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "buyTheDip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTheDipIsActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTheDipMultiplier",
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
    name: "faith",
    outputs: [
      {
        internalType: "contract IFaith",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockedOGTemple",
    outputs: [
      {
        internalType: "contract LockedOGTemple",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numBlocksForUnlockIncentive",
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
    name: "pair",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract ITempleFraxAMMRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scalingFactor",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_buyTheDipMultiplier",
        type: "uint256",
      },
    ],
    name: "setBuyTheDipMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numBlocksForUnlockIncentive",
        type: "uint256",
      },
    ],
    name: "setNumBlocksForUnlockIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numerator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "setScalingFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockDelaySeconds",
        type: "uint256",
      },
    ],
    name: "setUnlockDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stablecToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeAndLockMultiplier",
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
    name: "staking",
    outputs: [
      {
        internalType: "contract TempleStaking",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "templeToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "treasury",
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
    name: "unlockDelaySeconds",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526200001462015180600762000201565b600d553480156200002457600080fd5b506040516200323f3803806200323f833981016040819052620000479162000141565b6200005233620000f1565b6000805460ff60a01b19169055600180546001600160a01b03199081166001600160a01b039a8b1617909155600280548216988a169890981790975560038054881696891696909617909555600480548716948816949094179093556005805486169287169290921790915560068054851691861691909117905560078054841691851691909117905560088054909216921691909117905562000246565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080600080600080610100898b0312156200015e578384fd5b88516200016b816200022d565b60208a01519098506200017e816200022d565b60408a015190975062000191816200022d565b60608a0151909650620001a4816200022d565b60808a0151909550620001b7816200022d565b60a08a0151909450620001ca816200022d565b60c08a0151909350620001dd816200022d565b60e08a0151909250620001f0816200022d565b809150509295985092959890939650565b60008160001904831182151516156200022857634e487b7160e01b81526011600452602481fd5b500290565b6001600160a01b03811681146200024357600080fd5b50565b612fe980620002566000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80637fb08ebd116100f9578063b2b7a93e11610097578063d6cb5a3011610071578063d6cb5a30146103e5578063ed3437f8146103ee578063f2fde38b1461040e578063f887ea401461042157600080fd5b8063b2b7a93e146103b6578063c354b326146103c9578063d69dc2ed146103dc57600080fd5b80639361de2b116100d35780639361de2b14610365578063a8aa1b311461036e578063af48d52d1461038e578063b1a9069c1461039657600080fd5b80637fb08ebd1461031f5780638456cb591461033f5780638da5cb5b1461034757600080fd5b806345d9a1ce116101665780636115df57116101405780636115df57146102c457806361d027b3146102d75780636e5640c6146102f7578063715018a61461031757600080fd5b806345d9a1ce146102625780634cf088d9146102755780635c975abb1461029557600080fd5b80633141eff8116101975780633141eff81461023457806335df0afb146102475780633f4ba83a1461025a57600080fd5b80630b6d60a6146101be578063140ad597146101d357806326d17b3c1461021d575b600080fd5b6101d16101cc366004612df9565b610441565b005b6001546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610226600d5481565b604051908152602001610214565b6101d1610242366004612d85565b6112d4565b6101d1610255366004612d85565b61135a565b6101d16113e0565b6101d1610270366004612cd6565b61146b565b6004546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b60005474010000000000000000000000000000000000000000900460ff165b6040519015158152602001610214565b6101d16102d2366004612d85565b6114fc565b6008546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b6002546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b6101d1611582565b6007546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b6101d161160d565b60005473ffffffffffffffffffffffffffffffffffffffff166101f3565b610226600c5481565b6006546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b6102b4611696565b6003546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b6101d16103c4366004612db5565b6118f1565b6101d16103d7366004612d85565b6119c6565b610226600a5481565b610226600b5481565b6009546103fb90600f0b81565b604051600f9190910b8152602001610214565b6101d161041c366004612c7e565b611a4c565b6005546101f39073ffffffffffffffffffffffffffffffffffffffff1681565b60005474010000000000000000000000000000000000000000900460ff16156104cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064015b60405180910390fd5b600554604080517fd86aefcc000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163d86aefcc916004808301926020929190829003018186803b15801561053657600080fd5b505afa15801561054a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056e9190612d9d565b9050600080600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156105db57600080fd5b505afa1580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106139190612d37565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ec85f8256040518163ffffffff1660e01b8152600401604080518083038186803b1580156106a257600080fd5b505afa1580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da9190612dd6565b909250905060006106eb8584612ee2565b6106f58584612ee2565b1090506000861180156107055750805b61076b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f414d4d20496e63656e746976697a6f723a204e6f74204163746976650000000060448201526064016104c2565b600c546107788743612f1f565b116107df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f414d4d20496e63656e746976697a6f723a204e6f74204163746976650000000060448201526064016104c2565b6001546108049073ffffffffffffffffffffffffffffffffffffffff1633308c611b7c565b60015460055461082e9173ffffffffffffffffffffffffffffffffffffffff90811691168b611c5e565b6005546040517fbb32e19b000000000000000000000000000000000000000000000000000000008152600481018b9052602481018a90523360448201526064810189905260009173ffffffffffffffffffffffffffffffffffffffff169063bb32e19b90608401602060405180830381600087803b1580156108af57600080fd5b505af11580156108c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e79190612d9d565b905060006103e882600a546108fc9190612ee2565b6109069190612ea9565b6002546040517f9fe5491c0000000000000000000000000000000000000000000000000000000081523360048201526024810183905291925073ffffffffffffffffffffffffffffffffffffffff1690639fe5491c90604401600060405180830381600087803b15801561097957600080fd5b505af115801561098d573d6000803e3d6000fd5b5050600354600554604080517fa8aa1b3100000000000000000000000000000000000000000000000000000000815290516000955073ffffffffffffffffffffffffffffffffffffffff93841694506370a08231939092169163a8aa1b319160048082019260209290919082900301818987803b158015610a0d57600080fd5b505af1158015610a21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a459190612c9a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff909116600482015260240160206040518083038186803b158015610aa957600080fd5b505afa158015610abd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae19190612d9d565b600354600480546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821692810192909252909116906370a082319060240160206040518083038186803b158015610b5257600080fd5b505afa158015610b66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8a9190612d9d565b6003546008546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529116906370a082319060240160206040518083038186803b158015610bf757600080fd5b505afa158015610c0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2f9190612d9d565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c9757600080fd5b505afa158015610cab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccf9190612d9d565b610cd99190612f1f565b610ce39190612f1f565b610ced9190612f1f565b9050600083600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d5a57600080fd5b505afa158015610d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d929190612d9d565b610d9c9190612ee2565b620186a0610daa8486612ee2565b610db49190612ee2565b610dbe9190612ea9565b90506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166359167e486040518163ffffffff1660e01b815260040160206040518083038186803b158015610e2a57600080fd5b505afa158015610e3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e629190612d16565b90506000610ed0610eaf610e9f610e8c610e7b87611d6b565b610e87620186a0611d6b565b611d89565b610e966001611d6b565b600f0b90611e31565b600954600f90810b900b90611e85565b610ec7610ebc6001611d6b565b600f86900b90611edc565b600f0b90611e85565b6007546040517fea3fa31600000000000000000000000000000000000000000000000000000000815233600482015291925060009173ffffffffffffffffffffffffffffffffffffffff9091169063ea3fa31690602401604080518083038186803b158015610f3e57600080fd5b505afa158015610f52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f769190612dd6565b50600480546040517f47bb89f0000000000000000000000000000000000000000000000000000000008152918201839052919250600091611034918a9173ffffffffffffffffffffffffffffffffffffffff16906347bb89f09060240160206040518083038186803b158015610feb57600080fd5b505afa158015610fff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110239190612d9d565b61102d9190612e91565b8585611f30565b90506000611042828a612e91565b60035460045491925061106f9173ffffffffffffffffffffffffffffffffffffffff918216911683611c5e565b600480546040517fa694fc3a00000000000000000000000000000000000000000000000000000000815291820183905260009173ffffffffffffffffffffffffffffffffffffffff9091169063a694fc3a90602401602060405180830381600087803b1580156110de57600080fd5b505af11580156110f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111169190612d9d565b90506111da600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638f1284aa6040518163ffffffff1660e01b815260040160206040518083038186803b15801561118357600080fd5b505afa158015611197573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111bb9190612c9a565b60075473ffffffffffffffffffffffffffffffffffffffff1683611c5e565b600754600d546040517f83e25f8a00000000000000000000000000000000000000000000000000000000815233600482015260248101849052604481019190915273ffffffffffffffffffffffffffffffffffffffff909116906383e25f8a90606401600060405180830381600087803b15801561125757600080fd5b505af115801561126b573d6000803e3d6000fd5b505060408051338152602081018e905290810186905260608101849052608081018c90527f3c59d3043c90c371a32683c68c4f0c9ee9b3684204a80faf97c92682b6f6b219925060a001905060405180910390a150505050505050505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611355576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b600b55565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b600c55565b60005473ffffffffffffffffffffffffffffffffffffffff163314611461576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b611469612043565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b6114f783838361213c565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461157d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b600d55565b60005473ffffffffffffffffffffffffffffffffffffffff163314611603576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b6114696000612192565b60005473ffffffffffffffffffffffffffffffffffffffff16331461168e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b611469612207565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d86aefcc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561170157600080fd5b505afa158015611715573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117399190612d9d565b9050600080600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156117a657600080fd5b505afa1580156117ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117de9190612d37565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ec85f8256040518163ffffffff1660e01b8152600401604080518083038186803b15801561186d57600080fd5b505afa158015611881573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a59190612dd6565b909250905060006118b68584612ee2565b6118c08584612ee2565b1090506000861180156118d05750805b80156118e65750600c546118e48743612f1f565b115b965050505050505090565b60005473ffffffffffffffffffffffffffffffffffffffff163314611972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b61197c82826122f3565b60098054600f9290920b6fffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffff000000000000000000000000000000009092169190911790555050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611a47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b600a55565b60005473ffffffffffffffffffffffffffffffffffffffff163314611acd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c2565b73ffffffffffffffffffffffffffffffffffffffff8116611b70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104c2565b611b7981612192565b50565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611c589085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261233c565b50505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b158015611cd057600080fd5b505afa158015611ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d089190612d9d565b611d129190612e91565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150611c589085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611bd6565b6000677fffffffffffffff821115611d8257600080fd5b5060401b90565b600081600f0b60001415611d9c57600080fd5b600082600f0b604085600f0b901b81611dde577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0590507fffffffffffffffffffffffffffffffff800000000000000000000000000000008112801590611e2157506f7fffffffffffffffffffffffffffffff8113155b611e2a57600080fd5b9392505050565b6000600f83810b9083900b017fffffffffffffffffffffffffffffffff800000000000000000000000000000008112801590611e2157506f7fffffffffffffffffffffffffffffff811315611e2a57600080fd5b6000600f83810b9083900b0260401d7fffffffffffffffffffffffffffffffff800000000000000000000000000000008112801590611e2157506f7fffffffffffffffffffffffffffffff811315611e2a57600080fd5b6000600f82810b9084900b037fffffffffffffffffffffffffffffffff800000000000000000000000000000008112801590611e2157506f7fffffffffffffffffffffffffffffff811315611e2a57600080fd5b60048054604080517f7ca076d70000000000000000000000000000000000000000000000000000000081529051600093849373ffffffffffffffffffffffffffffffffffffffff1692637ca076d79281830192602092829003018186803b158015611f9a57600080fd5b505afa158015611fae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fd29190612d9d565b600d54611fdf9190612ea9565b90506000612019611ff06001611d6b565b61201061200a61200488610e966001611d6b565b89611d89565b85612448565b600f0b90611edc565b905061203961203482610ec789670de0b6b3a76400006122f3565b6127af565b9695505050505050565b60005474010000000000000000000000000000000000000000900460ff166120c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104c2565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526114f79084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611bd6565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005474010000000000000000000000000000000000000000900460ff161561228c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016104c2565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586121123390565b6000816122ff57600080fd5b600061230b8484612833565b90506f7fffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff82161115611e2a57600080fd5b600061239e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612a5d9092919063ffffffff16565b8051909150156114f757808060200190518101906123bc9190612cb6565b6114f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104c2565b600080600084600f0b1280156124615750826001166001145b905060008085600f0b12612475578461247a565b846000035b6fffffffffffffffffffffffffffffffff16905070010000000000000000000000000000000068010000000000000000821161252a57603f82901b91505b84156125225760018516156124cd578102607f1c5b908002607f1c9060028516156124e3578102607f1c5b908002607f1c9060048516156124f9578102607f1c5b908002607f1c90600885161561250f578102607f1c5b60049490941c93908002607f1c906124b8565b60401c612752565b603f6c0100000000000000000000000083101561256b5760209290921b917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015b6e0100000000000000000000000000008310156125ac5760109290921b917ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0015b6f010000000000000000000000000000008310156125ee5760089290921b917ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8015b6f100000000000000000000000000000008310156126305760049290921b917ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc015b6f400000000000000000000000000000008310156126725760029290921b917ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe015b6f800000000000000000000000000000008310156126b45760019290921b917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b60005b861561273b57604082106126ca57600080fd5b60018716156126fd57918302607f1c9181017001000000000000000000000000000000008311156126fd57600192831c92015b928002607f1c9260019190911b90700100000000000000000000000000000000841061272f57600193841c9391909101905b600187901c96506126b7565b6040811061274857600080fd5b6040039190911c90505b60008361275f5781612764565b816000035b90507fffffffffffffffffffffffffffffffff8000000000000000000000000000000081128015906127a657506f7fffffffffffffffffffffffffffffff8113155b61203957600080fd5b6000806127be83600f0b612a6c565b67ffffffffffffffff16905060006128026127fa6127e3670de0b6b3a7640000611d6b565b610ec76127ef86611d6b565b600f89900b90611edc565b600f0b612a6c565b67ffffffffffffffff1690508061282183670de0b6b3a7640000612ee2565b61282b9190612e91565b949350505050565b60008161283f57600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff84116128a25782604085901b8161289a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b049050612a40565b60c084811c64010000000081106128bb576020918201911c5b6201000081106128cd576010918201911c5b61010081106128de576008918201911c5b601081106128ee576004918201911c5b600481106128fe576002918201911c5b6002811061290d576001820191505b60bf820360018603901c6001018260ff0387901b81612955577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506fffffffffffffffffffffffffffffffff83111561297557600080fd5b608085901c83026fffffffffffffffffffffffffffffffff8616840260c088901c604089901b828110156129aa576001820391505b608084901b929003828110156129c1576001820391505b829003608084901c82146129fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b888181612a34577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b04870196505050505050505b6fffffffffffffffffffffffffffffffff811115611e2a57600080fd5b606061282b8484600085612a88565b60008082600f0b1215612a7e57600080fd5b50600f0b60401d90565b606082471015612b1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104c2565b843b612b82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c2565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612bab9190612e24565b60006040518083038185875af1925050503d8060008114612be8576040519150601f19603f3d011682016040523d82523d6000602084013e612bed565b606091505b5091509150612bfd828286612c08565b979650505050505050565b60608315612c17575081611e2a565b825115612c275782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c29190612e40565b80516dffffffffffffffffffffffffffff81168114612c7957600080fd5b919050565b600060208284031215612c8f578081fd5b8135611e2a81612f91565b600060208284031215612cab578081fd5b8151611e2a81612f91565b600060208284031215612cc7578081fd5b81518015158114611e2a578182fd5b600080600060608486031215612cea578182fd5b8335612cf581612f91565b92506020840135612d0581612f91565b929592945050506040919091013590565b600060208284031215612d27578081fd5b815180600f0b8114611e2a578182fd5b600080600060608486031215612d4b578283fd5b612d5484612c5b565b9250612d6260208501612c5b565b9150604084015163ffffffff81168114612d7a578182fd5b809150509250925092565b600060208284031215612d96578081fd5b5035919050565b600060208284031215612dae578081fd5b5051919050565b60008060408385031215612dc7578182fd5b50508035926020909101359150565b60008060408385031215612de8578182fd5b505080516020909101519092909150565b600080600060608486031215612e0d578283fd5b505081359360208301359350604090920135919050565b60008251612e36818460208701612f36565b9190910192915050565b6020815260008251806020840152612e5f816040850160208701612f36565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008219821115612ea457612ea4612f62565b500190565b600082612edd577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612f1a57612f1a612f62565b500290565b600082821015612f3157612f31612f62565b500390565b60005b83811015612f51578181015183820152602001612f39565b83811115611c585750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611b7957600080fdfea264697066735822122039d4fdd5565aaf11b7146924b4ba639114b093329fbcbf4c29a4f63f7e4e42fb64736f6c63430008040033";

export class AmmIncentivisor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _stablecToken: string,
    _faith: string,
    _templeToken: string,
    _staking: string,
    _router: string,
    _pair: string,
    _lockedOGTemple: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AmmIncentivisor> {
    return super.deploy(
      _stablecToken,
      _faith,
      _templeToken,
      _staking,
      _router,
      _pair,
      _lockedOGTemple,
      _treasury,
      overrides || {}
    ) as Promise<AmmIncentivisor>;
  }
  getDeployTransaction(
    _stablecToken: string,
    _faith: string,
    _templeToken: string,
    _staking: string,
    _router: string,
    _pair: string,
    _lockedOGTemple: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _stablecToken,
      _faith,
      _templeToken,
      _staking,
      _router,
      _pair,
      _lockedOGTemple,
      _treasury,
      overrides || {}
    );
  }
  attach(address: string): AmmIncentivisor {
    return super.attach(address) as AmmIncentivisor;
  }
  connect(signer: Signer): AmmIncentivisor__factory {
    return super.connect(signer) as AmmIncentivisor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AmmIncentivisorInterface {
    return new utils.Interface(_abi) as AmmIncentivisorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AmmIncentivisor {
    return new Contract(address, _abi, signerOrProvider) as AmmIncentivisor;
  }
}