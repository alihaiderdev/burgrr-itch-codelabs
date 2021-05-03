import React, { useState } from 'react';
import '../styles/screens/newHome.css';
import { Col, Row, Tabs, Tab, Button, Form } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import BurgerritchLogo from '../assets/icons/BurgerritchLogo.png';
import HeroSectionBgImage from '../assets/images/header-bg.png';
import LocationIcon from '../assets/icons/Header/Location.svg';
import PhoneNumberIcon from '../assets/icons/Header/PhoneNumber.svg';
import PriceRangeIcon from '../assets/icons/Header/PriceRange.svg';
import CartIconWhite from '../assets/icons/Header/CartIconWhite.svg';
import RatingIcon from '../assets/icons/Header/Rating.svg';
import SearchIcon from '../assets/icons/Header/SearchIcon.svg';
import TimingIcon from '../assets/icons/Header/Timings.svg';
import BurgerCard from '../components/BurgerCard';
import Burger from '../assets/images/product.png';
import Drawer from '../components/Drawer';
import burgarCardsInfo from '../data/burgarCardsInfo';

const BurgersTab = () => {
  return (
    <div className='mt-4'>
      <div className='cardWrapperHeading'>
        <h2 className='black py-2 mb-4 container-85'>Burgers</h2>
      </div>
      <div className='container-85 '>
        <Row>
          {burgarCardsInfo &&
            burgarCardsInfo.map((card, index) => {
              return (
                <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                  <BurgerCard
                    index={index}
                    cardImage={card.cardImage}
                    cardTitle={card.cardTitle}
                    cardSubTitle={card.cardSubTitle}
                    cardDescription={card.cardDescription}
                    cardPrice={card.cardPrice}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

const PizzasTab = () => {
  return (
    <div className='mt-4'>
      <div className='cardWrapperHeading'>
        <h2 className='black py-2 mb-4 container-85'>Pizzas</h2>
      </div>
      <div className='container-85 '>
        <Row>
          {burgarCardsInfo &&
            burgarCardsInfo.slice(0, 8).map((card, index) => {
              return (
                <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                  <BurgerCard
                    index={index}
                    cardImage={card.cardImage}
                    cardTitle={card.cardTitle}
                    cardSubTitle={card.cardSubTitle}
                    cardDescription={card.cardDescription}
                    cardPrice={card.cardPrice}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

const AppetizersTab = () => {
  return (
    <div className='mt-4'>
      <div className='cardWrapperHeading'>
        <h2 className='black py-2 mb-4 container-85'>Appetizers</h2>
      </div>
      <div className='container-85 '>
        <Row>
          {burgarCardsInfo &&
            burgarCardsInfo.slice(0, 5).map((card, index) => {
              return (
                <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                  <BurgerCard
                    index={index}
                    cardImage={card.cardImage}
                    cardTitle={card.cardTitle}
                    cardSubTitle={card.cardSubTitle}
                    cardDescription={card.cardDescription}
                    cardPrice={card.cardPrice}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

const NewHomeScreen = () => {
  const [search, setSearch] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeroSection image={HeroSectionBgImage} />
      <div className='newHomeScreen '>
        <div className='container-85'>
          <div className='searchIconWrapper'>
            <Link onClick={showSidebar}>
              <img src={CartIconWhite} alt='CartIconWhite' />
            </Link>
          </div>
          <div className='cardDetailsSeachWrapper'>
            <div className='detailsCard'>
              <div className='detailsCardLogoWrapper'>
                <Link to='/'>
                  <img
                    src={BurgerritchLogo}
                    alt='BurgerritchLogo'
                    className='detailsCardLogo'
                  />
                </Link>
                <h2>burgrr*itch</h2>
              </div>
              <Row className='detailsCardRow'>
                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  className='cardDetailsCol'
                >
                  <ul className='m-0'>
                    <li>
                      <img src={LocationIcon} alt='LocationIcon' />
                      <span className='ur ml-2'>Karachi, Sindh.</span>
                    </li>
                    <li>
                      <img src={PhoneNumberIcon} alt='PhoneNumberIcon' />
                      <span className='ur ml-2'>023723728812</span>
                    </li>
                    <li>
                      <img src={TimingIcon} alt='TimingIcon' />
                      <span className='ur ml-2'>
                        Mon-Fri, 09:00 AM - 09:30 PM
                      </span>
                    </li>
                  </ul>
                </Col>
                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  className='cardDetailsCol'
                >
                  <ul className='m-0'>
                    <li>
                      <img src={RatingIcon} alt='RatingIcon' />
                      <span className='ur ml-2'>4.6</span>
                    </li>
                    <li>
                      <img src={PriceRangeIcon} alt='PriceRangeIcon' />
                      <span className='ur ml-2'>Min: $5 - Max: $500</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <Form autoComplete={false}>
              <Form.Group controlId='serach' className='newHomeScreenSearch'>
                <Form.Control
                  required
                  name='search'
                  type='text'
                  placeholder='Search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' className='searchButton'>
                  <img src={SearchIcon} alt='SearchIcon' />
                </button>
              </Form.Group>
            </Form>
          </div>
        </div>

        <Tabs
          defaultActiveKey='burgers'
          // transition={false}
          id='noanim-tab-example'
          className='container-85'
        >
          <Tab eventKey='burgers' title='Burgers'>
            <BurgersTab />
          </Tab>
          <Tab eventKey='pizzas' title='Pizzas'>
            <PizzasTab />
          </Tab>
          <Tab eventKey='appetizers' title='Appetizers'>
            <AppetizersTab />
          </Tab>
        </Tabs>
      </div>
      <Drawer showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
};

export default NewHomeScreen;
