import './icon.scss';
import { ReactComponent as Bag } from '../../assets/shopping-bag.svg';
const CartIcon = ({ onClick }) => {
    return (
    <div className='cart-icon-container' onClick={onClick}>
        <Bag className='icon'/>
        <span>0</span>
    </div>
    );
};
export default CartIcon;