import { CartContext } from "../../Contexts/cart";
import { useContext } from "react";
import './element.scss';
const Item = ({ product }) => {
    const { quantity,name,imageUrl,price } = product;
    const { updateItemCount,removeItem } = useContext(CartContext);
    const Increment = () => updateItemCount(product,1);
    const Decrement = () => updateItemCount(product,-1);
    const Delete = () => removeItem(product); 
    return (
        <div className="checkout-item">
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <div className="quantity">
                <span className="decrement"  onClick={Decrement}>{'<'}</span>
                <span>{quantity}</span>
                <span  className="increment"  onClick={Increment}>{'>'}</span>
            </div>
            <span>{price}$</span>
            <span  className='delete' onClick={Delete}>&#215;</span>
        </div>
    );
}
export default Item;