import React from 'react';
import '../../styles/screens/admin/getStarted.css';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AdminHeader from '../../components/admin/AdminHeader';
import LandingPageImage from '../../assets/admin-icons-images/LandingPageIllustration.svg';
import Button from '../../components/formComponents/Button';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';

const GetStartedScreen = ({ history }) => {
  ScrollToTop();

  return (
    <>
      <AdminHeader />
      <div className='container-85'>
        <Row className='getStartedScreen'>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='content'>
              <h1 className='mb-4'>
                Looking to Boost Your <span className='orange'>Business</span>?
              </h1>
              <p className='lgray um'>
                The All-in-One Online Ordering & Logistics Platform that your
                users & team will love.
              </p>
              <Button
                onClick={() => {
                  history.push('/admin/signup');
                }}
                type='button'
                title='Get Started'
                style={{
                  borderRadius: '35px',
                  boxShadow: '0px 15px 25px #00000029',
                  padding: '20px 75px',
                }}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='illustration'>
              <img src={LandingPageImage} alt='LandingPageImage' />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GetStartedScreen;
