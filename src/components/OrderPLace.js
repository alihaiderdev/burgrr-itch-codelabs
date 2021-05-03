import React from 'react';
import '../styles/components/orderPlace.css';
import OrderPlaced from '../assets/Illustrations/OrderPlaced.svg';

import { AiOutlineArrowLeft } from 'react-icons/ai';

const OrderPLace = ({ firstStep, prevStep, nextStep, values, current }) => {
  console.log('{ current } : ', { current });

  return (
    <div className='orderPlaceScreen'>
      <div className='imageWrapper'>
        <img src={OrderPlaced} alt='OrderPlaced' />
        <p className='um lgray mt-3'>
          Your Order has been placed Successfully!
        </p>
        <p className='ur lgray'>Get ready! rider will Contact you soon!</p>
        <div className='shoppingBtnWrapper'>
          <p className='ur m-1'>Want more?</p>
          <button
            className='arrowBack white bg-orange b-none py-2 px-4 '
            type='button'
            onClick={prevStep}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className='continueShopping white bg-orange b-none py-2 px-4 '
            type='button'
            onClick={prevStep}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPLace;
