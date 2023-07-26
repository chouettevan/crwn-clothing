import { ItemContainer,ItemDetails,Price } from './styles';
import {CartItem as  Item} from '../../../Store/cart/cart.types';
export type ItemProps = {
    product:Item
}



const CartItem = ({ product:{ name,quantity,imageUrl,price } }:ItemProps) => {
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