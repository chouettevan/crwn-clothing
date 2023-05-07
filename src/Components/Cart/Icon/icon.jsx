import { Bag,IconContainer,ItemCount } from './styles';
import { useDispatch,useSelector } from 'react-redux';
import { cartCountSelector } from '../../../Store/cart/cart.selectors';
import { toggleCart } from '../../../Store/cart/cart.actions';
const CartIcon = () => {
    const count = useSelector(cartCountSelector);
    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleCart());
    return (
    <IconContainer onClick={toggle}>
        <Bag/>
        <ItemCount>{count || 0}</ItemCount>
    </IconContainer>
    );
};
export default CartIcon;