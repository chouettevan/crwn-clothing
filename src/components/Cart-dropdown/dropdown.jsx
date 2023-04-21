import './dropdown.scss';
import Button from '../Button/button';
import CartItem from '../Cart-item/item';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/cart';
const Dropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='dropdown-container'>
            <div className='cart-items'>
                { cartItems.map(item => <CartItem key={item.id}  product={item}/>) }
            </div>
            <Button>Go to Checkout</Button>
        </div>
    );
}
export default Dropdown;