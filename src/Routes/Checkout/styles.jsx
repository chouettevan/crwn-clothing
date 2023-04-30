import styled from 'styled-components';

export const CheckoutPage = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    column-gap:30px;
    margin: 0;
    padding: 0;
`
export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(4,2fr) 1fr;
    gap:30px;
    font-size: 25px;
    span {
        text-align: center;
    }
`
export const Cart = styled.div`
    border-bottom:1px solid darkgray;
    padding-bottom: 20px;
`