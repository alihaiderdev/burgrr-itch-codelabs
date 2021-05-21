import React, { useState } from 'react';
import '../../styles/screens/store/newHome.css';

import { Col, Row, Tabs, Tab, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BurgerCard from '../../components/store/BurgerCard';
import HeroSection from '../../components/store/HeroSection';
import SidebarDrawer from '../../components/store/SidebarDrawer';
import burgarCardsInfo from '../../data/burgarCardsInfo';

import BurgerritchLogo from '../../assets/icons/BurgerritchLogo.png';
import HeroSectionBgImage from '../../assets/images/header-bg.png';
import LocationIcon from '../../assets/icons/Header/Location.svg';
import PhoneNumberIcon from '../../assets/icons/Header/PhoneNumber.svg';
import PriceRangeIcon from '../../assets/icons/Header/PriceRange.svg';
import CartIconWhite from '../../assets/icons/Header/CartIconWhite.svg';
import RatingIcon from '../../assets/icons/Header/Rating.svg';
import SearchIcon from '../../assets/icons/Header/SearchIcon.svg';
import TimingIcon from '../../assets/icons/Header/Timings.svg';
import Burger from '../../assets/images/product.png';

const allInOneTab = (
  innerTabImg,
  innerTabTitle,
  innerTabPrice,
  cardLength = 12
) => {
  return (
    <div className='mt-4'>
      {innerTabImg && innerTabTitle && innerTabPrice && (
        <div className='tabInfo container-85'>
          <div className='tabImg'>
            <img src={innerTabImg} alt={`${innerTabTitle}-Tab-Image`} />
          </div>
          <div>
            <h3 className='black m-0'>{innerTabTitle}</h3>
            <p className='m-0'>{innerTabPrice}</p>
          </div>
        </div>
      )}
      <div className='container-85'>
        <Row>
          {burgarCardsInfo &&
            burgarCardsInfo.slice(0, cardLength).map((card, index) => {
              return (
                <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                  <BurgerCard
                    index={index}
                    cardImage={card.cardImage}
                    cardTitle={card.cardTitle}
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
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  const [toggleDrawer, setToggleDrawer] = useState({
    visible: false,
    placement: 'right',
  });
  const { visible, placement } = toggleDrawer;

  const showDrawer = () => {
    setToggleDrawer({ ...toggleDrawer, visible: true });
  };

  const closeDrawer = () => {
    setToggleDrawer({ ...toggleDrawer, visible: false });
  };

  return (
    <>
      <HeroSection image={HeroSectionBgImage} />
      <div className='newHomeScreen'>
        <div className='container-85 detailsCardWrapper'>
          <div className='row'>
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
              <div className='detailsCardRow'>
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
              </div>
            </div>
          </div>
        </div>
        <div className='container-85'>
          <div className='searchIconWrapper'>
            <button onClick={showDrawer}>
              <img src={CartIconWhite} alt='CartIconWhite' />
            </button>
          </div>
          <div className='cardDetailsSeachWrapper'>
            <Form>
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
          defaultActiveKey='all'
          id='noanim-tab-example'
          className='container-85'
        >
          <Tab eventKey='all' title='All'>
            {allInOneTab(Burger, 'Burgers', '$$$', 6)}
            {allInOneTab(Burger, 'Pizzas', '$$$', 8)}
            {allInOneTab(Burger, 'Beverages', '$$$', 11)}
            {allInOneTab(Burger, 'Appetizers', '$$$', 5)}
          </Tab>
          <Tab eventKey='burgers' title='Burgers'>
            {allInOneTab(null, null, null, 6)}
          </Tab>
          <Tab eventKey='pizzas' title='Pizzas'>
            {allInOneTab(null, null, null, 8)}
          </Tab>
          <Tab eventKey='beverages' title='Beverages'>
            {allInOneTab(null, null, null, 11)}
          </Tab>
          <Tab eventKey='appetizers' title='Appetizers'>
            {allInOneTab(null, null, null, 5)}
          </Tab>
        </Tabs>
      </div>
      <SidebarDrawer
        closeDrawer={closeDrawer}
        visible={visible}
        placement={placement}
      />
    </>
  );
};

export default NewHomeScreen;
