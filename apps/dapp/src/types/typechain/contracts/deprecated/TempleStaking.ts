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
} from "../../common";

export interface TempleStakingInterface extends utils.Interface {
  functions: {
    "EXIT_QUEUE()": FunctionFragment;
    "OG_TEMPLE()": FunctionFragment;
    "TEMPLE()": FunctionFragment;
    "accumulationFactor()": FunctionFragment;
    "balance(uint256)": FunctionFragment;
    "currentEpoch()": FunctionFragment;
    "epochSizeSeconds()": FunctionFragment;
    "epy()": FunctionFragment;
    "getAccumulationFactor(uint256)": FunctionFragment;
    "getEpy(uint256)": FunctionFragment;
    "lastUpdatedEpoch()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setEpy(uint256,uint256)": FunctionFragment;
    "setExitQueue(address)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeFor(address,uint256)": FunctionFragment;
    "startTimestamp()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EXIT_QUEUE"
      | "OG_TEMPLE"
      | "TEMPLE"
      | "accumulationFactor"
      | "balance"
      | "currentEpoch"
      | "epochSizeSeconds"
      | "epy"
      | "getAccumulationFactor"
      | "getEpy"
      | "lastUpdatedEpoch"
      | "owner"
      | "renounceOwnership"
      | "setEpy"
      | "setExitQueue"
      | "stake"
      | "stakeFor"
      | "startTimestamp"
      | "transferOwnership"
      | "unstake"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EXIT_QUEUE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OG_TEMPLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "TEMPLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "accumulationFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochSizeSeconds",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "epy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAccumulationFactor",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEpy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEpy",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setExitQueue",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeFor",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "EXIT_QUEUE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OG_TEMPLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TEMPLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "accumulationFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochSizeSeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccumulationFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getEpy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEpy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setExitQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;

  events: {
    "AccumulationFactorUpdated(uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "StakeCompleted(address,uint256,uint256)": EventFragment;
    "UnstakeCompleted(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccumulationFactorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnstakeCompleted"): EventFragment;
}

export interface AccumulationFactorUpdatedEventObject {
  _epochsProcessed: BigNumber;
  _currentEpoch: BigNumber;
  _accumulationFactor: BigNumber;
}
export type AccumulationFactorUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AccumulationFactorUpdatedEventObject
>;

export type AccumulationFactorUpdatedEventFilter =
  TypedEventFilter<AccumulationFactorUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface StakeCompletedEventObject {
  _staker: string;
  _amount: BigNumber;
  _lockedUntil: BigNumber;
}
export type StakeCompletedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  StakeCompletedEventObject
>;

export type StakeCompletedEventFilter = TypedEventFilter<StakeCompletedEvent>;

export interface UnstakeCompletedEventObject {
  _staker: string;
  _amount: BigNumber;
}
export type UnstakeCompletedEvent = TypedEvent<
  [string, BigNumber],
  UnstakeCompletedEventObject
>;

export type UnstakeCompletedEventFilter =
  TypedEventFilter<UnstakeCompletedEvent>;

export interface TempleStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TempleStakingInterface;

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
    EXIT_QUEUE(overrides?: CallOverrides): Promise<[string]>;

    OG_TEMPLE(overrides?: CallOverrides): Promise<[string]>;

    TEMPLE(overrides?: CallOverrides): Promise<[string]>;

    accumulationFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    balance(
      amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    epochSizeSeconds(overrides?: CallOverrides): Promise<[BigNumber]>;

    epy(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAccumulationFactor(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getEpy(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastUpdatedEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEpy(
      _numerator: PromiseOrValue<BigNumberish>,
      _denominator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExitQueue(
      _EXIT_QUEUE: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakeFor(
      _staker: PromiseOrValue<string>,
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  EXIT_QUEUE(overrides?: CallOverrides): Promise<string>;

  OG_TEMPLE(overrides?: CallOverrides): Promise<string>;

  TEMPLE(overrides?: CallOverrides): Promise<string>;

  accumulationFactor(overrides?: CallOverrides): Promise<BigNumber>;

  balance(
    amountOgTemple: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  epochSizeSeconds(overrides?: CallOverrides): Promise<BigNumber>;

  epy(overrides?: CallOverrides): Promise<BigNumber>;

  getAccumulationFactor(
    _scale: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEpy(
    _scale: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastUpdatedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEpy(
    _numerator: PromiseOrValue<BigNumberish>,
    _denominator: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExitQueue(
    _EXIT_QUEUE: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amountTemple: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakeFor(
    _staker: PromiseOrValue<string>,
    _amountTemple: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _amountOgTemple: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    EXIT_QUEUE(overrides?: CallOverrides): Promise<string>;

    OG_TEMPLE(overrides?: CallOverrides): Promise<string>;

    TEMPLE(overrides?: CallOverrides): Promise<string>;

    accumulationFactor(overrides?: CallOverrides): Promise<BigNumber>;

    balance(
      amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    epochSizeSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    epy(overrides?: CallOverrides): Promise<BigNumber>;

    getAccumulationFactor(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEpy(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdatedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setEpy(
      _numerator: PromiseOrValue<BigNumberish>,
      _denominator: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExitQueue(
      _EXIT_QUEUE: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakeFor(
      _staker: PromiseOrValue<string>,
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(
      _amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccumulationFactorUpdated(uint256,uint256,uint256)"(
      _epochsProcessed?: null,
      _currentEpoch?: null,
      _accumulationFactor?: null
    ): AccumulationFactorUpdatedEventFilter;
    AccumulationFactorUpdated(
      _epochsProcessed?: null,
      _currentEpoch?: null,
      _accumulationFactor?: null
    ): AccumulationFactorUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "StakeCompleted(address,uint256,uint256)"(
      _staker?: null,
      _amount?: null,
      _lockedUntil?: null
    ): StakeCompletedEventFilter;
    StakeCompleted(
      _staker?: null,
      _amount?: null,
      _lockedUntil?: null
    ): StakeCompletedEventFilter;

    "UnstakeCompleted(address,uint256)"(
      _staker?: null,
      _amount?: null
    ): UnstakeCompletedEventFilter;
    UnstakeCompleted(
      _staker?: null,
      _amount?: null
    ): UnstakeCompletedEventFilter;
  };

  estimateGas: {
    EXIT_QUEUE(overrides?: CallOverrides): Promise<BigNumber>;

    OG_TEMPLE(overrides?: CallOverrides): Promise<BigNumber>;

    TEMPLE(overrides?: CallOverrides): Promise<BigNumber>;

    accumulationFactor(overrides?: CallOverrides): Promise<BigNumber>;

    balance(
      amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    epochSizeSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    epy(overrides?: CallOverrides): Promise<BigNumber>;

    getAccumulationFactor(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEpy(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdatedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEpy(
      _numerator: PromiseOrValue<BigNumberish>,
      _denominator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExitQueue(
      _EXIT_QUEUE: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stake(
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakeFor(
      _staker: PromiseOrValue<string>,
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unstake(
      _amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EXIT_QUEUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OG_TEMPLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TEMPLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accumulationFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balance(
      amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochSizeSeconds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccumulationFactor(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEpy(
      _scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdatedEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEpy(
      _numerator: PromiseOrValue<BigNumberish>,
      _denominator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExitQueue(
      _EXIT_QUEUE: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakeFor(
      _staker: PromiseOrValue<string>,
      _amountTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _amountOgTemple: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}