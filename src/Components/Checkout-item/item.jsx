import { useDispatch,useSelector } from 'react-redux';
import { cartItemsSelector } from '../../Store/cart/cart.selectors';
import { addItemToCart,removeItemFromCart,deleteCartItem } from '../../Store/cart/cart.actions';
import {
    CheckoutButton,
    CheckoutItem 
} from './styles';
const Item = ({ product }) => {
    const { quantity,name,imageUrl,price } = product;
    const cartItems = useSelector(cartItemsSelector)
    const dispatch = useDispatch();
    const Increment = () => dispatch(addItemToCart(cartItems,product));
    const Decrement = () => dispatch(removeItemFromCart(cartItems,product));
    const Delete = () => dispatch(deleteCartItem(cartItems,product));
    return (
        <CheckoutItem className="checkout-item">
            <img src={imageUrl} alt={name} width='100%'/>
            <span>{name}</span>
            <div className="quantity">
                <CheckoutButton className="decrement"  onClick={Decrement}>{'<'}</CheckoutButton>
                <span>{quantity}</span>
                <CheckoutButton  className="increment"  onClick={Increment}>{'>'}</CheckoutButton>
            </div>
            <span>{price}$</span>
            <CheckoutButton $delete className='delete' onClick={Delete}>&#215;</CheckoutButton>
        </CheckoutItem>
    );
}
export default Item;