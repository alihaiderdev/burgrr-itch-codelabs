import React, { useState } from 'react';

import '../../styles/components/store/burgerCard.css';

import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Burger from '../../assets/images/product.png';
import BurgerCardModal from '../store/BurgerCardModal';

const BurgerCard = ({
  cardImage,
  cardTitle,
  cardSubTitle,
  cardDescription,
  cardPrice,
  index,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Link
        key={index}
        to='/'
        className='black'
        onClick={() => setModalShow(true)}
      >
        <div className='burgerCard'>
          <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} className='cardMediaCol'>
              <div className='cardMedia'>
                <img src={cardImage && cardImage} alt='Burger' />
              </div>
            </Col>
            <Col xs={9} sm={9} md={9} lg={9} xl={9} className='cardBodyCol'>
              <div className='cardBody mx-2 my-3'>
                <h5 className='um mb-0 black cardTitle'>
                  {cardTitle && cardTitle}
                </h5>
                <p className='ur mb-1 cardSubTitle gray'>
                  {cardSubTitle && cardSubTitle}
                </p>
                <p className='ur mb-2 cardDescription'>
                  {cardDescription && cardDescription}
                </p>
                <h5 className='ur mb-0 orange'>{cardPrice && cardPrice}</h5>
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
