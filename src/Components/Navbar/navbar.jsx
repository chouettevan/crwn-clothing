import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../Contexts/user';
import { signOutUser } from '../../Utils/Firebase/firebase';
import { CartContext } from '../../Contexts/cart';
import Dropdown from '../Cart/Dropdown/dropdown';
import { NavigationContainer,
    NavLink,
    NavLinks,
    LogoContainer } from './styles';
import CartIcon from '../Cart/Icon/icon';
const Navbar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
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
