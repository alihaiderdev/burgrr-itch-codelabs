import React, { useState } from 'react';
import '../../styles/screens/admin/checkout.css';

import { HiArrowLeft } from 'react-icons/hi';
import { Col, Form, Row } from 'react-bootstrap';
import { DatePicker } from 'antd';
import moment from 'moment';

import AdminHeader from '../../components/admin/AdminHeader';
import CheckoutCard from '../../components/admin/CheckoutCard';
import Icon from '../../components/Icon';
import Button from '../../components/formComponents/Button';

import MasterCardImage from '../../assets/images/mastercard.png';
import VisaCardImage from '../../assets/images/visa.png';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';

const CheckoutScreen = ({ history }) => {
  ScrollToTop();

  const [checkOutInfo, setCheckOutInfo] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const dateFormatList = 'DD/MM/YYYY';

  const { cardHolderName, cardNumber, expiry, cvv } = checkOutInfo;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCheckOutInfo({
      ...checkOutInfo,
      [name]: value,
    });
  };

  const handleDateChange = (date, dateString) => {
    console.log(`date : ${date}`);
    setCheckOutInfo({
      ...checkOutInfo,
      expiry: dateString,
    });
  };

  const checkOutInfoSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      cardHolderName,
      cardNumber,
      expiry,
      cvv,
    });

    setCheckOutInfo({
      cardHolderName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    });

    history.push('/admin/home');
  };

  return (
    <>
      <AdminHeader />

      <div className='checkoutScreen my-4'>
        <Icon
          style={{
            color: 'orange',
            cursor: 'pointer',
            width: '65%',
            margin: '0 auto 20px',
            fontSize: '20px',
            textDecoration: 'underline',
            paddingBotttom: '5px',
          }}
          onClick={() => history.push('/admin/pricing')}
        >
          <HiArrowLeft size='20px' />
          Back
        </Icon>
        <CheckoutCard
          style={{ width: '65%', margin: '0 auto 50px' }}
          title='Order Summary'
          price='PKR 4999'
          priceTitle='Paid Monthly'
          className='checkout_card'
        >
          <div className='sb'>
            <div className='left'>
              <h6 className='m-0 um'>Platinum</h6>
              <p className='gray m-0 ur'>Every 1 Month</p>
            </div>
            <div className='right'>
              <ul>
                <li className='um'>⦿ OrderNow Website</li>
                <li className='um'>⦿ Unlimited Business (In One City).</li>
                <li className='um'>⦿ No Transaction Fees.</li>
              </ul>
            </div>
          </div>
        </CheckoutCard>
        <CheckoutCard
          title='Payment Information'
          style={{ width: '65%', margin: '0 auto 50px' }}
        >
          <Form onSubmit={checkOutInfoSubmitHandler} width='100%'>
            <Form.Group controlId='cardHolderName'>
              <Form.Label>Card Holders Name</Form.Label>
              <Form.Control
                name='cardHolderName'
                type='text'
                value={cardHolderName}
                onChange={onChangeHandler}
                placeholder='i.e. Ali Mujtaba'
              />
            </Form.Group>
            <Row className='mb-4'>
              <Col md={6}>
                <Form.Group controlId='cardNumber'>
                  <div className='sb'>
                    <Form.Label>Card Number</Form.Label>
                    <div className='visaMasterCardImagesWrapper'>
                      <img src={VisaCardImage} alt='VisaCardImage' />
                      <img src={MasterCardImage} alt='MasterCardImage' />
                    </div>
                  </div>
                  <Form.Control
                    name='cardNumber'
                    type='tel'
                    value={cardNumber}
                    onChange={onChangeHandler}
                    placeholder='Card Number'
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId='expiry'>
                  <Form.Label>Expiry</Form.Label>
                  <DatePicker
                    style={{ width: '100%' }}
                    format={dateFormatList}
                    onChange={handleDateChange}
                    placeholder='MM/YY'
                  />
                </Form.Group>
              </Col>

              <Col md={2}>
                <Form.Group controlId='cvv'>
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    name='cvv'
                    type='text'
                    value={cvv}
                    onChange={onChangeHandler}
                    placeholder='XXX'
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className='checkOutScreenBtnWrapper'>
              <Button
                classname='ur'
                title='Next'
                type='submit'
                style={{
                  borderRadius: '5px',
                  padding: '10px 50px',
                  width: '20%',
                }}
              />
            </div>
          </Form>
        </CheckoutCard>
      </div>
    </>
  );
};

export default CheckoutScreen;
