import './card.scss';
import Button from '../Button/button'
import { useContext } from 'react';
import { CartContext } from '../../Contexts/cart';
const Card = ({ product }) => {
    const {name,price,imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <div className='card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <Button className='inverted ' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    );
};
export default Card;