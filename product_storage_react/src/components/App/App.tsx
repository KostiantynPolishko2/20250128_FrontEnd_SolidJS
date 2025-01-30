import React, {useState, useEffect} from 'react';
import 'the-new-css-reset';
import {Contract, Wallet} from 'ethers';
import './App.css';
import Product, {IProduct} from '../Product/Product.tsx';
import initContract from '../../utils/initContract.tsx';
import {loadProducts, getProducts, getProductByName} from '../../utils/actionsContract.tsx';

const App = () => {

  const name = 'milk';
  const [contract, setContract] = useState<Contract | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>({name: 'undefined', price: 0, isAvailable: false});

  useEffect(() => {
    const setupContract = async () => {
      const _contract = await initContract();
      setContract(_contract);
    }
    
    setupContract();
  }, []);

  const handleGetProductByName = async(name: string)=>{
    setProduct(await getProductByName(contract, 'milk'));
    // console.log(`product ${name}`, product);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick = {()=>{loadProducts(contract)}} disabled style={{color: 'grey'}}>LoadToStorage</button>
        <button onClick = {()=>{getProducts(contract)}}>GetProducts</button>
        <button onClick = {()=>{handleGetProductByName(name)}}>GetProductByName: {name}</button>
        <Product name={product.name} price={product.price} isAvailable={product.isAvailable}>Product 1</Product>
      </header>
    </div>
  );
};

export default App;
