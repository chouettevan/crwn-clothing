import { useDispatch } from 'react-redux';
import { addItemToCart,removeItemFromCart,deleteCartItem } from '../../Store/cart/cart.actions';
import {
    CheckoutButton,
    CheckoutItem 
} from './styles';
const Item = ({ product }) => {
    const { quantity,name,imageUrl,price } = product;
    const dispatch = useDispatch();
    const Increment = () => dispatch(addItemToCart(product));
    const Decrement = () => dispatch(removeItemFromCart(product));
    const Delete = () => dispatch(deleteCartItem(product));
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