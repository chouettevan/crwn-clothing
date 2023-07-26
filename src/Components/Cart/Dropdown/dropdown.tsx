import Button from '../../Button/button'
import CartItem from '../Item/item';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../../Store/cart/cart.selectors';
import { Link } from 'react-router-dom';
import { DropdownContainer,EmptyMessage,CartItems } from './styles';
const Dropdown = () => {
    const cartItems = useSelector(cartItemsSelector)
    return (
        <DropdownContainer className='dropdown-container'>
            <CartItems className='cart-items'>
                { cartItems.length ?
                 cartItems.map(item => <CartItem key={item.id}  product={item}/>)
                 : <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                }
            </CartItems>
            <Link to='/checkout'>
                <Button>Go to Checkout</Button>
            </Link>
        </DropdownContainer>
    );
}
export default Dropdown;