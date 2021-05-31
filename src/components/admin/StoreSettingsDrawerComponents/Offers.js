import React, { useState } from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/offers.css';

import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { MdAddCircle, MdModeEdit } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';

// import AddIcon from '../../../assets/admin-icons-images/Icons/add icon.svg';
// import ToggleOnIcon from '../../../assets/admin-icons-images/Icons/Toggle-On.svg';
// import ToggleOffIcon from '../../../assets/admin-icons-images/Icons/Toggle-Off.svg';
import Icon from '../../Icon';

const Offers = ({ handleOpenAddDiscountModal, handleOpenAddCouponModal, closeDrawer }) => {
  const [discountToggle, setDiscountToggle] = useState(false);
  const [couponToggle, setCouponToggle] = useState(true);

  const discountItem = (title, off) => {
    return (
      <li>
        <div className='sb'>
          <span>{title}</span>
          <div className='actions'>
            <RiDeleteBin5Fill
              color='red'
              style={{ cursor: 'pointer', marginRight: '10px' }}
              size='20px'
              onClick={() => alert('Deleted')}
            />
            <MdModeEdit
              style={{ cursor: 'pointer', marginRight: '10px' }}
              size='25px'
              onClick={() => {
                closeDrawer();
                handleOpenAddDiscountModal();
              }}
            />
            <button onClick={() => setDiscountToggle(!discountToggle)}>
              {discountToggle ? (
                <Icon children={<BsToggleOn size='30px' />} />
              ) : (
                <Icon children={<BsToggleOff size='30px' />} />
              )}
            </button>
          </div>
        </div>
        <div className='percentOff sb'>
          <span className='gray'>{off}</span>
          <span>00:00 PM Tuesday, 25 Dec, 2021</span>
        </div>
      </li>
    );
  };

  const couponItem = (title, off) => {
    return (
      <li>
        <div className='sb'>
          <span>{title}</span>
          <div className='actions'>
            <RiDeleteBin5Fill
              color='red'
              style={{ cursor: 'pointer', marginRight: '10px' }}
              size='20px'
              onClick={() => alert('Deleted')}
            />
            <MdModeEdit
              style={{ cursor: 'pointer', marginRight: '10px' }}
              size='25px'
              onClick={() => {
                closeDrawer();
                handleOpenAddCouponModal();
              }}
            />
            <button onClick={() => setCouponToggle(!couponToggle)}>
              {couponToggle ? (
                <Icon children={<BsToggleOn size='30px' />} />
              ) : (
                <Icon children={<BsToggleOff size='30px' />} />
              )}
            </button>
          </div>
        </div>
        <div className='percentOff sb'>
          <span className='gray'>{off}</span>
          <span>00:00 PM Tuesday, 25 Dec, 2021</span>
        </div>
      </li>
    );
  };

  return (
    <div className='offers'>
      <div
        className='ub aic'
        onClick={() => {
          closeDrawer();
          handleOpenAddDiscountModal();
        }}
      >
        Discounts <Icon children={<MdAddCircle size='25px' />} />
      </div>
      <ul className='discountsListWrapper'>
        {discountItem('Black Friday', '60% off')}
        {discountItem('14th August Sale', '70% off')}
      </ul>

      <div
        className='ub aic'
        onClick={() => {
          closeDrawer();
          handleOpenAddCouponModal();
        }}
      >
        Coupons <Icon children={<MdAddCircle size='25px' />} />
      </div>
      <ul className='couponsListWrapper'>
        {couponItem('KHI-123', '60% off')}
        {couponItem('LAHORE-123', '70% off')}
      </ul>
    </div>
  );
};

export default Offers;
