import React, {useState, useRef, useEffect} from 'react';
import '../styles/screens/orderPlace.css';
import {Col, Row, Form} from 'react-bootstrap';
import {AiOutlineCheck} from 'react-icons/ai';
import {BsChevronDown} from 'react-icons/bs';
import {countryCode} from '../data/countryCodeList';
import {Radio, Input, Space} from 'antd';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import CartScreenHeader from '../components/CartScreenHeader';
import EmailAddressIcon from '../assets/icons/Form Icons/EmailAddress.svg';
import DeliveryDateTimeIcon from '../assets/icons/Form Icons/DeliveryDateTime.svg';
import ContactNumberIcon from '../assets/icons/Form Icons/ContactNumber.svg';
import DeliveryAddressIcon from '../assets/icons/Form Icons/DeliveryAddress.svg';

import TextField from '../components/TextField';

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
  // const [btnHoverAnimation, setBtnHoverAnimation] = useState('');
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    email: '',
    phoneCode: '+92',
    contactNumber: '',
    deliveryAddress: '',
    deliveryDateTime: '',
    message: '',
    paymentMethod: 'Credit Card',
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  // const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const {
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
    cvv,
  } = orderInfo;

  const onChangeHandler = (e) => {
    console.log('radio checked', e.target.value);
    setOrderInfo({...orderInfo, [e.target.name]: e.target.value});
  };

  // onChange = (e) => {
  //   console.log('radio checked', e.target.value);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

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
      cvv,
    });
  };

  // const selectPhoneCodeRef = useRef();
  // const focusPhoneInputText = () => selectPhoneCodeRef.current.focus();

  return (
    <>
      <CartScreenHeader />
      <div className='orderPlaceScreen container-85'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
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
                  {/* <Form.Check
                    className='modalRadioButtonLabel mb-4'
                    type='radio'
                    checked={paymentMethod === 'Credit Card'}
                    name={paymentMethod}
                    value='Credit Card'
                    label='Credit Card'
                    id='Credit Card'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  /> */}

                  <Radio.Group
                    onChange={onChangeHandler}
                    defaultValue={paymentMethod}
                  >
                    <Space direction='vertical'>
                      <Radio
                        value={'Credit Card'}
                        name='Credit Card'
                        checked={paymentMethod === 'Credit Card'}
                      >
                        Credit Card
                      </Radio>

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
                        <Form.Group as={Col} controlId='cvv'>
                          <Form.Control
                            required
                            name='cvv'
                            type='number'
                            value={cvv}
                            onChange={onChangeHandler}
                          />
                        </Form.Group>
                      </Form.Row>

                      <Radio
                        value={'JazzCash'}
                        name='JazzCash'
                        checked={paymentMethod === 'JazzCash'}
                      >
                        JazzCash
                      </Radio>
                      <Radio
                        value={'Easypaisa'}
                        name='Easypaisa'
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
                  <button onClick={() => {}} className='ur'>
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
                  <button className='tickIconBtn' onClick={orderSubmitHandler}>
                    <AiOutlineCheck />
                  </button>
                  <button className='nextBtn' onClick={orderSubmitHandler}>
                    Next
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

// const formik = useFormik({
//   initialValues: {
//     name: '',
//     email: '',
//     contactNumber: '',
//     deliveryAddress: '',
//     deliveryDateTime: '',
//     message: '',
//     cardHolderName: '',
//     cardNumber: '',
//     expiry: '',
//     cvv: '',
//   },

//   validationSchema: Yup.object({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string()
//       .email('Email is invalid')
//       .required('Email is required'),
//     contactNumber: Yup.number()
//       .min(11, 'Contact number must be 11 digits or less')
//       .required('Contact number is required'),
//     deliveryAddress: Yup.string().required('Delivery Address is required'),
//     deliveryDateTime: Yup.string().required(
//       'Delivery date and time is required'
//     ),
//     message: Yup.string().required('Message is required'),
//     cardHolderName: Yup.string().required('Card holder name is required'),
//     cardNumber: Yup.number()
//       .min(19, 'Card number must be 19 digits or less')
//       .max(8, 'Card number must be 8 digits or more')
//       .required('Card number is required'),
//     expiry: Yup.date().required('Expiry date is required'),
//     cvv: Yup.number()
//       .max(3, 'CVV must be 3 digits')
//       .required('CVV is required'),
//   }),
//   onSubmit: (values) => {
//     alert(JSON.stringify(values, null, 2));
//   },
// });

{
  /* <Form.Check
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
                  /> */
}

{
  /* <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}

                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}

                <label htmlFor='contactNumber'>Contact Number</label>
                <input
                  id='contactNumber'
                  name='contactNumber'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactNumber}
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <div>{formik.errors.contactNumber}</div>
                ) : null}

                <button type='submit'>Submit</button>
              </form> */
}
