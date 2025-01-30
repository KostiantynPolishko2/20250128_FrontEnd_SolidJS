import React, {FC} from 'react';
import Product from './Product.tsx';
import {IProduct} from './Product.tsx';
import { ProductsWrapper } from './ProductList.styled.ts';

interface IProducts {
    _products: IProduct[],
    _handleGetProduct: (e: React.FormEvent<HTMLElement>, i:number)=>void,
}

const Products: FC<IProducts> = (props) => {
    return(
        <ProductsWrapper>
            {props._products.map((product, i) => (
                <div onClick={(e)=>props._handleGetProduct(e, i)} key={i}>
                    <Product _product={product}/>
                </div>
            ))}
        </ProductsWrapper>
    );
};

export default Products;