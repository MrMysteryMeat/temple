pragma solidity ^0.8.4;
// SPDX-License-Identifier: AGPL-3.0-or-later


import "./AMO__IBalancerVault.sol";

interface IPoolHelper {

    function getBalances() external view returns (uint256[] memory balances);

    function spotPriceUsingLPRatio() external view returns (uint256 templeBalance, uint256 stableBalance);

    function getSpotPriceScaled() external view returns (uint256 spotPriceScaled);

    function isSpotPriceBelowTPF() external view returns (bool);

    function isSpotPriceBelowTPF(uint256 slippage) external view returns (bool);

    function isSpotPriceAboveTPF(uint256 slippage) external view returns (bool);
    
    function isSpotPriceBelowTPFLowerBound() external view returns (bool);

    function isSpotPriceAboveTPFUpperBound() external view returns (bool);

    function isSpotPriceAboveTPF() external view returns (bool);

    function willExitTakePriceAboveTPFUpperBound(uint256 tokensOut) external view returns (bool);

    function willJoinTakePriceBelowTPFLowerBound(uint256 tokensIn) external view returns (bool);

    function getSlippage(uint256 spotPriceBeforeScaled) external view returns (uint256);

    function getMax(uint256 a, uint256 b) external pure returns (uint256 maxValue);
    
    function templeBalancerPoolIndex() external view returns (uint64);
    function balancerVault() external view returns (address);
    function balancerPoolId() external view returns (bytes32);

    function createPoolJoinRequest(
        IERC20 temple,
        IERC20 stable,
        uint256 amountIn,
        uint256 tokenIndex,
        uint256 minTokenOut
    ) external view returns (AMO__IBalancerVault.JoinPoolRequest memory request);

    function createPoolExitRequest(
        address temple,
        address stable,
        uint256 bptAmountIn,
        uint256 tokenIndex,
        uint256 minAmountOut,
        uint256 exitTokenIndex
    ) external view returns (AMO__IBalancerVault.ExitPoolRequest memory request);
}