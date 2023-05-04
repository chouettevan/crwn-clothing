import { Bag,IconContainer,ItemCount } from './styles';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../Contexts/cart';
const CartIcon = () => {
    const { setIsCartOpen,isCartOpen,cartItems } = useContext(CartContext);
    const [ count,setCount ] = useState(0);
    useEffect(() => {
        let newCount = 0;
        for (let i of cartItems) {
            newCount += i.quantity;
        }
        setCount(newCount);
    },[cartItems]);
    const toggle = () => setIsCartOpen(!isCartOpen);
    return (
    <IconContainer onClick={toggle}>
        <Bag/>
        <ItemCount>{count|| 0}</ItemCount>
    </IconContainer>
    );
};
export default CartIcon;