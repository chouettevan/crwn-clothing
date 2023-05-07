import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../Utils/Firebase/firebase';
import { isCartOpenSelector } from '../../Store/cart/cart.selectors';
import { userSelector } from '../../Store/user/user.selector';
import Dropdown from '../Cart/Dropdown/dropdown';
import { NavigationContainer,
    NavLink,
    NavLinks,
    LogoContainer } from './styles';
import CartIcon from '../Cart/Icon/icon';
const Navbar = () => {
    const currentUser = useSelector(userSelector)
    const isCartOpen = useSelector(isCartOpenSelector)
    return (
        <>
            <NavigationContainer>
                <LogoContainer  to='/'>
                    <Logo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP 
                    </NavLink>
                   { currentUser?
                   <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>:
                   <NavLink  to='/auth'>
                       SIGN IN
                   </NavLink> 
                   }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <Dropdown/>}
            </NavigationContainer>
            <Outlet/>
        </>
    );
};
export default Navbar;
