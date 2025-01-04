import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 55px;
    background-color:rgb(32, 32, 101);

    display: flex;
    align-items:center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 25px;
        background-color: rgb(32, 32, 101);
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        color: #FFF;
        float: right;
        clear: both;
    }
`