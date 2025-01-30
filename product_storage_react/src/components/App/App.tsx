import React, {useState, useEffect} from 'react';
import 'the-new-css-reset';
import {Contract} from 'ethers';
import './App.css';
import {IProduct} from '../Product/Product.tsx';
import Products from '../Product/Products.tsx';
import initContract from '../../utils/initContract.tsx';
import {getProducts} from '../../utils/actionsContract.tsx';
import { ButtonWrapper as ButtonStd } from '../styles/standard.styled.ts';

const App = () => {

  const [contract, setContract] = useState<Contract | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const setupContract = async () => {
      const _contract = await initContract();
      setContract(_contract);
    }
    
    setupContract();
  }, []);

  const handleGetProducts = async() => {
    if (products.length === 0){
      setProducts(await getProducts(contract));
    }

    setIsLoaded(!isLoaded);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ButtonStd onClick = {()=>{handleGetProducts()}}>{!isLoaded? 'load' : 'unload'}</ButtonStd>
        {!isLoaded || <Products _products={products}/>}
      </header>
    </div>
  );
};

export default App;
