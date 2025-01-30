import React, {FC} from 'react';
import Product from './Product.tsx';
import {IProduct} from './Product.tsx';
import { ProductsWrapper } from './ProductList.styled.ts';

interface IProducts {
    _products: IProduct[],
}

const Products: FC<IProducts> = (props) => {
    return(
        <ProductsWrapper>
            {props._products.map((product, index) => (
                <Product _product={product}/>
            ))}
        </ProductsWrapper>
    );
};

export default Products;