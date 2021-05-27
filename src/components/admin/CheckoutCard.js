import React from 'react';

import { withRouter } from 'react-router';

import Button from '../formComponents/Button';

const CheckoutCard = ({
  title,
  price,
  priceTitle,
  children,
  history,
  style,
}) => {
  return (
    <div className='pricingCard' style={style}>
      <div className='pricingCard-header'>
        {title && <h4 className='m-0 white'>{title}</h4>}
        {price && priceTitle && (
          <div className='priceInfo'>
            <h5 className='m-0 orange'>{price}</h5>
            <p className='m-0 gray'>{priceTitle}</p>
          </div>
        )}
      </div>
      <div className='checkout-cart-body'>{children}</div>
    </div>
  );
};

export default withRouter(CheckoutCard);
