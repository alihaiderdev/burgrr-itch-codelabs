import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../styles/components/admin/adminHeader.css';
import AdminHeaderLogo from '../../assets/admin-icons-images/AdminLogo.svg';
import NotificationBellIcon from '../../assets/admin-icons-images/Icons/notifications.svg';

const AdminHeader = ({location: {pathname}}) => {
  return (
    <div className='adminHeader container-85 sb'>
      <Link to='/admin/home'>
        <div className='logoWrapper'>
          <img src={AdminHeaderLogo} alt='AdminHeaderLogo' />
        </div>
      </Link>
      {pathname === '/admin/home' ? (
        <nav>
          <ul className='aic m-0'>
            <li className='nav-item'>
              <Link className='nav-link black ur'>Store Settings</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link black ur'>Orders</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link black ur'>Stats</Link>
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
      ) : (
        <nav>
          <ul className='aic m-0'>
            <li className='nav-item'>
              <Link className='nav-link gray um'>Why Us?</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link gray um'>Our Solutions</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link gray um'>Pricing</Link>
            </li>
            {pathname === '/admin/signup' ? null : (
              <li className='nav-item'>
                <Link to='/login' className='nav-link orange um loginBtn'>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default withRouter(AdminHeader);
