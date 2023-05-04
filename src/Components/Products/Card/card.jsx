import Button from '../../Button/button'
import { useContext } from 'react';
import { CartContext,ACTION_TYPES } from '../../../Contexts/cart';
import {
    ProductImage,
    CardContainer,
    Footer,
    Name,
    Price
} from './styles';
const Card = ({ product }) => {
    const {name,price,imageUrl} = product;
    const { dispatch } = useContext(CartContext);
    const addProductToCart = () => dispatch({type:ACTION_TYPES.add_item,payload:product});
    return (
        <CardContainer>
            <ProductImage src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}$</Price>
            </Footer>
            <Button $inverted onClick={addProductToCart}>Add to Cart</Button>
        </CardContainer>
    );
};
export default Card;