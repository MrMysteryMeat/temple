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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ITempleStableRouterInterface extends utils.Interface {
  contractName: "ITempleStableRouter";
  functions: {
    "addLiquidity(uint256,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
    "quote(uint256,uint256,uint256)": FunctionFragment;
    "swapExactStableForTemple(uint256,uint256,address,address,uint256)": FunctionFragment;
    "swapExactStableForTempleQuote(address,uint256)": FunctionFragment;
    "swapExactTempleForStable(uint256,uint256,address,address,uint256)": FunctionFragment;
    "swapExactTempleForStableQuote(address,uint256)": FunctionFragment;
    "tokenPair(address)": FunctionFragment;
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
    functionFragment: "quote",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
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
  encodeFunctionData(functionFragment: "tokenPair", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "tokenPair", data: BytesLike): Result;

  events: {};
}

export interface ITempleStableRouter extends BaseContract {
  contractName: "ITempleStableRouter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITempleStableRouterInterface;

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

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountB: BigNumber }>;

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

    tokenPair(token: string, overrides?: CallOverrides): Promise<[string]>;
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

  quote(
    amountA: BigNumberish,
    reserveA: BigNumberish,
    reserveB: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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

  tokenPair(token: string, overrides?: CallOverrides): Promise<string>;

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

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    tokenPair(token: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

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

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
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

    tokenPair(token: string, overrides?: CallOverrides): Promise<BigNumber>;
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

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
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

    tokenPair(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}