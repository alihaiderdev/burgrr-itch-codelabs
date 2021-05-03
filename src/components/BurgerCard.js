import React, { useState } from 'react';
import '../styles/components/burgerCard.css';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Burger from '../assets/images/product.png';
import BurgerCardModal from './BurgerCardModal';

const BurgerCard = ({ cardImage, cardTitle, cardSubTitle, cardDescription, cardPrice, index }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Link key={index} to='/' className='black' onClick={() => setModalShow(true)}>
        <div className='burgerCard'>
          <Row>
            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
              <div className='cardMedia'>
                <img src={cardImage && cardImage} alt='Burger' />
              </div>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7}>
              <div className='cardBody mx-2 my-3'>
                <p className='um mb-0 black cardTitle'>{cardTitle && cardTitle}</p>
                <p className='ur mb-1 cardSubTitle gray'>{cardSubTitle && cardSubTitle}</p>
                <p className='ur mb-1 cardDescription'>{cardDescription && cardDescription}</p>
                <p className='ur mb-0 orange'>{cardPrice && cardPrice}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
      <BurgerCardModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default BurgerCard;
