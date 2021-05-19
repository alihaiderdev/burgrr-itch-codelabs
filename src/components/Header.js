import React, {useState} from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import '../styles/components/header.css';
import Logo from '../assets/icons/BurgerritchLogo.png';
import SearchIcon from '../assets/icons/Header/SearchIcon.svg';
import CartIconOrange from '../assets/icons/Header/CartIconOrange.png';
import CartIconWhite from '../assets/icons/Header/CartIconWhite.svg';
import Drawer from './SidebarDrawer';

const Header = ({location: {pathname}}) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const navBackgroundColor =
    pathname === '/delivery' || pathname === '/order-place' ? '#1b1b1b' : '';

  const active = {borderBottom: '3px solid #F46B0D'};

  return (
    <>
      {pathname === '/home' ||
      pathname === '/about-us' ||
      pathname === '/delivery' ||
      pathname === '/contact-us' ? (
        <div
          div
          className='header'
          style={{backgroundColor: navBackgroundColor}}
        >
          <nav className='navbar container-85'>
            <NavLink to='/'>
              <img className='logo' src={Logo} alt='Burgerritch Logo' />
            </NavLink>
            <ul className='navLinks'>
              <NavLink
                exact
                activeStyle={active}
                to='/home'
                className='headerNavLink white'
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                exact
                activeStyle={active}
                to='/about-us'
                className='headerNavLink white'
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                exact
                activeStyle={active}
                to='/delivery'
                className='headerNavLink white'
              >
                <li>Delivery</li>
              </NavLink>
              <NavLink
                exact
                activeStyle={active}
                to='/contact-us'
                className='headerNavLink white'
              >
                <li>Contact Us</li>
              </NavLink>
              <li className='icon'>
                <img src={SearchIcon} alt='SearchIcon' />
              </li>
              <li className='icon'>
                <Link onClick={showSidebar}>
                  <img src={CartIconWhite} alt='CartIconWhite' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
      <Drawer showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
};

export default withRouter(Header);
