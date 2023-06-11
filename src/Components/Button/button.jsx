import styled,{ css } from 'styled-components';

const googleStyles = css`
    background-color: #4285f4;
    color: white;
    padding: 0px 15px;
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`
const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`
const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;  
    align-items:center;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    ${props => props?.$google && googleStyles}
    ${props => props?.$inverted && invertedStyles}
`
export default Button;

