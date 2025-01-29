// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;
pragma experimental ABIEncoderV2;

import "../struct/ProductSt.sol";

library ProductsLib {
    function milk() internal pure returns(ProductSt memory){
        return ProductSt("milk", 42, true);
    }

    function bread() internal pure returns(ProductSt memory){
        return ProductSt("bread", 21, true);
    }

    function butter() internal pure returns(ProductSt memory){
        return ProductSt("butter", 60, true);
    }

    function loadItems(ProductSt[] storage _products, mapping(string=>ProductSt) storage _productsExist) internal returns(bool){
        _products.push(milk());
        _productsExist[_products[_products.length - 1].name] = _products[_products.length - 1];

        _products.push(bread());
        _productsExist[_products[_products.length - 1].name] = _products[_products.length - 1];

        _products.push(butter());
        _productsExist[_products[_products.length - 1].name] = _products[_products.length - 1];

        return (_products.length == 3);
    }
}
