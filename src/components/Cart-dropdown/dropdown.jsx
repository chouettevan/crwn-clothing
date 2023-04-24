import './dropdown.scss';
import Button from '../Button/button';
import CartItem from '../Cart-item/item';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/cart';
import { Link } from 'react-router-dom';
const Dropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='dropdown-container'>
            <div className='cart-items'>
                { cartItems.map(item => <CartItem key={item.id}  product={item}/>) }
            </div>
            <Link to='/checkout'>
                <Button>Go to Checkout</Button>
            </Link>
        </div>
    );
}
export default Dropdown;