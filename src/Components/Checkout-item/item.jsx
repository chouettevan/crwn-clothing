import { CartContext } from "../../Contexts/cart";
import { useContext } from "react";
import {
    CheckoutButton,
    CheckoutItem 
} from './styles'
const Item = ({ product }) => {
    const { quantity,name,imageUrl,price } = product;
    const { updateItemCount,removeItem } = useContext(CartContext);
    const Increment = () => updateItemCount(product,1);
    const Decrement = () => updateItemCount(product,-1);
    const Delete = () => removeItem(product); 
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