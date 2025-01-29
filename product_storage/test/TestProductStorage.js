const ProductStorage = artifacts.require("./ProductStorage.sol");

contract("ProductStorage", accounts => {
  it("...should store the product 'ProductSt'.", async () => {
    const productStorage = await ProductStorage.deployed();

    // Set value of Hello World
    await productStorage.loadProducts();

    // Get stored value
    const product = await productStorage.getProductByName("milk");

    assert.equal(product.name, "milk", "The product 'milk' was not stored.");
  });
});
