import React, { FC } from 'react';
import { OrderWrapper } from './Order.styled.ts';
import Product from '../Product/Product.tsx';
import { IProductItem } from '../Product/Product.tsx';
import FormOrder from './FormOrder.tsx';

const Order: FC<IProductItem> = (props) => {
    return(
        <OrderWrapper>
            <Product _product={props._product}/>
            <FormOrder/>
        </OrderWrapper>
    );

};

export default Order;