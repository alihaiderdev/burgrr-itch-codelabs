import React, {useState} from 'react';
import CartItemCard from './CartItemCard';
import '../styles/components/sidebarDrawer.css';
import {Link} from 'react-router-dom';
import {Drawer} from 'antd';
import BurgerImage from '../assets/images/product.png';

// const Drawer = ({ showSidebar, sidebar }) => {
//   const cartItemsInfo = [
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//     {
//       cardImg: BurgerImage,

//       cardName: 'Big Mob',
//       cardDrink: 'Pepsi',
//       cardAddons: 'Malai Roll, Extra Fries, ..., +1',
//       cardPrice: '538',
//     },
//   ];

//   return (
//     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//       <button onClick={showSidebar} type='button' className='drawerCloseBtn'>
//         X
//       </button>
//       <div className='your-cart'>
//         <h3>Your Cart</h3>
//         <span className='yourCartCount'>2</span>
//       </div>
//       <ul className='cartItems'>
//         {cartItemsInfo &&
//           cartItemsInfo.slice(0, 5).map((c, i) => {
//             return (
//               <CartItemCard
//                 index={i}
//                 img={c.cardImg}
//                 name={c.cardName}
//                 drink={c.cardDrink}
//                 addons={c.cardAddons}
//                 price={c.cardPrice}
//               />
//             );
//           })}
//       </ul>
//       <div className='price'>
//         <p className='sb'>
//           <span>Subtotal</span>
//           <span>PKR 538</span>
//         </p>
//         <p className='sb'>
//           <span>Delivery Charges</span>
//           <span>PKR 50</span>
//         </p>
//         <p className='sb'>
//           <span>Total</span>
//           <span className='orange um'>PKR 588</span>
//         </p>
//       </div>
//       <div className='checkoutWrapper'>
//         <p>
//           *Estimated delivery time is <span>45 Minutes</span>
//         </p>
//         <button onClick={() => {}}>Checkout</button>
//         <Link to='/' className='orange'>
//           Continue Shopping
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Drawer;

const SidebarDrawer = ({closeDrawer, visible, placement}) => {
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
      <button onClick={closeDrawer} type='button' className='drawerCloseBtn'>
        X
      </button>
      <div className='your-cart'>
        <h3>Your Cart</h3>
        <span className='yourCartCount'>2</span>
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
        <button onClick={() => {}}>Checkout</button>
        <Link to='/' className='orange'>
          Continue Shopping
        </Link>
      </div>
    </Drawer>
  );
};

export default SidebarDrawer;
