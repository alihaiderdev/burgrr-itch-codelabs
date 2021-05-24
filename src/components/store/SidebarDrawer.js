import React, { useState } from 'react';
import '../../styles/components/store/sidebarDrawer.css';

import { Drawer } from 'antd';

import CartItemCard from './CartItemCard';

import BurgerImage from '../../assets/images/product.png';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../formComponents/Button';
import { withRouter } from 'react-router';

const SidebarDrawer = ({ closeDrawer, visible, placement, history }) => {
  const cartItemsInfo = [
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
    {
      cardImg: BurgerImage,

      cardName: 'Big Mob',
      cardDrink: 'Pepsi',
      cardAddons: 'Malai Roll, Extra Fries, ..., +1',
      cardPrice: '538',
    },
  ];

  return (
    <Drawer
      placement={placement}
      closable={false}
      onClose={closeDrawer}
      visible={visible}
      key={placement}
    >
      <div className='yourCartCloseWrapper'>
        <div className='your-cart'>
          <h3>Your Cart</h3>
          <span className='yourCartCount'>2</span>
        </div>
        <AiOutlineClose
          size='25px'
          className='drawerCloseBtn'
          onClick={closeDrawer}
        />
      </div>
      <ul className='cartItems'>
        {cartItemsInfo &&
          cartItemsInfo.slice(0, 5).map((c, i) => {
            return (
              <CartItemCard
                index={i}
                img={c.cardImg}
                name={c.cardName}
                drink={c.cardDrink}
                addons={c.cardAddons}
                price={c.cardPrice}
              />
            );
          })}
      </ul>
      <div className='price'>
        <p className='sb'>
          <span>Subtotal</span>
          <span>PKR 538</span>
        </p>
        <p className='sb'>
          <span>Delivery Charges</span>
          <span>PKR 50</span>
        </p>
        <p className='sb'>
          <span>Total</span>
          <span className='orange um'>PKR 588</span>
        </p>
      </div>
      <div className='checkoutWrapper'>
        <p>
          *Estimated delivery time is <span>45 Minutes</span>
        </p>
        <Button
          btnType='contained'
          title='Checkout'
          style={{
            padding: '15px 130px',
            marginBottom: '20px',
            borderRadius: '10px',
          }}
          onClick={() => {
            closeDrawer();
            history.push('/order-place');
          }}
        />

        <Button
          btnType='text'
          onClick={() => {
            closeDrawer();
            history.push('/order-place');
          }}
          to='/order-place'
          title='Continue Shopping'
        />
      </div>
    </Drawer>
  );
};

export default withRouter(SidebarDrawer);
