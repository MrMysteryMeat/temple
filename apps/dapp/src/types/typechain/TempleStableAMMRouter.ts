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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TempleStableAMMRouterInterface extends utils.Interface {
  contractName: "TempleStableAMMRouter";
  functions: {
    "addLiquidity(uint256,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
    "addPair(address,address)": FunctionFragment;
    "defendStable()": FunctionFragment;
    "getAmountOut(uint256,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "quote(uint256,uint256,uint256)": FunctionFragment;
    "removeLiquidity(uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDefendStable(address)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "swapExactStableForTemple(uint256,uint256,address,address,uint256)": FunctionFragment;
    "swapExactStableForTempleQuote(address,uint256)": FunctionFragment;
    "swapExactTempleForStable(uint256,uint256,address,address,uint256)": FunctionFragment;
    "swapExactTempleForStableQuote(address,uint256)": FunctionFragment;
    "templeToken()": FunctionFragment;
    "templeTreasury()": FunctionFragment;
    "tokenPair(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "defendStable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDefendStable",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setTreasury", values: [string]): string;
  encodeFunctionData(
    functionFragment: "swapExactStableForTemple",
    values: [BigNumberish, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactStableForTempleQuote",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTempleForStable",
    values: [BigNumberish, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTempleForStableQuote",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "templeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "templeTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokenPair", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defendStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefendStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactStableForTemple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactStableForTempleQuote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTempleForStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTempleForStableQuote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "templeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "templeTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TempleStableAMMRouter extends BaseContract {
  contractName: "TempleStableAMMRouter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TempleStableAMMRouterInterface;

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
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPair(
      _token: string,
      _pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    defendStable(overrides?: CallOverrides): Promise<[string]>;

    getAmountOut(
      amountIn: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountB: BigNumber }>;

    removeLiquidity(
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDefendStable(
      _defendStable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasury(
      _templeTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactStableForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactStableForTempleQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    swapExactTempleForStable(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTempleForStableQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & { priceBelowIV: boolean; amountOut: BigNumber }
    >;

    templeToken(overrides?: CallOverrides): Promise<[string]>;

    templeTreasury(overrides?: CallOverrides): Promise<[string]>;

    tokenPair(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    stable: string,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPair(
    _token: string,
    _pair: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  defendStable(overrides?: CallOverrides): Promise<string>;

  getAmountOut(
    amountIn: BigNumberish,
    reserveIn: BigNumberish,
    reserveOut: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  quote(
    amountA: BigNumberish,
    reserveA: BigNumberish,
    reserveB: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeLiquidity(
    liquidity: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    stable: string,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDefendStable(
    _defendStable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasury(
    _templeTreasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactStableForTemple(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    stable: string,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactStableForTempleQuote(
    pair: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swapExactTempleForStable(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    stable: string,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTempleForStableQuote(
    pair: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber] & { priceBelowIV: boolean; amountOut: BigNumber }
  >;

  templeToken(overrides?: CallOverrides): Promise<string>;

  templeTreasury(overrides?: CallOverrides): Promise<string>;

  tokenPair(arg0: string, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    addPair(
      _token: string,
      _pair: string,
      overrides?: CallOverrides
    ): Promise<void>;

    defendStable(overrides?: CallOverrides): Promise<string>;

    getAmountOut(
      amountIn: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setDefendStable(
      _defendStable: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasury(
      _templeTreasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactStableForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactStableForTempleQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactTempleForStable(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactTempleForStableQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & { priceBelowIV: boolean; amountOut: BigNumber }
    >;

    templeToken(overrides?: CallOverrides): Promise<string>;

    templeTreasury(overrides?: CallOverrides): Promise<string>;

    tokenPair(arg0: string, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
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
  };

  estimateGas: {
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPair(
      _token: string,
      _pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    defendStable(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      amountIn: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDefendStable(
      _defendStable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasury(
      _templeTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactStableForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactStableForTempleQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactTempleForStable(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTempleForStableQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    templeToken(overrides?: CallOverrides): Promise<BigNumber>;

    templeTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPair(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPair(
      _token: string,
      _pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    defendStable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountOut(
      amountIn: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDefendStable(
      _defendStable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _templeTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactStableForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactStableForTempleQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapExactTempleForStable(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      stable: string,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTempleForStableQuote(
      pair: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    templeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templeTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenPair(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}