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

export interface LockedOGTempleInterface extends utils.Interface {
  functions: {
    "OG_TEMPLE()": FunctionFragment;
    "lock(uint256,uint256)": FunctionFragment;
    "lockFor(address,uint256,uint256)": FunctionFragment;
    "locked(address,uint256)": FunctionFragment;
    "numLocks(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawFor(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "OG_TEMPLE"
      | "lock"
      | "lockFor"
      | "locked"
      | "numLocks"
      | "withdraw"
      | "withdrawFor"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "OG_TEMPLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockFor",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "locked",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "numLocks",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFor",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "OG_TEMPLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numLocks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFor",
    data: BytesLike
  ): Result;

  events: {
    "OGTempleLocked(address,uint256,uint256)": EventFragment;
    "OGTempleWithdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OGTempleLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OGTempleWithdraw"): EventFragment;
}

export interface OGTempleLockedEventObject {
  _staker: string;
  _amount: BigNumber;
  _lockedUntil: BigNumber;
}
export type OGTempleLockedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  OGTempleLockedEventObject
>;

export type OGTempleLockedEventFilter = TypedEventFilter<OGTempleLockedEvent>;

export interface OGTempleWithdrawEventObject {
  _staker: string;
  _amount: BigNumber;
}
export type OGTempleWithdrawEvent = TypedEvent<
  [string, BigNumber],
  OGTempleWithdrawEventObject
>;

export type OGTempleWithdrawEventFilter =
  TypedEventFilter<OGTempleWithdrawEvent>;

export interface LockedOGTemple extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LockedOGTempleInterface;

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
    OG_TEMPLE(overrides?: CallOverrides): Promise<[string]>;

    lock(
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockFor(
      _staker: PromiseOrValue<string>,
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    locked(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        BalanceOGTemple: BigNumber;
        LockedUntilTimestamp: BigNumber;
      }
    >;

    numLocks(
      _staker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFor(
      _staker: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  OG_TEMPLE(overrides?: CallOverrides): Promise<string>;

  lock(
    _amountOGTemple: PromiseOrValue<BigNumberish>,
    _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockFor(
    _staker: PromiseOrValue<string>,
    _amountOGTemple: PromiseOrValue<BigNumberish>,
    _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  locked(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      BalanceOGTemple: BigNumber;
      LockedUntilTimestamp: BigNumber;
    }
  >;

  numLocks(
    _staker: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    _idx: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFor(
    _staker: PromiseOrValue<string>,
    _idx: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    OG_TEMPLE(overrides?: CallOverrides): Promise<string>;

    lock(
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockFor(
      _staker: PromiseOrValue<string>,
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    locked(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        BalanceOGTemple: BigNumber;
        LockedUntilTimestamp: BigNumber;
      }
    >;

    numLocks(
      _staker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFor(
      _staker: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OGTempleLocked(address,uint256,uint256)"(
      _staker?: null,
      _amount?: null,
      _lockedUntil?: null
    ): OGTempleLockedEventFilter;
    OGTempleLocked(
      _staker?: null,
      _amount?: null,
      _lockedUntil?: null
    ): OGTempleLockedEventFilter;

    "OGTempleWithdraw(address,uint256)"(
      _staker?: null,
      _amount?: null
    ): OGTempleWithdrawEventFilter;
    OGTempleWithdraw(
      _staker?: null,
      _amount?: null
    ): OGTempleWithdrawEventFilter;
  };

  estimateGas: {
    OG_TEMPLE(overrides?: CallOverrides): Promise<BigNumber>;

    lock(
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockFor(
      _staker: PromiseOrValue<string>,
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    locked(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numLocks(
      _staker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFor(
      _staker: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    OG_TEMPLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lock(
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockFor(
      _staker: PromiseOrValue<string>,
      _amountOGTemple: PromiseOrValue<BigNumberish>,
      _lockedUntilTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    locked(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numLocks(
      _staker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFor(
      _staker: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}