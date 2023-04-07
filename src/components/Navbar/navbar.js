import { Outlet,Link } from 'react-router-dom'
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navbar.scss';
const links = [
    {name:'SHOP',href:'/shop'},
    {name:'SIGN IN',href:'/signIn'}
];
const Navbar = () => {
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
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};
export default Navbar;
