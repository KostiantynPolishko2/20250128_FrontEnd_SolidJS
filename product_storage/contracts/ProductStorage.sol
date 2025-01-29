// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;
pragma experimental ABIEncoderV2;

import "./struct/ProductSt.sol";
import "./library/ProductsLib.sol";

contract ProductStorage {
    bool private isLoaded;
    address private owner;

    ProductSt[] private products;
    mapping(string => ProductSt) private productsExist;

    constructor(){
        owner = msg.sender;
        isLoaded = false;
    }

    modifier loaded(){
        require(!isLoaded, "Attention! Products already loaded.");
        _;
    }

    modifier exist(string memory name){
        require(bytes(productsExist[name].name).length > 0, "Attention! Product absent.");
        _;
    }

    function loadProducts() external loaded() {

        bool success = ProductsLib.loadItems(products, productsExist);
        require(success, "Attention! Failed to load products.");

        isLoaded = true;
    }

    function getProducts() external view returns(ProductSt[] memory){
        return products;
    }

    function getProductByName(string memory name) external view exist(name) returns(ProductSt memory){
        return productsExist[name];
    }

    function getIsLoaded() external view returns(bool){
        return isLoaded;
    }
}
