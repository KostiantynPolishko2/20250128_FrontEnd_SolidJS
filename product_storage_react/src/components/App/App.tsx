import React, {useState, useEffect} from 'react';
import 'the-new-css-reset';
import {Contract, Wallet} from 'ethers';
import './App.css';
import Product, {IProduct} from '../Product/Product.tsx';
import initContract from '../../utils/initContract.tsx';
import {loadProducts, getProducts, getProductByName} from '../../utils/actionsContract.tsx';

const App = () => {

  const [contract, setContract] = useState<Contract | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const setupContract = async () => {
      const _contract = await initContract();
      setContract(_contract);
    }
    
    setupContract();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick = {()=>{loadProducts(contract)}} disabled style={{color: 'grey'}}>LoadToStorage</button>
        <button onClick = {()=>{getProducts(contract)}}>GetProducts</button>
        <button onClick = {()=>{getProductByName(contract, 'milk')}}>GetProductByName</button>
        <Product name='milk' price={42} isAvailable={true}>Product 1</Product>
      </header>
    </div>
  );
};

export default App;
