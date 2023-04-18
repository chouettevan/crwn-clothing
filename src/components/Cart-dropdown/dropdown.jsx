import './dropdown.scss';
import Button from '../Button/button';
const Dropdown = () => {
    return (
        <div className='dropdown-container'>
            <div className='cart-items'/>
            <Button>Go to Checkout</Button>
        </div>
    );
}
export default Dropdown;