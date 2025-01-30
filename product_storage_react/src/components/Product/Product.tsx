import React, { FC } from 'react';
import { ProductWrapper } from './Product.styled.ts';

export interface IProduct {
    name: string,
    price: number,
    isAvailable: boolean,
}

export interface IProductItem {
    _product: IProduct,
}

const Product: FC<IProductItem> = (props) => {
    return(
        <ProductWrapper>
            <h3>name: {props._product.name}</h3>
            <p>price: {props._product.price}</p>
            <p>available: {props._product.isAvailable? 'Yes' : 'No'}</p>
        </ProductWrapper>
    );
}

export default Product;