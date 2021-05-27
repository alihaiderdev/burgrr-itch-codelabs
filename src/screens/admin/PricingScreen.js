import React from 'react';
import '../../styles/screens/admin/pricing.css';

import { Col, Row } from 'react-bootstrap';

import AdminHeader from '../../components/admin/AdminHeader';
import PricingCard from '../../components/admin/PricingCard';

const PricingScreen = () => {
  const platinumCardFeatures = [
    'OrderNow Website',
    'Unlimited Business (One Country)',
    'One Store or Multi-Store',
    'Ordering Apps for iOs & Android',
    'Entirely White Label Solution',
    'Delivery Dashboard & Delivery App',
    'Unlimited Drivers',
    'Business App (iOS & Android)',
    'Open source for front-end and full API access',
  ];
  const diamondCardFeatures = [
    'OrderNow React Website',
    'Unlimited Business (One Country)',
    'One Store or Multi-Store',
    'Ordering Apps for iOs & Android',
    'Entirely White Label Solution',
    'Delivery Dashboard & Delivery App',
    'Unlimited Drivers',
    'Business App (iOS & Android)',
    'Open source for front-end and full API access',
  ];
  const customCardFeatures = [
    'We will make a custom solutions according to your business requirements.',
  ];
  return (
    <>
      <AdminHeader />
      <div className='pricingScreen container-85'>
        <div>
          <h2>Pricing Plan</h2>
          <p className='gray ur m-0'>Choose your pricing plan</p>
        </div>
        <Row>
          <Col sm={12} md={4}>
            <PricingCard
              title='Platinum'
              price='PKR 4999/ month'
              features={platinumCardFeatures}
              btnTitle='Next'
            />
          </Col>
          <Col sm={12} md={4}>
            <PricingCard
              mostValued='Most Valued'
              title='Diamond'
              price='PKR 9999/ month'
              features={diamondCardFeatures}
              btnTitle='Next'
            />
          </Col>
          <Col sm={12} md={4}>
            <PricingCard
              title='Custom'
              price='Come Inbox'
              features={customCardFeatures}
              btnTitle='Next'
              message='We are always there for you…! :)'
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PricingScreen;
