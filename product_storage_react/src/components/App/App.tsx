import React from 'react';
import './App.css';
import Product from '../Product/Product.tsx';
import 'the-new-css-reset';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product name='milk' price={42} isAvailable={true}>Product 1</Product>
      </header>
    </div>
  );
}

export default App;
