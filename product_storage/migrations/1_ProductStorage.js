const ProductStorage = artifacts.require("ProductStorage");

module.exports = function (deployer) {
  deployer.deploy(ProductStorage);
};