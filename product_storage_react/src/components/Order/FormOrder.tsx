import React, {FC, useContext} from 'react';
import { FormOrderWrapper } from './FormOrder.styled.ts';
import { ButtonWrapper as ButtonStd } from '../styles/standard.styled.ts';
import { HandleCloseProductContext } from '../App/App.tsx';

const FormOrder: FC = () => {

    const _handleCloseProduct = useContext(HandleCloseProductContext);

    const handleClearForm = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        e.currentTarget.parentElement.reset();
    }

    return(
    <FormOrderWrapper>
        <label for='quantity'>quantity</label>
        <input type='number' min='0' name='quantity' placeholder='0'/><br/>
        <label for='address'>wallet</label>
        <input type='text' name='address' placeholder='address'/><br/>
        <ButtonStd disabled>buy</ButtonStd>
        <ButtonStd onClick={handleClearForm}>clear</ButtonStd>
        <ButtonStd onClick={_handleCloseProduct}>close</ButtonStd>
    </FormOrderWrapper>
    );
};

export default FormOrder;