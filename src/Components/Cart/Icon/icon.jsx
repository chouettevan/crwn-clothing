import { Bag,IconContainer,ItemCount } from './styles';
import { useContext } from 'react';
import { CartContext } from '../../../Contexts/cart';
const CartIcon = () => {
    const { setIsCartOpen,isCartOpen,cartItems } = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen);
    let count = 0;
    for (let i of cartItems) {
        count += i.quantity;
    }
    return (
    <IconContainer onClick={toggle}>
        <Bag/>
        <ItemCount>{count || 0}</ItemCount>
    </IconContainer>
    );
};
export default CartIcon;