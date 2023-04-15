import { Outlet,Link } from 'react-router-dom'
import { Fragment,useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../Contexts/user.context';
import { signOutUser } from '../../utillities/Firebase/firebase';
import './navbar.scss';
const links = [
    {name:'SHOP',href:'/shop'},

];
const Navbar = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='links-container'>
                    {links.map(link => {
                        return (
                        <Link className='nav-link' key={link.name} to={link.href}>
                            {link.name}
                        </Link>
                        );
                    })}
                   { currentUser?
                   <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>:
                   <Link className='nav-link' to='/auth'>
                       SIGN IN
                   </Link> 
                   }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};
export default Navbar;
