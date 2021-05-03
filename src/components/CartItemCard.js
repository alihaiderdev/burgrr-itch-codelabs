import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles/components/cartItemCard.css';
import BurgerImage from '../assets/images/product.png';

const CartItemCard = ({ index, img, name, drink, addons, price }) => {
  const [deleteCartItem, setDeleteCartItem] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <div key={index} className='cartItemCard mb-4'>
      <Row>
        <Col className='imgCol' xs={3} sm={3} md={4} lg={4} xl={4}>
          <div className='cartItemCardImageWrapper'>
            <img src={img} alt='BurgerImage' />
          </div>
        </Col>
        <Col className='detailsCol' xs={9} sm={9} md={8} lg={8} xl={8} className='pl-0'>
          <div className='cartItemCardDescriptionWrapper'>
            <h4 className='title my-2'>{name}</h4>
            <p className='drink mb-1 um'>
              Drink <span className='gray ml-3 ur'>{drink}</span>
            </p>
            <p className='addons mb-1 um'>
              Add-ons
              <span className='gray ml-3 ur'>{addons}</span>
            </p>
            <div className='qtyPriceWrapper mb-2'>
              <div>
                <span className='m-0'>QTY</span>
                <div className='qtywrapper ml-3 mr-4'>
                  <button className='sub' onClick={() => setCartItemCount(cartItemCount - 1)}>
                    -
                  </button>
                  <div className='value'>{cartItemCount}</div>
                  <button className='add' onClick={() => setCartItemCount(cartItemCount + 1)}>
                    +
                  </button>
                </div>
              </div>
              <h4 className='price orange m-0'>PKR {price}</h4>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItemCard;
