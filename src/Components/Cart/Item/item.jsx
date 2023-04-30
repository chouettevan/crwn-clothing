import { ItemContainer,ItemDetails,Price } from './styles';
const CartItem = ({ product:{ name,quantity,imageUrl,price } }) => {
    return (
        <ItemContainer>
            <img src={imageUrl} alt={name} width='80%'/>
            <ItemDetails>
                <span>{name}</span>
                <Price>{quantity} x ${price}</Price>
            </ItemDetails>
        </ItemContainer>
    );
};
export default CartItem;