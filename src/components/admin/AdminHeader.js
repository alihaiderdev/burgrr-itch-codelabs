import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../styles/components/admin/adminHeader.css';
import AdminHeaderLogo from '../../assets/admin-icons-images/AdminLogo.svg';

const AdminHeader = ({ location: { pathname } }) => {
  return (
    <div className='adminHeader container-85 sb'>
      <div className='logoWrapper'>
        <img src={AdminHeaderLogo} alt='AdminHeaderLogo' />
      </div>
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
          {pathname === '/signup' ? null : (
            <li className='nav-item'>
              <Link to='/login' className='nav-link orange um loginBtn'>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(AdminHeader);
