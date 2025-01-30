import React, { FC } from 'react';
import { OrderWrapper } from './Order.styled.ts';
import Product from '../Product/Product.tsx';
import { IProductItem } from '../Product/Product.tsx';
import { ButtonWrapper as ButtonStd } from '../styles/standard.styled.ts';

const Order: FC<IProductItem> = (props) => {
    return(
        <OrderWrapper>
            <Product _product={props._product}/>
            <div>
                <p>quantity</p>
                <p>wallet</p>
                <ButtonStd>buy</ButtonStd>
            </div>
        </OrderWrapper>
    );

};

export default Order;