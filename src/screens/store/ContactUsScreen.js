import React from 'react';
import '../../styles/screens/store/contactUs.css';

import { Col, Container, Row } from 'react-bootstrap';

import HeroSection from '../../components/store/HeroSection';

import HotelImage from '../../assets/images/aboutus-page-image.jpg';
import PhoneIcon from '../../assets/icons/Header/PhoneNumber.svg';

const ContactUsScreen = () => {
  return (
    <>
      <HeroSection
        title='CONTACT US'
        description='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Morbi purus mauris, vulputate quis felis nec,.'
        image='https://images.unsplash.com/photo-1612362426802-dcc0ccd25f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1606&q=80'
      />
      <div className='contactUsScreen'>
        <Container>
          <Row className='aic'>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <h3 className='um mb-4 black'>GET IN TOUCH</h3>
              <p className='ur mb-4'>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Ut arcu libero.
              </p>
              <ul>
                <li>
                  <img src={PhoneIcon} alt='PhoneIcon' />
                  <span className='ml-2 lgray'>+239823435733</span>
                </li>
                <li>
                  <img src={PhoneIcon} alt='PhoneIcon' />
                  <span className='ml-2 lgray'>someone@email.com</span>
                </li>
                <li>
                  <img src={PhoneIcon} alt='PhoneIcon' />
                  <span className='ml-2 lgray'>www.store.ordernow.pk</span>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className='hotelImageWrapper'>
                <img src={HotelImage} alt='HotelImage' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUsScreen;
