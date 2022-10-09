/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Cocodrop, CocodropInterface } from "../../src/Cocodrop";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "airdropId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfs",
        type: "string",
      },
    ],
    name: "NewAirdrop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "airdropId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Redemption",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "airdropId",
        type: "uint256",
      },
    ],
    name: "StoppedAirdrop",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "airdrops",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_ipfs",
        type: "string",
      },
    ],
    name: "createAirdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_airdropId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_claimedAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "redeemed",
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
        name: "_airdropId",
        type: "uint256",
      },
    ],
    name: "stopAirdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_airdropId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_claimedAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "verifyClaim",
    outputs: [
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b2a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635ddb08451461006757806360db5082146100aa5780637306239f146100f25780637efcf12814610107578063839044851461011a578063b97bff1a1461012d575b600080fd5b610095610075366004610863565b600160209081526000928352604080842090915290825290205460ff1681565b60405190151581526020015b60405180910390f35b6100bd6100b8366004610893565b610140565b6040516100a194939291906001600160a01b039485168152602081019390935292166040820152606081019190915260800190565b6101056101003660046108ac565b610188565b005b610105610115366004610893565b61038c565b610095610128366004610958565b61050a565b61010561013b366004610958565b61055a565b6000818154811061015057600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b03928316945090929091169084565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038516906323b872dd906064016020604051808303816000875af11580156101db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ff9190610a2b565b6102425760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b60448201526064015b60405180910390fd5b60408051608081018252338152602081018781526001600160a01b03878116938301938452606083018781526000805460018181018355828052955160049091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563810180549286166001600160a01b031993841617905594517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56486015595517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5658501805491909416961695909517909155517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5669091015590546103469190610a63565b7fa07dc081e463c1b1f74a9fbaeb0d45590e0121e6dd8a976da3765021ba40c797868686868660405161037d959493929190610a76565b60405180910390a25050505050565b60008082815481106103a0576103a0610ac5565b6000918252602090912060049091020180549091506001600160a01b031633146103f95760405162461bcd60e51b815260206004820152600a6024820152694f776e6572206f6e6c7960b01b6044820152606401610239565b600081600301541161043f5760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e481cdd1bdc1c1959608a1b6044820152606401610239565b600381018054600090915560028201546040516323b872dd60e01b8152306004820152336024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156104a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c79190610a2b565b6105055760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606401610239565b505050565b6000806000339050806000528460205260406000209150610550846000888154811061053857610538610ac5565b906000526020600020906004020160010154846107b4565b9695505050505050565b600080848154811061056e5761056e610ac5565b9060005260206000209060040201600301549050808311156105d25760405162461bcd60e51b815260206004820152601c60248201527f496e73756666696369656e742061697264726f702062616c616e6365000000006044820152606401610239565b600084815260016020908152604080832033845290915290205460ff161561062f5760405162461bcd60e51b815260206004820152601060248201526f105b1c9958591e481c995919595b595960821b6044820152606401610239565b61063a84848461050a565b61067b5760405162461bcd60e51b815260206004820152601260248201527124b73b30b634b2103932b232b6b83a34b7b760711b6044820152606401610239565b60008481526001602081815260408084203385529091528220805460ff191690911790558054849190869081106106b4576106b4610ac5565b906000526020600020906004020160030160008282546106d49190610a63565b909155505060008054859081106106ed576106ed610ac5565b600091825260209091206004918202016002015460405163a9059cbb60e01b81523392810192909252602482018590526001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561074f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107739190610a2b565b50837fba7975764e321f07896c9c9852213d675ea0ab36b67e22a7e6d762b0fddd30d9846040516107a691815260200190565b60405180910390a250505050565b6000826107c185846107ca565b14949350505050565b600081815b845181101561080f576107fb828683815181106107ee576107ee610ac5565b6020026020010151610819565b91508061080781610adb565b9150506107cf565b5090505b92915050565b6000818310610835576000828152602084905260409020610844565b60008381526020839052604090205b9392505050565b6001600160a01b038116811461086057600080fd5b50565b6000806040838503121561087657600080fd5b8235915060208301356108888161084b565b809150509250929050565b6000602082840312156108a557600080fd5b5035919050565b6000806000806000608086880312156108c457600080fd5b8535945060208601356108d68161084b565b935060408601359250606086013567ffffffffffffffff808211156108fa57600080fd5b818801915088601f83011261090e57600080fd5b81358181111561091d57600080fd5b89602082850101111561092f57600080fd5b9699959850939650602001949392505050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561096d57600080fd5b833592506020808501359250604085013567ffffffffffffffff8082111561099457600080fd5b818701915087601f8301126109a857600080fd5b8135818111156109ba576109ba610942565b8060051b604051601f19603f830116810181811085821117156109df576109df610942565b60405291825284820192508381018501918a8311156109fd57600080fd5b938501935b82851015610a1b57843584529385019392850192610a02565b8096505050505050509250925092565b600060208284031215610a3d57600080fd5b8151801515811461084457600080fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561081357610813610a4d565b8581526001600160a01b0385166020820152604081018490526080606082018190528101829052818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b634e487b7160e01b600052603260045260246000fd5b600060018201610aed57610aed610a4d565b506001019056fea2646970667358221220366fea3ed32b1b38da974a22cdfb58f5e9deab563675150f25a4392aea8bb91364736f6c63430008110033";

type CocodropConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CocodropConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cocodrop__factory extends ContractFactory {
  constructor(...args: CocodropConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Cocodrop> {
    return super.deploy(overrides || {}) as Promise<Cocodrop>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Cocodrop {
    return super.attach(address) as Cocodrop;
  }
  override connect(signer: Signer): Cocodrop__factory {
    return super.connect(signer) as Cocodrop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CocodropInterface {
    return new utils.Interface(_abi) as CocodropInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Cocodrop {
    return new Contract(address, _abi, signerOrProvider) as Cocodrop;
  }
}
