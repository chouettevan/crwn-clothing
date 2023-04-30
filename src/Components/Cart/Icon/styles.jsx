import styled from 'styled-components';
import { ReactComponent } from '../../../assets/shopping-bag.svg';
export const IconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const Bag = styled(ReactComponent)`
    width: 24px;
    height: 24px;
    font-weight: bold;
`
export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px; 
`