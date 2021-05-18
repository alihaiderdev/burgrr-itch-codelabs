import React, {useState} from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/offers.css';
import AddIcon from '../../../assets/admin-icons-images/Icons/add icon.svg';
import ToggleOnIcon from '../../../assets/admin-icons-images/Icons/Toggle-On.svg';
import ToggleOffIcon from '../../../assets/admin-icons-images/Icons/Toggle-Off.svg';

const Offers = ({handleOpenAddDiscountModal, closeDrawer}) => {
  const [discountToggle, setDiscountToggle] = useState(false);
  const [couponToggle, setCouponToggle] = useState(true);
  return (
    <div className='offers'>
      <button
        className='ub'
        onClick={() => {
          closeDrawer();
          handleOpenAddDiscountModal();
        }}
      >
        Discounts <img className='mr-3' src={AddIcon} alt='AddIcon' />
      </button>
      <ul className='discountsListWrapper'>
        <li>
          <div className='sb'>
            <span>Black Friday</span>
            <span>00:00 PM Tuesday, 25 Dec, 2021</span>
          </div>
          <span className='gray'>60% off</span>
        </li>
        <li>
          <div className='sb'>
            <span>14th August Sale</span>
            <span>00:00 PM Tuesday, 25 Dec, 2021</span>
          </div>
          <span className='gray'>60% off</span>
        </li>
      </ul>
      <button
        className='ub'
        onClick={() => {
          closeDrawer();
          handleOpenAddDiscountModal();
        }}
      >
        Coupons <img className='mr-3' src={AddIcon} alt='AddIcon' />
      </button>
      <ul className='couponsListWrapper'>
        <li className='sb'>
          <span>Karachi122</span>
          <div>
            <span className='gray'>20% Off</span>
            <button onClick={() => setDiscountToggle(!discountToggle)}>
              {discountToggle ? (
                <img
                  className='toggleImage'
                  src={ToggleOnIcon}
                  alt='ToggleOnIcon'
                />
              ) : (
                <img
                  className='toggleImage'
                  src={ToggleOffIcon}
                  alt='ToggleOffIcon'
                />
              )}
            </button>
          </div>
        </li>
        <li className='sb'>
          <span>1Lahore114</span>
          <div>
            <span className='gray'>30% Off</span>
            <button onClick={() => setCouponToggle(!couponToggle)}>
              {couponToggle ? (
                <img
                  className='toggleImage'
                  src={ToggleOnIcon}
                  alt='ToggleOnIcon'
                />
              ) : (
                <img
                  className='toggleImage'
                  src={ToggleOffIcon}
                  alt='ToggleOffIcon'
                />
              )}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Offers;
