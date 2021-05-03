import React from 'react';
import '../styles/components/card.css';
import Burger from '../assets/images/product.png';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to='/' className='black'>
      <div className='card'>
        <div className='cardMedia'>
          <img src={Burger} alt='Burger' />
        </div>
        <div className='cardBody sb '>
          <p className='um black m-0'>Hamburger</p>
          <p className='ur orange m-0'>450.0 PKR</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
