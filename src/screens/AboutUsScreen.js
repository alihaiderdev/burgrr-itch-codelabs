import React from 'react';
import '../styles/screens/aboutUs.css';
import HotelImage from '../assets/images/aboutus-page-image.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import HeroSectionImage from '../assets/images/hero-section-image.jpg';

const AboutUsScreen = () => {
  return (
    <>
      <HeroSection
        title='ABOUT US'
        description='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Morbi purus mauris, vulputate quis felis nec,.'
        image='https://images.unsplash.com/photo-1612362426802-dcc0ccd25f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1606&q=80'
      />
      <div className='aboutUsScreen'>
        <Container>
          <Row className='aic'>
            <Col xs={12} sm={12} md={6} lg={6} xl={7}>
              <div className='hotelImageWrapper'>
                <img src={HotelImage} alt='HotelImage' />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={5}>
              <h3 className='um mb-4 black'>History</h3>
              <p className='ur m-0'>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Morbi
                purus mauris, vulputate quis felis nec, fermentum aliquam orci. Quisque ornare
                iaculis placerat. Class aptent taciti sociosqu ad.Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero,
                pulvinar non massa sed, accumsan scelerisque dui. Morbi purus mauris, vulputate quis
                felis nec, fermentum aliquam orci. Quisque ornare iaculis placerat. Class aptent
                taciti sociosqu ad.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUsScreen;
