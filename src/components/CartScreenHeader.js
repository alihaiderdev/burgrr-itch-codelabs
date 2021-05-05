import React, { useState } from 'react';
import { withRouter } from 'react-router';
import '../styles/components/cartScreenHeader.css';
import TimingIcon from '../assets/icons/Header/Timings.svg';
import PhoneIcon from '../assets/icons/Header/PhoneNumber.svg';
import BurgerritchTitleLogo from '../assets/icons/BurgerritchTitleLogo.png';
import CartIconOrange from '../assets/icons/Header/CartIconOrange.png';
import CartIconWhite from '../assets/icons/Header/CartIconWhite.svg';
import SearchIconWhite from '../assets/icons/Header/SearchIconWhite.png';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
import { Steps, message } from 'antd';
import { AiOutlineCheck } from 'react-icons/ai';
const { Step } = Steps;

const CartScreenHeader = ({ current, onChange, location: { pathname } }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const steps = [
    {
      description: 'Persoanl Information',
    },
    {
      description: 'Payment Method',
    },
    {
      description: 'Confirm Order',
    },
  ];

  return (
    <>
      <div className='cartScreenHeader'>
        {pathname === '/order-place' ? null : (
          <div className='contact-timing-wrapper container-85'>
            <div className='timing'>
              <img className='icon-md' src={TimingIcon} alt='TimingIcon' />
              <p className='ml-2'>
                Store Timings: Mon-Fri, 09:00 AM - 09:30 PM
              </p>
            </div>
            <div className='contact'>
              <img className='icon-sm' src={PhoneIcon} alt='PhoneIcon' />
              <p className='ml-2'>023723728812</p>
            </div>
          </div>
        )}

        <div className='logo-cart-wrapper container-85'>
          <Link to='/'>
            <div className='burgerritch-logo-wrapper'>
              <img src={BurgerritchTitleLogo} alt='BurgerritchTitleLogo' />
            </div>
          </Link>
          {pathname === '/order-place' ? null : (
            <div className='search-cart-wrapper'>
              <img
                className='icon-md'
                src={SearchIconWhite}
                alt='SearchIconWhite'
              />
              <Link onClick={showSidebar}>
                <img
                  className='icon-md ml-4'
                  src={CartIconOrange}
                  alt='CartIconOrange'
                />
              </Link>
            </div>
          )}
        </div>
        {pathname === '/order-place' ? null : current === 3 ? (
          <div className='container-30'>
            <div className='orangeCircle'>
              <AiOutlineCheck className='tickIcon' />
            </div>
          </div>
        ) : (
          <div className='container-custom'>
            <Steps current={current} onChange={onChange}>
              {steps.map((item) => (
                <Step key={item.title} description={item.description} />
              ))}
            </Steps>
          </div>
        )}
      </div>
      <Drawer showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
};

export default withRouter(CartScreenHeader);