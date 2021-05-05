import React, { useState, useRef, useEffect } from 'react';
import '../styles/screens/orderPlace.css';
import { Col, Row, Form } from 'react-bootstrap';
import CartScreenHeader from '../components/CartScreenHeader';
// import PersonalInfoForm from '../components/PersonalInfoForm';
// import PaymentMethodForm from '../components/PaymentMethodForm';
import EmailAddressIcon from '../assets/icons/Form Icons/EmailAddress.svg';
import DeliveryDateTimeIcon from '../assets/icons/Form Icons/DeliveryDateTime.svg';
import ContactNumberIcon from '../assets/icons/Form Icons/ContactNumber.svg';
import DeliveryAddressIcon from '../assets/icons/Form Icons/DeliveryAddress.svg';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';

import { countryCode } from '../data/countryList';
import Button from '../components/Button';

console.log({ countryCode });

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
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    email: '',
    phoneCode: '+92',
    contactNumber: '',
    deliveryAddress: '',
    deliveryDateTime: '',
    message: '',
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const {
    name,
    email,
    phoneCode,
    contactNumber,
    deliveryAddress,
    deliveryDateTime,
    message,
    cardHolderName,
    cardNumber,
    expiry,
    cvc,
  } = orderInfo;

  const onChangeHandler = (e) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  const orderSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phoneCode,
      contactNumber,
      deliveryAddress,
      deliveryDateTime,
      message,
      paymentMethod,
      cardHolderName,
      cardNumber,
      expiry,
      cvc,
    });
  };

  const selectPhoneCodeRef = useRef();
  const focusPhoneInputText = () => selectPhoneCodeRef.current.focus();

  return (
    <>
      <CartScreenHeader />
      <div className='orderPlaceScreen container-85'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='yourInfo_paymentMethodWrapper'>
              <Form autoComplete onSubmit={orderSubmitHandler}>
                <h3 className='um black mb-4'>Your Details</h3>
                <Form.Group controlId='name'>
                  <Form.Control
                    required
                    name='name'
                    type='text'
                    value={name}
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Control
                    required
                    name='email'
                    type='email'
                    value={email}
                    onChange={onChangeHandler}
                  />
                  <img
                    className='form-icon'
                    src={EmailAddressIcon}
                    alt='EmailAddressIcon'
                  />
                </Form.Group>
                <Form.Group controlId='contactNumber'>
                  <BsChevronDown className='countryCodeDropdownArrow' />
                  <Form.Control
                    className='countryCodeList'
                    as='select'
                    size='sm'
                    custom
                    value={phoneCode}
                    onChange={onChangeHandler}
                    name='phoneCode'
                    // onClick={focusPhoneInputText}
                  >
                    {countryCode &&
                      countryCode.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control
                    required
                    // ref={selectPhoneCodeRef}
                    name='contactNumber'
                    type='tel'
                    value={contactNumber}
                    onChange={onChangeHandler}
                    className='contactNumber'
                  />
                  <img
                    className='form-icon'
                    src={ContactNumberIcon}
                    alt='ContactNumberIcon'
                  />
                </Form.Group>
                <Form.Group controlId='address'>
                  <Form.Control
                    required
                    name='deliveryAddress'
                    type='tel'
                    value={deliveryAddress}
                    onChange={onChangeHandler}
                  />
                  <img
                    className='form-icon'
                    src={DeliveryAddressIcon}
                    alt='DeliveryAddressIcon'
                  />
                </Form.Group>
                <Form.Group controlId='deliveryDateTime'>
                  <Form.Label>Delivery Time</Form.Label>
                  <Form.Control
                    required
                    name='deliveryDateTime'
                    type='datetime-local'
                    value={deliveryDateTime}
                    onChange={onChangeHandler}
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
                  />
                </Form.Group>
                <h3 className='um black mb-4'>Payment Method</h3>
                <div className='onChangeRadioBtnValue'>
                  <Form.Check
                    className='modalRadioButtonLabel mb-4'
                    type='radio'
                    checked={paymentMethod === 'Credit Card'}
                    name={paymentMethod}
                    value='Credit Card'
                    label='Credit Card'
                    id='Credit Card'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <Form.Group controlId='cardHolderName'>
                    <Form.Control
                      required
                      name='cardHolderName'
                      type='text'
                      value={cardHolderName}
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group controlId='cardNumber'>
                    <Form.Control
                      required
                      name='cardNumber'
                      type='tel'
                      value={cardNumber}
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId='expiry'>
                      <Form.Control
                        required
                        name='expiry'
                        type='date'
                        value={expiry}
                        onChange={onChangeHandler}
                      />
                      <div className='calenderIcon1'>
                        <img
                          src={DeliveryDateTimeIcon}
                          alt='DeliveryDateTimeIcon'
                        />
                      </div>
                    </Form.Group>

                    <Form.Group as={Col} controlId='cvc'>
                      <Form.Control
                        required
                        name='cvc'
                        type='number'
                        value={cvc}
                        onChange={onChangeHandler}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Check
                    className='modalRadioButtonLabel mb-3'
                    type='radio'
                    checked={paymentMethod === 'JazzCash'}
                    value='JazzCash'
                    label='JazzCash'
                    id='JazzCash'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Form.Check
                    className='modalRadioButtonLabel mb-3'
                    type='radio'
                    checked={paymentMethod === 'Easypaisa'}
                    value='Easypaisa'
                    label='Easypaisa'
                    id='Easypaisa'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Form.Check
                    className='modalRadioButtonLabel mb-4'
                    type='radio'
                    checked={paymentMethod === 'Cash-on-delivery'}
                    value='Cash-on-delivery'
                    label='Cash-on-delivery'
                    id='Cash-on-delivery'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </div>
              </Form>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
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
                  />
                  <button onClick={''} className='ur'>
                    Apply
                  </button>
                </Form.Group>
                <div className='price'>
                  <p className='sb'>
                    <span className='ur'>Subtotal</span>
                    <span className='ur'>PKR 1215</span>
                  </p>
                  <p className='sb'>
                    <span className='ur'>Discount</span>
                    <span className='ur'>PKR -215</span>
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
                  <button onClick={orderSubmitHandler}>
                    <AiOutlineCheck />
                  </button>
                </div>
              </div>
              <Button
                btnTitle='button 1'
                backgroundColor='transparent'
                color='orange'
                width='200px'
                margin='30px 0'
                onClick={console.log('button 1')}
              />
              <Button backgroundColor='#F46B0D'>
                <AiOutlineCheck />
              </Button>
              <Button btnTitle='button 3' backgroundColor='#F46B0D' />
              <Button btnTitle='button 4' backgroundColor='#F46B0D' />
              <Button btnTitle='button 5' backgroundColor='#F46B0D' />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrderPlaceScreen;
