import React, {useState, useEffect} from 'react';
import 'the-new-css-reset';
import {Contract, Wallet, JsonRpcProvider} from 'ethers';
import './App.css';
import Product, {IProduct} from '../Product/Product.tsx';

function App() {
  const CONTRACT_ADDRESS = "0x7FeEac7336e205aFb8F2542B6A5e4D402EBEE88E";
  const PRIVATE_KEY = "0x9b3a923c00d918ef98ac64ab6ab8edad0b81e490c8c694cb197fd45784d1bcab";

  const CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "loadProducts",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getProducts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isAvailable",
              "type": "bool"
            }
          ],
          "internalType": "struct ProductSt[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "getProductByName",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isAvailable",
              "type": "bool"
            }
          ],
          "internalType": "struct ProductSt",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getIsLoaded",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]

  const [contract, setContract] = useState<Contract | null>(null);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  const initContract = async() => {
    const provider = new JsonRpcProvider('HTTP://127.0.0.1:7545');
    await provider.ready;

    const _wallet = new Wallet(PRIVATE_KEY, provider);
    const _contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, _wallet);

    setContract(_contract);   
    setWallet(_wallet);

    const _loaded = await _contract.getIsLoaded();
    console.log('loaded product', _loaded);
  }

  useEffect(() => {initContract();}, []);

  useEffect(() => {
    if (contract){
      const _loaded = contract.getIsLoaded();
      console.log('contract address', contract.target);
    }
  }, [contract]);

  return (
    <div className="App">
      <header className="App-header">
        <Product name='milk' price={42} isAvailable={true}>Product 1</Product>
      </header>
    </div>
  );
}

export default App;
