// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;
pragma experimental ABIEncoderV2;

import "../struct/ProductSt.sol";

library ProductItems {
    function milk() internal pure returns(ProductSt memory){
        return ProductSt("milk", 42, true);
    }

    function bread() internal pure returns(ProductSt memory){
        return ProductSt("bread", 21, true);
    }

    function butter() internal pure returns(ProductSt memory){
        return ProductSt("butter", 60, true);
    }
}