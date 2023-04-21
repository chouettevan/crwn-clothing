import { Outlet,Link } from 'react-router-dom'
import { Fragment,useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../Contexts/user';
import { signOutUser } from '../../utillities/Firebase/firebase';
import { CartContext } from '../../Contexts/cart';
import Dropdown from '../Cart-dropdown/dropdown';
import './navbar.scss';
import CartIcon from '../cart-icon/icon';
const Navbar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='links-container'>
                    <Link className='nav-link'  to='/shop'>
                        SHOP
                    </Link>
                   { currentUser?
                   <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>:
                   <Link className='nav-link' to='/auth'>
                       SIGN IN
                   </Link> 
                   }
                    <CartIcon />
                </div>
                {isCartOpen && <Dropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};
export default Navbar;
