import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import '../../styles/components/admin/adminHeader.css';
import AdminHeaderLogo from '../../assets/admin-icons-images/AdminLogo.svg';
import NotificationBellIcon from '../../assets/admin-icons-images/Icons/notifications.svg';

const AdminHeader = ({location: {pathname}}, props) => {
  // console.log('props : ', props);
  const active = {
    borderBottom: '3px solid #F46B0D',
    color: '#F46B0D !important',
  };

  return (
    <div className='adminHeader container-85 sb'>
      <Link to='/admin/home'>
        <div className='logoWrapper'>
          <img src={AdminHeaderLogo} alt='AdminHeaderLogo' />
        </div>
      </Link>
      {(pathname === '/admin/home' ||
        pathname === '/admin/stats' ||
        pathname === '/admin/orders') && (
        <nav>
          <ul className='aic m-0'>
            <li className='nav-item'>
              <NavLink
                exact
                activeStyle={active}
                to='/admin/get-started'
                className='nav-link black ur'
              >
                Store
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                activeStyle={active}
                to='/admin/orders'
                className='nav-link black ur'
              >
                Orders
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                activeStyle={active}
                to='/admin/stats'
                className='nav-link black ur'
              >
                Stats
              </NavLink>
            </li>
            <li>
              <Link className='nav-link'>
                <img src={NotificationBellIcon} alt='NotificationBellIcon' />
              </Link>
            </li>
            <li>
              <Link className='nav-link'>
                <img src={NotificationBellIcon} alt='NotificationBellIcon' />
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {pathname === '/admin/get-started' ||
      pathname === '/admin/signup' ||
      pathname === '/admin/login' ||
      pathname === '/admin/why-us' ||
      pathname === '/admin/our-solution' ||
      pathname === '/admin/pricing' ? (
        <nav>
          <ul className='aic m-0'>
            <li className='nav-item'>
              <NavLink
                exact
                activeStyle={active}
                to='/admin/why-us'
                className='nav-link black ur'
              >
                Why Us?
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                activeStyle={active}
                to='/admin/our-solution'
                className='nav-link black ur'
              >
                Our Solutions
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                activeStyle={active}
                to='/admin/pricing'
                className='nav-link black ur'
              >
                Pricing
              </NavLink>
            </li>
            {pathname === '/admin/get-started' ? (
              <li className='nav-item'>
                <Link to='/admin/login' className='nav-link orange um loginBtn'>
                  Login
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default withRouter(AdminHeader);
