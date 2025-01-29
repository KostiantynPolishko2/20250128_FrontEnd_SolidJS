// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;
pragma experimental ABIEncoderV2;

import "./struct/ProductSt.sol";
import "./library/ProductLib.sol";

contract ProductStorage {
    using ProductItems for ProductSt;
    bool isLoaded;

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

    function loadProducts() public loaded(){
        products.push(ProductItems.milk());
        productsExist[products[0].name] = products[0];

        products.push(ProductItems.bread());
        productsExist[products[1].name] = products[1];

        products.push(ProductItems.butter());
        productsExist[products[2].name] = products[2];

        isLoaded = true;
    }

    function getProducts() public view returns(ProductSt[] memory){
        return products;
    }

    function getProductByName(string memory name) public view exist(name) returns(ProductSt memory){
        return productsExist[name];
    }
}
