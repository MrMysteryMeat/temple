/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace TempleZaps {
  export type TempleLiquidityParamsStruct = {
    amountAMin: BigNumberish;
    amountBMin: BigNumberish;
    lpSwapMinAmountOut: BigNumberish;
    stableToken: string;
    transferResidual: boolean;
  };

  export type TempleLiquidityParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    boolean
  ] & {
    amountAMin: BigNumber;
    amountBMin: BigNumber;
    lpSwapMinAmountOut: BigNumber;
    stableToken: string;
    transferResidual: boolean;
  };
}

export interface TempleZapsInterface extends utils.Interface {
  contractName: "TempleZaps";
  functions: {
    "approvedTargets(address,address)": FunctionFragment;
    "getAmountToSwap(address,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "recoverToken(address,address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovedTargets(address[],address[],bool[])": FunctionFragment;
    "setSupportedStables(address[],bool[])": FunctionFragment;
    "setTempleRouter(address)": FunctionFragment;
    "setZaps(address)": FunctionFragment;
    "supportedStables(address)": FunctionFragment;
    "temple()": FunctionFragment;
    "templeRouter()": FunctionFragment;
    "toggleContractActive()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "zapInTemple(address,uint256,uint256,address,uint256,address,bytes)": FunctionFragment;
    "zapInTempleFor(address,uint256,uint256,address,uint256,address,address,bytes)": FunctionFragment;
    "zapInTempleLP(address,uint256,uint256,address,(uint256,uint256,uint256,address,bool),bytes)": FunctionFragment;
    "zapInTempleLPFor(address,uint256,uint256,address,address,(uint256,uint256,uint256,address,bool),bytes)": FunctionFragment;
    "zapInVault(address,uint256,uint256,address,uint256,address,address,bytes)": FunctionFragment;
    "zapInVaultFor(address,uint256,uint256,address,uint256,address,address,address,bytes)": FunctionFragment;
    "zaps()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approvedTargets",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountToSwap",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedTargets",
    values: [string[], string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setSupportedStables",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTempleRouter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setZaps", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportedStables",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "temple", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "templeRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleContractActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInTemple",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInTempleFor",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInTempleLP",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      TempleZaps.TempleLiquidityParamsStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInTempleLPFor",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      TempleZaps.TempleLiquidityParamsStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInVault",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInVaultFor",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "zaps", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "approvedTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountToSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSupportedStables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTempleRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setZaps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedStables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "temple", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "templeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleContractActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapInTemple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapInTempleFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapInTempleLP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zapInTempleLPFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zapInVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zapInVaultFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zaps", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SetContractState(bool)": EventFragment;
    "SetTempleRouter(address)": EventFragment;
    "SetZaps(address)": EventFragment;
    "TokenRecovered(address,address,uint256)": EventFragment;
    "ZappedInTempleLP(address,address,uint256,uint256,uint256)": EventFragment;
    "ZappedTempleInVault(address,address,uint256,uint256)": EventFragment;
    "ZappedTemplePlusFaithInVault(address,address,uint256,uint112,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetContractState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTempleRouter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetZaps"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ZappedInTempleLP"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ZappedTempleInVault"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ZappedTemplePlusFaithInVault"
  ): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type SetContractStateEvent = TypedEvent<[boolean], { paused: boolean }>;

export type SetContractStateEventFilter =
  TypedEventFilter<SetContractStateEvent>;

export type SetTempleRouterEvent = TypedEvent<[string], { router: string }>;

export type SetTempleRouterEventFilter = TypedEventFilter<SetTempleRouterEvent>;

export type SetZapsEvent = TypedEvent<[string], { zaps: string }>;

export type SetZapsEventFilter = TypedEventFilter<SetZapsEvent>;

export type TokenRecoveredEvent = TypedEvent<
  [string, string, BigNumber],
  { token: string; to: string; amount: BigNumber }
>;

export type TokenRecoveredEventFilter = TypedEventFilter<TokenRecoveredEvent>;

export type ZappedInTempleLPEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  {
    recipient: string;
    fromAddress: string;
    fromAmount: BigNumber;
    amountA: BigNumber;
    amountB: BigNumber;
  }
>;

export type ZappedInTempleLPEventFilter =
  TypedEventFilter<ZappedInTempleLPEvent>;

export type ZappedTempleInVaultEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    sender: string;
    fromToken: string;
    fromAmount: BigNumber;
    templeAmount: BigNumber;
  }
>;

export type ZappedTempleInVaultEventFilter =
  TypedEventFilter<ZappedTempleInVaultEvent>;

export type ZappedTemplePlusFaithInVaultEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  {
    sender: string;
    fromToken: string;
    fromAmount: BigNumber;
    faithAmount: BigNumber;
    boostedAmount: BigNumber;
  }
>;

export type ZappedTemplePlusFaithInVaultEventFilter =
  TypedEventFilter<ZappedTemplePlusFaithInVaultEvent>;

export interface TempleZaps extends BaseContract {
  contractName: "TempleZaps";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TempleZapsInterface;

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
    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSupportedStables(
      _stables: string[],
      _supported: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTempleRouter(
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setZaps(
      _zaps: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportedStables(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    temple(overrides?: CallOverrides): Promise<[string]>;

    templeRouter(overrides?: CallOverrides): Promise<[string]>;

    toggleContractActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInTemple(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInTempleFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInTempleLP(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInTempleLPFor(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _for: string,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInVault(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInVaultFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zaps(overrides?: CallOverrides): Promise<[string]>;
  };

  approvedTargets(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getAmountToSwap(
    _token: string,
    _pair: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  recoverToken(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedTargets(
    _tokens: string[],
    _targets: string[],
    _isApproved: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSupportedStables(
    _stables: string[],
    _supported: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTempleRouter(
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setZaps(
    _zaps: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportedStables(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  temple(overrides?: CallOverrides): Promise<string>;

  templeRouter(overrides?: CallOverrides): Promise<string>;

  toggleContractActive(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInTemple(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _minTempleReceived: BigNumberish,
    _stableToken: string,
    _minStableReceived: BigNumberish,
    _swapTarget: string,
    _swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInTempleFor(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _minTempleReceived: BigNumberish,
    _stableToken: string,
    _minStableReceived: BigNumberish,
    _recipient: string,
    _swapTarget: string,
    _swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInTempleLP(
    _fromAddress: string,
    _fromAmount: BigNumberish,
    _minAmountOut: BigNumberish,
    _swapTarget: string,
    _params: TempleZaps.TempleLiquidityParamsStruct,
    _swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInTempleLPFor(
    _fromAddress: string,
    _fromAmount: BigNumberish,
    _minAmountOut: BigNumberish,
    _for: string,
    _swapTarget: string,
    _params: TempleZaps.TempleLiquidityParamsStruct,
    _swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInVault(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _minTempleReceived: BigNumberish,
    _stableToken: string,
    _minStableReceived: BigNumberish,
    _vault: string,
    _swapTarget: string,
    _swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInVaultFor(
    _fromToken: string,
    _fromAmount: BigNumberish,
    _minTempleReceived: BigNumberish,
    _stableToken: string,
    _minStableReceived: BigNumberish,
    _vault: string,
    _for: string,
    _swapTarget: string,
    _swapData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zaps(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setSupportedStables(
      _stables: string[],
      _supported: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setTempleRouter(_router: string, overrides?: CallOverrides): Promise<void>;

    setZaps(_zaps: string, overrides?: CallOverrides): Promise<void>;

    supportedStables(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    temple(overrides?: CallOverrides): Promise<string>;

    templeRouter(overrides?: CallOverrides): Promise<string>;

    toggleContractActive(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInTemple(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInTempleFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInTempleLP(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInTempleLPFor(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _for: string,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInVault(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInVaultFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    zaps(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SetContractState(bool)"(paused?: null): SetContractStateEventFilter;
    SetContractState(paused?: null): SetContractStateEventFilter;

    "SetTempleRouter(address)"(router?: null): SetTempleRouterEventFilter;
    SetTempleRouter(router?: null): SetTempleRouterEventFilter;

    "SetZaps(address)"(zaps?: null): SetZapsEventFilter;
    SetZaps(zaps?: null): SetZapsEventFilter;

    "TokenRecovered(address,address,uint256)"(
      token?: null,
      to?: null,
      amount?: null
    ): TokenRecoveredEventFilter;
    TokenRecovered(
      token?: null,
      to?: null,
      amount?: null
    ): TokenRecoveredEventFilter;

    "ZappedInTempleLP(address,address,uint256,uint256,uint256)"(
      recipient?: string | null,
      fromAddress?: null,
      fromAmount?: null,
      amountA?: null,
      amountB?: null
    ): ZappedInTempleLPEventFilter;
    ZappedInTempleLP(
      recipient?: string | null,
      fromAddress?: null,
      fromAmount?: null,
      amountA?: null,
      amountB?: null
    ): ZappedInTempleLPEventFilter;

    "ZappedTempleInVault(address,address,uint256,uint256)"(
      sender?: string | null,
      fromToken?: null,
      fromAmount?: null,
      templeAmount?: null
    ): ZappedTempleInVaultEventFilter;
    ZappedTempleInVault(
      sender?: string | null,
      fromToken?: null,
      fromAmount?: null,
      templeAmount?: null
    ): ZappedTempleInVaultEventFilter;

    "ZappedTemplePlusFaithInVault(address,address,uint256,uint112,uint256)"(
      sender?: string | null,
      fromToken?: null,
      fromAmount?: null,
      faithAmount?: null,
      boostedAmount?: null
    ): ZappedTemplePlusFaithInVaultEventFilter;
    ZappedTemplePlusFaithInVault(
      sender?: string | null,
      fromToken?: null,
      fromAmount?: null,
      faithAmount?: null,
      boostedAmount?: null
    ): ZappedTemplePlusFaithInVaultEventFilter;
  };

  estimateGas: {
    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSupportedStables(
      _stables: string[],
      _supported: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTempleRouter(
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setZaps(
      _zaps: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportedStables(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    temple(overrides?: CallOverrides): Promise<BigNumber>;

    templeRouter(overrides?: CallOverrides): Promise<BigNumber>;

    toggleContractActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInTemple(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInTempleFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInTempleLP(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInTempleLPFor(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _for: string,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInVault(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInVaultFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zaps(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approvedTargets(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountToSwap(
      _token: string,
      _pair: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverToken(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedTargets(
      _tokens: string[],
      _targets: string[],
      _isApproved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSupportedStables(
      _stables: string[],
      _supported: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTempleRouter(
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setZaps(
      _zaps: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportedStables(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    temple(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    toggleContractActive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInTemple(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInTempleFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _recipient: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInTempleLP(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInTempleLPFor(
      _fromAddress: string,
      _fromAmount: BigNumberish,
      _minAmountOut: BigNumberish,
      _for: string,
      _swapTarget: string,
      _params: TempleZaps.TempleLiquidityParamsStruct,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInVault(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInVaultFor(
      _fromToken: string,
      _fromAmount: BigNumberish,
      _minTempleReceived: BigNumberish,
      _stableToken: string,
      _minStableReceived: BigNumberish,
      _vault: string,
      _for: string,
      _swapTarget: string,
      _swapData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zaps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}