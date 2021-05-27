import React, { useState, useRef, useEffect } from 'react';
import '../../styles/screens/store/orderPlace.css';

import { Col, Row, Form } from 'react-bootstrap';
import { AiOutlineArrowRight, AiOutlineCheck } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { Radio, Input, Space, Select, DatePicker, TimePicker } from 'antd';
import { BiEnvelope, BiCurrentLocation } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import { countryCodeList } from '../../data/countryCodeList';
import CartScreenHeader from '../../components/store/CartScreenHeader';
import InputField from '../../components/formComponents/InputField';

// import EmailAddressIcon from '../../assets/icons/Form Icons/EmailAddress.svg';
// import DeliveryDateTimeIcon from '../../assets/icons/Form Icons/DeliveryDateTime.svg';
// import ContactNumberIcon from '../../assets/icons/Form Icons/ContactNumber.svg';
// import DeliveryAddressIcon from '../../assets/icons/Form Icons/DeliveryAddress.svg';
import MasterCardImage from '../../assets/images/mastercard.png';
import VisaCardImage from '../../assets/images/visa.png';
import Button from '../../components/formComponents/Button';

const { Option } = Select;

const OrderItem = (qty, price, itemName, addOns = 'Chicken Crispy Burger') => {
  return (
    <div className='orderItem'>
      <div className='orderItemDesc'>
        <span className='qty orange mr-3'>{qty}x</span>
        <div className='description'>
          <h6 className='name m-0'>{itemName}</h6>
          <span className='ur'>With</span>
          <div className='orderItem_addOns ur'>{addOns}</div>
        </div>
      </div>
      <h6 className='price orange'>PKR {price}</h6>
    </div>
  );
};

const OrderPlaceScreen = () => {
  // console.log(`selected :  ${value}`);

  const [orderInfo, setOrderInfo] = useState({
    name: '',
    email: '',
    countryCode: '+92',
    contactNumber: '',
    phoneNumber: '',
    deliveryAddress: '',
    deliveryDateTime: '',
    message: '',
    paymentMethod: 'Credit Card',
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [couponCode, setCouponCode] = useState('');

  const {
    name,
    email,
    countryCode,
    contactNumber,
    phoneNumber,
    deliveryAddress,
    deliveryDateTime,
    message,
    paymentMethod,
    cardHolderName,
    cardNumber,
    expiry,
    cvv,
  } = orderInfo;

  const dateFormatList = 'DD/MM/YYYY';
  const format = 'h:mm:ss A';

  const onChangeHandler = (e) => {
    setOrderInfo({
      ...orderInfo,
      [e.target.name]: e.target.value,
      phoneNumber: `${countryCode} - ${contactNumber}`,
    });
  };

  const handleTimeChange = (time, timeString) => {
    console.log(`time : ${time}`);
    setOrderInfo({
      ...orderInfo,
      deliveryDateTime: timeString,
    });
  };

  const handleDateChange = (date, dateString) => {
    console.log(`date : ${date}`);
    setOrderInfo({
      ...orderInfo,
      expiry: dateString,
    });
  };

  const handleCountryCodeChange = (value) => {
    setOrderInfo({
      ...orderInfo,
      countryCode: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setOrderInfo({
      ...orderInfo,
      paymentMethod: e.target.value,
    });
  };

  const handleCouponCodeChange = () => {
    console.log(`Coupon Code : ${couponCode}`);
    setCouponCode('');
  };

  const orderSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      countryCode,
      contactNumber,
      phoneNumber,
      deliveryAddress,
      deliveryDateTime,
      message,
      paymentMethod,
      cardHolderName,
      cardNumber,
      expiry,
      cvv,
    });

    setOrderInfo({
      name: '',
      email: '',
      countryCode: '+92',
      contactNumber: '',
      phoneNumber: '',
      deliveryAddress: '',
      deliveryDateTime: '',
      message: '',
      paymentMethod: 'Credit Card',
      cardHolderName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    });
  };

  // const selectPhoneCodeRef = useRef();
  // const focusPhoneInputText = () => selectPhoneCodeRef.current.focus();

  return (
    <>
      <CartScreenHeader />
      <div className='orderPlaceScreen container-85'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className='yourInfo_paymentMethodWrapper'>
              <Form onSubmit={orderSubmitHandler}>
                <h3 className='um black mb-4'>Your Details</h3>
                <Form.Group controlId='name'>
                  <Form.Control
                    required
                    name='name'
                    type='text'
                    value={name}
                    onChange={onChangeHandler}
                    placeholder='Your Name'
                  />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Control
                    required
                    name='email'
                    type='email'
                    value={email}
                    onChange={onChangeHandler}
                    placeholder='Email Address'
                    className='icon-input'
                  />
                  <BiEnvelope className='form-icon' />
                </Form.Group>
                <Form.Group controlId='contactNumber'>
                  <Select
                    defaultValue={countryCode}
                    style={{ width: 'auto' }}
                    onChange={handleCountryCodeChange}
                    className='countryCodeList'
                  >
                    {countryCodeList &&
                      countryCodeList.map((c, i) => (
                        <Option key={i} value={c}>
                          {c}
                        </Option>
                      ))}
                  </Select>
                  <Form.Control
                    required
                    // ref={selectPhoneCodeRef}
                    name='contactNumber'
                    type='tel'
                    value={contactNumber}
                    onChange={onChangeHandler}
                    className='contactNumber icon-input'
                    placeholder='Contact Number'
                  />
                  <FiPhone className='form-icon' />
                </Form.Group>
                <Form.Group controlId='address'>
                  <Form.Control
                    required
                    name='deliveryAddress'
                    type='tel'
                    value={deliveryAddress}
                    onChange={onChangeHandler}
                    className='icon-input'
                    placeholder='Delivery Address'
                  />
                  <BiCurrentLocation className='form-icon' />
                </Form.Group>
                <Form.Group controlId='deliveryDateTime'>
                  <Form.Label>Delivery Time</Form.Label>
                  <TimePicker
                    defaultValue={moment('12:00:00', format)}
                    format={format}
                    onChange={handleTimeChange}
                    style={{ width: '100%' }}
                  />
                </Form.Group>
                <Form.Group controlId='message'>
                  <Form.Control
                    required
                    name='message'
                    as='textarea'
                    rows={5}
                    value={message}
                    onChange={onChangeHandler}
                    placeholder='Message for Rider'
                  />
                </Form.Group>
                <h3 className='um black mb-4'>Payment Method</h3>

                <Radio.Group
                  onChange={handlePaymentMethodChange}
                  defaultValue={paymentMethod}
                >
                  <Space direction='vertical'>
                    <div className='creditCardWrapper sb'>
                      <Radio
                        value={'Credit Card'}
                        name='Credit Card'
                        checked={paymentMethod === 'Credit Card'}
                      >
                        Credit Card
                      </Radio>

                      <div className='visaMasterCardImagesWrapper'>
                        <img src={VisaCardImage} alt='VisaCardImage' />
                        <img src={MasterCardImage} alt='MasterCardImage' />
                      </div>
                    </div>

                    <Form.Group controlId='cardHolderName'>
                      <Form.Control
                        required
                        name='cardHolderName'
                        type='text'
                        value={cardHolderName}
                        onChange={onChangeHandler}
                        placeholder='Card Holder Name'
                      />
                    </Form.Group>
                    <Form.Group controlId='cardNumber'>
                      <Form.Control
                        required
                        name='cardNumber'
                        type='tel'
                        value={cardNumber}
                        onChange={onChangeHandler}
                        placeholder='Card Number'
                      />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} controlId='expiry'>
                        <DatePicker
                          style={{ width: '100%' }}
                          defaultValue={moment('01/01/2015', dateFormatList)}
                          format={dateFormatList}
                          onChange={handleDateChange}
                        />
                        {/* <Form.Control
                          required
                          name='expiry'
                          type='date'
                          value={expiry}
                          onChange={onChangeHandler}
                        /> */}
                      </Form.Group>
                      <Form.Group as={Col} controlId='cvv'>
                        <Form.Control
                          required
                          name='cvv'
                          type='text'
                          value={cvv}
                          onChange={onChangeHandler}
                          placeholder='CVV'
                        />
                      </Form.Group>
                    </Form.Row>

                    <Radio
                      value={'JazzCash'}
                      checked={paymentMethod === 'JazzCash'}
                      name={'JazzCash'}
                    >
                      JazzCash
                    </Radio>
                    <Radio
                      value={'Easypaisa'}
                      name={'Easypaisa'}
                      checked={paymentMethod === 'Easypaisa'}
                    >
                      Easypaisa
                    </Radio>
                    <Radio
                      value={'Cash-on-delivery'}
                      name='Cash-on-delivery'
                      checked={paymentMethod === 'Cash-on-delivery'}
                    >
                      Cash-on-delivery
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className='yourOrderWrapper'>
              <h3 className='um black mb-4'>Your Order</h3>
              {OrderItem(1, 283, 'Big Mac')}
              {OrderItem(2, 649, 'Chicken Crispy Burger')}
              {OrderItem(5, 283, 'Chicken Nuggets')}
              <div className='pricesContainer'>
                <Form.Group controlId='coupon' className='my-4 coupon'>
                  <Form.Control
                    type='text'
                    placeholder='Discount Coupon (if any)'
                    name='coupon'
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button
                    title='Apply'
                    btnType='outline'
                    onClick={handleCouponCodeChange}
                    style={{
                      borderRadius: '5px',
                      padding: '5px 20px',
                      marginLeft: '10px',
                    }}
                  />
                </Form.Group>
                <div className='price'>
                  <p className='sb'>
                    <span className='ur'>Subtotal</span>
                    <span className='ur'>PKR 1215</span>
                  </p>
                  <p className='sb'>
                    <span className='ur'>Discount</span>
                    <span className='ur'>PKR 215</span>
                  </p>
                  <p className='sb'>
                    <span className='ur'>Delivery Charges</span>
                    <span className='ur'>PKR 50</span>
                  </p>
                  <p className='sb'>
                    <span className='ur'>Total</span>
                    <h5 className='orange um'>PKR 1050</h5>
                  </p>
                </div>
                <div className='yourOrderBtnContainer'>
                  <Button
                    className='tickIconBtn'
                    onClick={orderSubmitHandler}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '5px',
                      width: '65%',
                      textAlign: 'center',
                    }}
                    icon={
                      <AiOutlineArrowRight
                        color='white'
                        size='25px'
                        className='btn-icon'
                      />
                    }
                  />
                  <Button
                    // className='nextBtn'
                    style={{ display: 'none' }}
                    onClick={orderSubmitHandler}
                    btnTitle='Next'
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrderPlaceScreen;
