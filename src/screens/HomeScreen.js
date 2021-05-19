import React, {useState} from 'react';
import '../styles/screens/home.css';
import {Col, Row, Form} from 'react-bootstrap';
import Card from '../components/Card';
import HeroSection from '../components/HeroSection';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <HeroSection image='https://images.unsplash.com/photo-1612362426802-dcc0ccd25f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1606&q=80' />
      <div className='homeScreen'>
        <div className='container-85'>
          <div className='dropdownAndSearchWrapper sb mb-4'>
            <form action='' className='search aic'>
              <input
                className='searchInput ur'
                type='text'
                name='search'
                value={search}
                onChange={() => setSearch()}
              />
              <button className='white bg-orange b-none um'>Search</button>
            </form>

            <Form>
              <Form.Group controlId='price' className='priceDropdown'>
                <Form.Control as='select' className='homeScreen-priceDropdown'>
                  <option value='low-to-high'>Price : Low to High</option>
                  <option value='high-to-low'>Price : High to Low</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
