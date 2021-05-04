import React, { useState } from 'react';
import '../styles/screens/orderPlace.css';
import { Col, Row, Form } from 'react-bootstrap';
import CartScreenHeader from '../components/CartScreenHeader';
// import PersonalInfoForm from '../components/PersonalInfoForm';
// import PaymentMethodForm from '../components/PaymentMethodForm';
import EmailAddressIcon from '../assets/icons/Form Icons/EmailAddress.svg';
import ContactNumberIcon from '../assets/icons/Form Icons/ContactNumber.svg';
import DeliveryAddressIcon from '../assets/icons/Form Icons/DeliveryAddress.svg';
import { AiOutlineCheck } from 'react-icons/ai';

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
    contactNumber: '',
    deliveryAddress: '',
    deliveryDateTime: '',
    date: '',
    message: '',
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    paymentMethod: ['Credit Card', 'Jazzcash', 'Easypaisa', 'Cash-on-delivery'],
  });
  const {
    name,
    email,
    contactNumber,
    deliveryAddress,
    deliveryDateTime,
    // date,
    message,
    cardHolderName,
    cardNumber,
    expiry,
    cvc,
    paymentMethod,
  } = orderInfo;

  const [creaditCard, jazzCash, easyPaisa, cashOnDelivery] = paymentMethod;

  const onChangeHandler = (e) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  const orderSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      contactNumber,
      deliveryAddress,
      deliveryDateTime,
      //   date,
      message,
      cardHolderName,
      cardNumber,
      expiry,
      cvc,
    });
  };

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
                    placeholder='Your Name'
                    value={name}
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Control
                    required
                    name='email'
                    type='email'
                    placeholder='Email Address'
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
                  <Form.Control
                    required
                    name='contactNumber'
                    type='tel'
                    placeholder='Contact Number'
                    value={contactNumber}
                    onChange={onChangeHandler}
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
                    placeholder='Delivery Address'
                    value={deliveryAddress}
                    onChange={onChangeHandler}
                  />
                  <img
                    className='form-icon'
                    src={DeliveryAddressIcon}
                    alt='DeliveryAddressIcon'
                  />
                </Form.Group>
                <Form.Group controlId='date'>
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
                    placeholder='Message for Rider'
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
                    name='payment-method'
                    value={creaditCard}
                    label={creaditCard}
                    id={creaditCard}
                    selected
                  />

                  <Form.Group controlId='cardHolderName'>
                    <Form.Control
                      required
                      name='cardHolderName'
                      type='text'
                      placeholder='Card Holders Name'
                      value={cardHolderName}
                      onChange={onChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group controlId='cardNumber'>
                    <Form.Control
                      required
                      name='cardNumber'
                      type='tel'
                      placeholder='Card Number'
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
                        placeholder='Expiry'
                        value={expiry}
                        onChange={onChangeHandler}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId='cvc'>
                      <Form.Control
                        required
                        name='cvc'
                        type='number'
                        placeholder='CVC'
                        value={cvc}
                        onChange={onChangeHandler}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Check
                    className='modalRadioButtonLabel mb-3'
                    type='radio'
                    name='payment-method'
                    value={jazzCash}
                    label={jazzCash}
                    id={jazzCash}
                  />
                  <Form.Check
                    className='modalRadioButtonLabel mb-3'
                    type='radio'
                    name='payment-method'
                    value={easyPaisa}
                    label={easyPaisa}
                    id={easyPaisa}
                  />
                  <Form.Check
                    className='modalRadioButtonLabel mb-4'
                    type='radio'
                    name='payment-method'
                    value={cashOnDelivery}
                    label={cashOnDelivery}
                    id={cashOnDelivery}
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
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrderPlaceScreen;
