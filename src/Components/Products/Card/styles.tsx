import styled from "styled-components";
import Button  from "../../Button/button";

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  ${Button} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    ${ProductImage} {
      opacity: 0.8;
    } 
    ${Button} {
      opacity: 0.85;
      display: flex;
    }
  }
`
export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const Price = styled.span`
  width: 10%;
`