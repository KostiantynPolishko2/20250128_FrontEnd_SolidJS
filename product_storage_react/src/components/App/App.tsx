import React, {useState, useEffect, createContext } from 'react';
import 'the-new-css-reset';
import {Contract} from 'ethers';
import './App.css';
import {IProduct} from '../Product/Product.tsx';
import Products from '../Product/Products.tsx';
import initContract from '../../utils/initContract.tsx';
import {getProducts} from '../../utils/actionsContract.tsx';
import { ButtonWrapper as ButtonStd } from '../styles/standard.styled.ts';
import Order from '../Order/Order.tsx';

export const HandleCloseProductContext = createContext((e: React.FormEvent<HTMLElement>):void=>{});

const App = () => {

  const [contract, setContract] = useState<Contract | null>(null);
  const [product, setProduct] = useState<IProduct | null>(null)
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
  };

  const handleGetProduct = (e: React.FormEvent<HTMLElement>, i: number) => {
    e.preventDefault();
    setProduct(products[i]);
  };

  const handleCloseProduct = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    e.currentTarget.parentElement.reset();
    setProduct(null);
  };

  return (
    <div className="App">
      <h2 style={{backgroundColor: '#afe65e'}}>client page</h2>
      <header className="App-header">
        <ButtonStd onClick={handleGetProducts}>{!isLoaded? 'load' : 'unload'}</ButtonStd>
        {!isLoaded || <Products _products={products} _handleGetProduct={handleGetProduct}/>}
        <HandleCloseProductContext value={handleCloseProduct}>
          {!isLoaded || (product === null? <p>none</p> : <Order _product={product}/>)}
        </HandleCloseProductContext>
      </header>
    </div>
  );
};

export default App;
