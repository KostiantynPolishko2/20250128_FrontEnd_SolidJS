import styled from "styled-components";

export const FormOrderWrapper = styled.form`
    background-color: #e6cf5e;
    color: black;
    padding: 0 5px;

    & > input {
        background-color: #8c855f;
        padding: 0;
        margin: 0;
        width: 100px;
        max-width: fit-content;
        height: 25px;
        float: right;
        position: relative;
        top: 5px;
        margin: 0 0 0 5px;
    }

    & > label, input, button {
        cursor: pointer;
    }
`;