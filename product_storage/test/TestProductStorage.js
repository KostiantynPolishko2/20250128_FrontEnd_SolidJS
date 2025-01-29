const ProductStorage = artifacts.require("./ProductStorage.sol");

contract("ProductStorage", accounts => {
  it("...should store the product 'ProductSt'.", async () => {
    const productStorage = await ProductStorage.deployed();

    // Set loading of products
    await productStorage.loadProducts();

    // Get name of stored product
    const product = await productStorage.getProductByName("butter");
    assert.equal(product.name, "butter", "The product 'milk' was not stored.");
  });
});
