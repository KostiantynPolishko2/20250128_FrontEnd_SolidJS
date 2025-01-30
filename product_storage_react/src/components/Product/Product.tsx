import React, { FC } from 'react';
import { ProductWrapper } from './Product.styled.ts';

export interface IProduct {
    name: string;
    price: number;
    isAvailable: boolean;
}

const Product: FC<IProduct> = (props) => {
    return(
        <ProductWrapper>
            <h3>name: {props.name}</h3>
            <p>price: {props.price}</p>
            <p>available: {props.isAvailable? 'Yes' : 'No'}</p>
        </ProductWrapper>
    );
}

export default Product;