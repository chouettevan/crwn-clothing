import styled from 'styled-components';

export const CheckoutItem = styled.div`
display: grid;
grid-template-columns: repeat(4,2fr) 1fr;
text-align: center;
column-gap:30px;
font-size: 30px;
border-top: 1px solid darkgray;
padding-top:20px;
padding-bottom: 20px;
`
export const CheckoutButton = styled.span<{$delete?:boolean}>`
font-size: 30px;
font-weight: 900;
cursor: pointer;
padding:2px;
    ${props => props.$delete && `
        height: fit-content;
        width: fit-content;
        display: flex;
        align-self: center;
        justify-self: flex-end;
        font-size: 45px;
    `}
`