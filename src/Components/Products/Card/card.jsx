import Button from '../../Button/button'
import { useContext } from 'react';
import { CartContext } from '../../../Contexts/cart';
import {
    ProductImage,
    CardContainer,
    Footer,
    Name,
    Price
} from './styles';
const Card = ({ product }) => {
    const {name,price,imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <CardContainer>
            <ProductImage src={imageUrl} alt={name}/>
            <Footer>
                <Name >{name}</Name>
                <Price>{price}$</Price>
            </Footer>
            <Button $inverted onClick={addProductToCart}>Add to Cart</Button>
        </CardContainer>
    );
};
export default Card;