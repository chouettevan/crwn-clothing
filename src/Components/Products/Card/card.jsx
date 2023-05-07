import Button from '../../Button/button'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../Store/cart/cart.actions';
import {
    ProductImage,
    CardContainer,
    Footer,
    Name,
    Price
} from './styles';
const Card = ({ product }) => {
    const {name,price,imageUrl} = product;
    const dispatch = useDispatch();
    const addProductToCart = () => dispatch(addItemToCart(product));
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