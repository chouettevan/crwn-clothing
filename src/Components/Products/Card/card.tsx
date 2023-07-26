import Button from '../../Button/button'
import { useDispatch,useSelector } from 'react-redux';
import { cartItemsSelector } from '../../../Store/cart/cart.selectors';
import { addItemToCart } from '../../../Store/cart/cart.actions';
import {
    ProductImage,
    CardContainer,
    Footer,
    Name,
    Price
} from './styles';
import {Product} from '../../../Store/products/products.types'
const Card = ({ product }:{ product:Product }) => {
    const {name,price,imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector);
    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
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