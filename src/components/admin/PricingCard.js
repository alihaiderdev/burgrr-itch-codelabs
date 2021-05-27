import React from 'react';
import { withRouter } from 'react-router';

import '../../styles/components/admin/pricingCard.css';
import Button from '../formComponents/Button';

const PricingCard = ({
  history,
  mostValued,
  title,
  price,
  features,
  btnTitle,
  message,
}) => {
  return (
    <>
      {title === 'Custom' ? (
        <div className='pricingCard'>
          <div className='pricingCard-header'>
            {mostValued && <span className='mostValued'>{mostValued}</span>}
            {title && <h4 className='m-0 white'>{title}</h4>}
            {price && <h5 className='m-0 orange'>{price}</h5>}
          </div>
          <div className='pricingCard-content'>
            {features && (
              <div className='pricingCard-body '>
                {features.map((f, i) => (
                  <p className='um gray' key={i}>
                    {f}
                  </p>
                ))}
              </div>
            )}
            <div className='pricingCard-footer'>
              <Button
                classname='ur'
                title={btnTitle}
                type='button'
                style={{
                  borderRadius: '5px',
                  padding: '10px 50px',
                  width: '70%',
                }}
                onClick={() => {
                  history.push('/admin/home');
                }}
              />
              {message && <p className='mt-4 mb-0 ur gray'>{message}</p>}
            </div>
          </div>
        </div>
      ) : (
        <div className='pricingCard'>
          <div className='pricingCard-header'>
            {mostValued && <span className='mostValued'>{mostValued}</span>}
            {title && <h4 className='m-0 white'>{title}</h4>}
            {price && <h5 className='m-0 orange'>{price}</h5>}
          </div>
          {features && (
            <div className='pricingCard-body'>
              {features.map((f, i) => (
                <p className='um gray' key={i}>
                  {f}
                </p>
              ))}
            </div>
          )}
          <div className='pricingCard-footer'>
            <Button
              classname='ur'
              title={btnTitle}
              type='submit'
              style={{
                borderRadius: '5px',
                padding: '10px 50px',
                width: '70%',
              }}
              onClick={() => {
                history.push('/admin/home');
              }}
            />
            {message && <p className='mt-4 mb-0 ur gray'>{message}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(PricingCard);
