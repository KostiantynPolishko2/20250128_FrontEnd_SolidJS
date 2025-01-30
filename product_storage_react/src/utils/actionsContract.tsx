import { Contract } from "ethers";

export const getIsLoaded  = async(contract: Contract) => {
    return await contract.getIsLoaded();
};

export const loadProducts = async(contract: Contract) => {
    console.log('load products to storage:');
    const tx = await contract.loadProducts();
    console.log('tx: ', tx.hash);

    await tx.wait();
    console.log(await contract.getIsLoaded());
};

export const getProducts = async(contract: Contract) => {
    console.log('get list of products');
    const products = await contract.getProducts();

    return products;
}

export const getProductByName = async(contract: Contract, name: string) => {
    return await contract.getProductByName(name);
}