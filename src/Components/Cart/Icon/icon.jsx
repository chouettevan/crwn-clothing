import { Bag,IconContainer,ItemCount } from './styles';
import { useContext } from 'react';
import { CartContext } from '../../../Contexts/cart';
const CartIcon = () => {
    const { setIsCartOpen,isCartOpen,itemCount } = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen);
    return (
    <IconContainer onClick={toggle}>
        <Bag/>
        <ItemCount>{itemCount|| 0}</ItemCount>
    </IconContainer>
    );
};
export default CartIcon;