import React, { useState } from 'react';
import '../../styles/screens/store/newHome.css';
import '../../styles/screens/admin/adminhome.css';

import { Col, Row, Tabs, Tab, Form } from 'react-bootstrap';
import { BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import HeroSection from '../../components/store/HeroSection';
import BurgerCard from '../../components/admin/BurgerCard';
import StoreSettingsDrawer from '../../components/admin/StoreSettingsDrawer';
import AdminHeader from '../../components/admin/AdminHeader';
import AddDiscountModal from '../../components/admin/AddDiscountModal';

import BurgerritchLogo from '../../assets/icons/BurgerritchLogo.png';
import HeroSectionBgImage from '../../assets/images/header-bg.png';
import LocationIcon from '../../assets/icons/Header/Location.svg';
import PhoneNumberIcon from '../../assets/icons/Header/PhoneNumber.svg';
import PriceRangeIcon from '../../assets/icons/Header/PriceRange.svg';
import RatingIcon from '../../assets/icons/Header/Rating.svg';
import SearchIcon from '../../assets/icons/Header/SearchIcon.svg';
import TimingIcon from '../../assets/icons/Header/Timings.svg';
import Burger from '../../assets/images/product.png';
import burgarCardsInfo from '../../data/burgarCardsInfo';
import useWindowResize from '../../customHooks/useWindowResize';
import EditProductIcon from '../../assets/admin-icons-images/Icons/Edit 1.svg';
import AddNewProductIcon from '../../assets/admin-icons-images/Icons/add product.svg';

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

const AdminHomeScreen = () => {
  const [addDiscountModal, setAddDiscountModal] = useState(false);
  const handleOpenAddDiscountModal = () => setAddDiscountModal(true);
  const handleCloseAddDiscountModal = () => setAddDiscountModal(false);

  const AddNewProductButton = () => {
    return (
      <div className='container-85'>
        <div
          className='addNewProductButton'
          onClick={() => handleOpenAddDiscountModal()}
        >
          <img
            className='mb-2'
            src={AddNewProductIcon}
            alt='AddNewProductIcon'
          />
          <p className='gray um'>Add New Product</p>
        </div>
      </div>
    );
  };

  const [search, setSearch] = useState('');

  const [toggleDrawer, setToggleDrawer] = useState({
    visible: false,
    placement: 'left',
  });
  const { visible, placement } = toggleDrawer;

  const showDrawer = () => {
    setToggleDrawer({ ...toggleDrawer, visible: true });
  };

  const closeDrawer = () => {
    setToggleDrawer({ ...toggleDrawer, visible: false });
  };

  const [height, width] = useWindowResize();

  return (
    <>
      <AdminHeader />
      <HeroSection image={HeroSectionBgImage} />
      <div className='adminHomeScreen'>
        <div className='container-85'>
          <button className='storeSettingBtn' onClick={() => showDrawer()}>
            <BsGear color='white' size='30px' />
          </button>
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
              <button
                className='editProductBtn'
                // onClick={() => handleOpenAddDiscountModal()}
                onClick={() => showDrawer()}
              >
                <img src={EditProductIcon} alt='EditProductIcon' />
              </button>
            </div>
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
            <AddNewProductButton />
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
      <StoreSettingsDrawer
        closeDrawer={closeDrawer}
        visible={visible}
        placement={placement}
      />
      <AddDiscountModal
        handleCloseAddDiscountModal={handleCloseAddDiscountModal}
        addDiscountModal={addDiscountModal}
      />
    </>
  );
};

export default AdminHomeScreen;
