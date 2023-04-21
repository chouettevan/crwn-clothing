import './icon.scss';
import { ReactComponent as Bag } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/cart';
const CartIcon = () => {
    const { setIsCartOpen,isCartOpen,cartItems } = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen);
    let count = 0;
    for (let i of cartItems) {
        count += i.quantity;
    }
    return (
    <div className='cart-icon-container' onClick={toggle} >
        <Bag className='icon'/>
        <span>{count || 0}</span>
    </div>
    );
};
export default CartIcon;