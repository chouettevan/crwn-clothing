import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap:20px;
    font-size: 20px;
`
export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
`
export const Price = styled.span`
    font-size: 19px;
`