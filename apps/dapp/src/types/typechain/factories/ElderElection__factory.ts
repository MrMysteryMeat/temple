/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ElderElection, ElderElectionInterface } from "../ElderElection";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Templar",
        name: "_templars",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "DeadlineExpired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "discordId",
        type: "uint256",
      },
    ],
    name: "NotCandidate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "discordId",
        type: "uint256",
      },
    ],
    name: "NotFromTemplar",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyEndorsements",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "discordIds",
        type: "uint256[]",
      },
    ],
    name: "UpdateEndorsements",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "discordId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isNominated",
        type: "bool",
      },
    ],
    name: "UpdateNomination",
    type: "event",
  },
  {
    inputs: [],
    name: "CAN_NOMINATE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SET_ENDORSEMENTS_FOR_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "candidates",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "endorsementsBy",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "uint256",
        name: "discordId",
        type: "uint256",
      },
    ],
    name: "nominate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numCandidates",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "discordIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "relayedSetEndorsementsFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "discordId",
        type: "uint256",
      },
    ],
    name: "resign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "discordIds",
        type: "uint256[]",
      },
    ],
    name: "setEndorsements",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "templars",
    outputs: [
      {
        internalType: "contract Templar",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040527fe697daf2133098e53826ae12ef11e7d2decb5b947fc1a4764c158e64842e7052610140523480156200003757600080fd5b5060405162001b6c38038062001b6c8339810160408190526200005a9162000220565b604080518082018252600d81526c22b63232b922b632b1ba34b7b760991b6020808301918252835180850190945260018452603160f81b908401528151902060e08190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66101008190524660a0529192917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200013d8184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6080523060601b60c052610120525050600480546001600160a01b0319166001600160a01b038516179055506200017890506000336200017f565b5062000250565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200021c576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001db3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006020828403121562000232578081fd5b81516001600160a01b038116811462000249578182fd5b9392505050565b60805160a05160c05160601c60e0516101005161012051610140516118b7620002b560003960008181610268015261069a01526000610bbf01526000610c0e01526000610be901526000610b4201526000610b6c01526000610b9601526118b76000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80636e39a4da116100cd578063a217fddf11610081578063c5f28e4911610066578063c5f28e4914610343578063d547741f14610356578063ff58984f1461036957600080fd5b8063a217fddf14610314578063b03d48ca1461031c57600080fd5b80637ecebe00116100b25780637ecebe001461029d5780637fda4b2b146102bd57806391d14854146102d057600080fd5b80636e39a4da1461026357806374446bc91461028a57600080fd5b80633477ee2e1161012457806336568abe1161010957806336568abe146102025780635216509a1461021557806362475fe41461021e57600080fd5b80633477ee2e146101d75780633644e515146101fa57600080fd5b806301ffc9a71461015657806308d9801c1461017e578063248a9ca3146101935780632f2ff15d146101c4575b600080fd5b6101696101643660046115bb565b61037c565b60405190151581526020015b60405180910390f35b61019161018c366004611578565b610415565b005b6101b66101a1366004611578565b60009081526020819052604090206001015490565b604051908152602001610175565b6101916101d2366004611590565b610561565b6101696101e5366004611578565b60016020526000908152604090205460ff1681565b6101b661058b565b610191610210366004611590565b61059a565b6101b660025481565b60045461023e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610175565b6101b67f000000000000000000000000000000000000000000000000000000000000000081565b610191610298366004611538565b61064e565b6101b66102ab366004611445565b60056020526000908152604090205481565b6101916102cb36600461145f565b610659565b6101696102de366004611590565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101b6600081565b6101b67ff30641a45a85a618e8a3f2baf155ecb1f3eca7bbc05f237c578245d02c78e0c981565b610191610351366004611578565b610891565b610191610364366004611590565b6109d5565b6101b661037736600461150f565b6109fa565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061040f57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7ff30641a45a85a618e8a3f2baf155ecb1f3eca7bbc05f237c578245d02c78e0c961043f81610a2b565b600480546040517f0e2e44e800000000000000000000000000000000000000000000000000000000815291820184905273ffffffffffffffffffffffffffffffffffffffff1690630e2e44e89060240160006040518083038186803b1580156104a757600080fd5b505afa1580156104bb573d6000803e3d6000fd5b50505060008381526001602052604090205460ff1615905061055d576000828152600160208190526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905560028054919290916105209084906117d6565b90915550506040516000815282907f2a11c0b7ccdfbb01ac9ecc8ebe438d26f017e861fcca878abc936f48fec18f52906020015b60405180910390a25b5050565b60008281526020819052604090206001015461057c81610a2b565b6105868383610a38565b505050565b6000610595610b28565b905090565b73ffffffffffffffffffffffffffffffffffffffff81163314610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61055d8282610c5c565b61055d338383610d13565b82421115610696576040517fbc3088ef0000000000000000000000000000000000000000000000000000000081526004810184905260240161063b565b60007f0000000000000000000000000000000000000000000000000000000000000000878787876106f18c73ffffffffffffffffffffffffffffffffffffffff16600090815260056020526040902080546001810190915590565b604051602001610706969594939291906116e5565b604051602081830303815290604052805190602001209050600061072982610dd5565b905060008061076e8387878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e3e92505050565b909250905060008160048111156107ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146107fd576040517fd855c4f400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b16600482015260240161063b565b8973ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461087a576040517fd855c4f400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b16600482015260240161063b565b6108858a8a8a610d13565b50505050505050505050565b7ff30641a45a85a618e8a3f2baf155ecb1f3eca7bbc05f237c578245d02c78e0c96108bb81610a2b565b600480546040517f0e2e44e800000000000000000000000000000000000000000000000000000000815291820184905273ffffffffffffffffffffffffffffffffffffffff1690630e2e44e89060240160006040518083038186803b15801561092357600080fd5b505afa158015610937573d6000803e3d6000fd5b50505060008381526001602052604090205460ff16905061055d576000828152600160208190526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682179055600280549192909161099d908490611781565b90915550506040516001815282907f2a11c0b7ccdfbb01ac9ecc8ebe438d26f017e861fcca878abc936f48fec18f5290602001610554565b6000828152602081905260409020600101546109f081610a2b565b6105868383610c5c565b60036020528160005260406000208181548110610a1657600080fd5b90600052602060002001600091509150505481565b610a358133610e84565b50565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661055d5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610aca3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60003073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015610b8e57507f000000000000000000000000000000000000000000000000000000000000000046145b15610bb857507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff161561055d5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600254811115610d4f576040517fa300300000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260409020610d7f908383611379565b508273ffffffffffffffffffffffffffffffffffffffff167fe1e033370be28bdd2a7b73796f5a1b4f4e7c27ca8b94d610c1f0387ef5a6d7898383604051610dc89291906116c9565b60405180910390a2505050565b600061040f610de2610b28565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080825160411415610e755760208301516040840151606085015160001a610e6987828585610f54565b94509450505050610e7d565b506000905060025b9250929050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661055d57610eda8173ffffffffffffffffffffffffffffffffffffffff16601461106c565b610ee583602061106c565b604051602001610ef6929190611648565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261063b91600401611730565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610f8b5750600090506003611063565b8460ff16601b14158015610fa357508460ff16601c14155b15610fb45750600090506004611063565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611008573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661105c57600060019250925050611063565b9150600090505b94509492505050565b6060600061107b836002611799565b611086906002611781565b67ffffffffffffffff8111156110c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156110ef576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061114d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106111d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611213846002611799565b61121e906001611781565b90505b6001811115611309577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611286577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b8282815181106112c3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936113028161181d565b9050611221565b508315611372576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161063b565b9392505050565b8280548282559060005260206000209081019282156113b4579160200282015b828111156113b4578235825591602001919060010190611399565b506113c09291506113c4565b5090565b5b808211156113c057600081556001016113c5565b803573ffffffffffffffffffffffffffffffffffffffff811681146113fd57600080fd5b919050565b60008083601f840112611413578182fd5b50813567ffffffffffffffff81111561142a578182fd5b6020830191508360208260051b8501011115610e7d57600080fd5b600060208284031215611456578081fd5b611372826113d9565b60008060008060008060808789031215611477578182fd5b611480876113d9565b9550602087013567ffffffffffffffff8082111561149c578384fd5b6114a88a838b01611402565b90975095506040890135945060608901359150808211156114c7578384fd5b818901915089601f8301126114da578384fd5b8135818111156114e8578485fd5b8a60208285010111156114f9578485fd5b6020830194508093505050509295509295509295565b60008060408385031215611521578182fd5b61152a836113d9565b946020939093013593505050565b6000806020838503121561154a578182fd5b823567ffffffffffffffff811115611560578283fd5b61156c85828601611402565b90969095509350505050565b600060208284031215611589578081fd5b5035919050565b600080604083850312156115a2578182fd5b823591506115b2602084016113d9565b90509250929050565b6000602082840312156115cc578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611372578182fd5b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561162c578081fd5b8260051b80836020870137939093016020019283525090919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516116808160178501602088016117ed565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516116bd8160288401602088016117ed565b01602801949350505050565b6020815260006116dd6020830184866115fb565b949350505050565b86815273ffffffffffffffffffffffffffffffffffffffff8616602082015260a06040820152600061171b60a0830186886115fb565b60608301949094525060800152949350505050565b602081526000825180602084015261174f8160408501602087016117ed565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000821982111561179457611794611852565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156117d1576117d1611852565b500290565b6000828210156117e8576117e8611852565b500390565b60005b838110156118085781810151838201526020016117f0565b83811115611817576000848401525b50505050565b60008161182c5761182c611852565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220247461b4bbfb58726a7fa1285debc62cac1e620bc3ca7e4e7f38462d2d0597ed64736f6c63430008040033";

type ElderElectionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ElderElectionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ElderElection__factory extends ContractFactory {
  constructor(...args: ElderElectionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ElderElection";
  }

  deploy(
    _templars: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ElderElection> {
    return super.deploy(_templars, overrides || {}) as Promise<ElderElection>;
  }
  getDeployTransaction(
    _templars: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_templars, overrides || {});
  }
  attach(address: string): ElderElection {
    return super.attach(address) as ElderElection;
  }
  connect(signer: Signer): ElderElection__factory {
    return super.connect(signer) as ElderElection__factory;
  }
  static readonly contractName: "ElderElection";
  public readonly contractName: "ElderElection";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElderElectionInterface {
    return new utils.Interface(_abi) as ElderElectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ElderElection {
    return new Contract(address, _abi, signerOrProvider) as ElderElection;
  }
}