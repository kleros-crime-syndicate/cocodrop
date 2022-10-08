/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface CocodropInterface extends utils.Interface {
  functions: {
    "airdrops(uint256)": FunctionFragment;
    "createAirdrop(bytes32,address,uint256,string)": FunctionFragment;
    "redeem(uint256,uint256,bytes32[])": FunctionFragment;
    "redeemed(uint256,address)": FunctionFragment;
    "stopAirdrop(uint256)": FunctionFragment;
    "verifyClaim(uint256,uint256,bytes32[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "airdrops"
      | "createAirdrop"
      | "redeem"
      | "redeemed"
      | "stopAirdrop"
      | "verifyClaim"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "airdrops",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAirdrop",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemed",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stopAirdrop",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyClaim",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "airdrops", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stopAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyClaim",
    data: BytesLike
  ): Result;

  events: {
    "NewAirdrop(uint256,bytes32,address,uint256,string)": EventFragment;
    "Redemption(uint256,uint256)": EventFragment;
    "StoppedAirdrop(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewAirdrop"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redemption"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StoppedAirdrop"): EventFragment;
}

export interface NewAirdropEventObject {
  airdropId: BigNumber;
  merkleRoot: string;
  token: string;
  amount: BigNumber;
  ipfs: string;
}
export type NewAirdropEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, string],
  NewAirdropEventObject
>;

export type NewAirdropEventFilter = TypedEventFilter<NewAirdropEvent>;

export interface RedemptionEventObject {
  airdropId: BigNumber;
  amount: BigNumber;
}
export type RedemptionEvent = TypedEvent<
  [BigNumber, BigNumber],
  RedemptionEventObject
>;

export type RedemptionEventFilter = TypedEventFilter<RedemptionEvent>;

export interface StoppedAirdropEventObject {
  airdropId: BigNumber;
}
export type StoppedAirdropEvent = TypedEvent<
  [BigNumber],
  StoppedAirdropEventObject
>;

export type StoppedAirdropEventFilter = TypedEventFilter<StoppedAirdropEvent>;

export interface Cocodrop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CocodropInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    airdrops(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        owner: string;
        merkleRoot: string;
        token: string;
        amount: BigNumber;
      }
    >;

    createAirdrop(
      _merkleRoot: PromiseOrValue<BytesLike>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _ipfs: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeem(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    stopAirdrop(
      _airdropId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyClaim(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[boolean] & { valid: boolean }>;
  };

  airdrops(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber] & {
      owner: string;
      merkleRoot: string;
      token: string;
      amount: BigNumber;
    }
  >;

  createAirdrop(
    _merkleRoot: PromiseOrValue<BytesLike>,
    _token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _ipfs: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeem(
    _airdropId: PromiseOrValue<BigNumberish>,
    _claimedAmount: PromiseOrValue<BigNumberish>,
    _merkleProof: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemed(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  stopAirdrop(
    _airdropId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyClaim(
    _airdropId: PromiseOrValue<BigNumberish>,
    _claimedAmount: PromiseOrValue<BigNumberish>,
    _merkleProof: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    airdrops(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        owner: string;
        merkleRoot: string;
        token: string;
        amount: BigNumber;
      }
    >;

    createAirdrop(
      _merkleRoot: PromiseOrValue<BytesLike>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _ipfs: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    redeemed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stopAirdrop(
      _airdropId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyClaim(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "NewAirdrop(uint256,bytes32,address,uint256,string)"(
      airdropId?: PromiseOrValue<BigNumberish> | null,
      merkleRoot?: null,
      token?: null,
      amount?: null,
      ipfs?: null
    ): NewAirdropEventFilter;
    NewAirdrop(
      airdropId?: PromiseOrValue<BigNumberish> | null,
      merkleRoot?: null,
      token?: null,
      amount?: null,
      ipfs?: null
    ): NewAirdropEventFilter;

    "Redemption(uint256,uint256)"(
      airdropId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): RedemptionEventFilter;
    Redemption(
      airdropId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): RedemptionEventFilter;

    "StoppedAirdrop(uint256)"(
      airdropId?: PromiseOrValue<BigNumberish> | null
    ): StoppedAirdropEventFilter;
    StoppedAirdrop(
      airdropId?: PromiseOrValue<BigNumberish> | null
    ): StoppedAirdropEventFilter;
  };

  estimateGas: {
    airdrops(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAirdrop(
      _merkleRoot: PromiseOrValue<BytesLike>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _ipfs: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeem(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stopAirdrop(
      _airdropId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyClaim(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    airdrops(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAirdrop(
      _merkleRoot: PromiseOrValue<BytesLike>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _ipfs: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stopAirdrop(
      _airdropId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyClaim(
      _airdropId: PromiseOrValue<BigNumberish>,
      _claimedAmount: PromiseOrValue<BigNumberish>,
      _merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
