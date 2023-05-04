import { CartContext,ACTION_TYPES } from "../../Contexts/cart";
import { useContext } from "react";
import {
    CheckoutButton,
    CheckoutItem 
} from './styles'
const Item = ({ product }) => {
    const { quantity,name,imageUrl,price } = product;
    const { editCart } = useContext(CartContext);
    const Increment = () => editCart(ACTION_TYPES.add_item,product);
    const Decrement = () => editCart(ACTION_TYPES.remove_item,product)
    const Delete = () => editCart(ACTION_TYPES.delete_item,product)
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