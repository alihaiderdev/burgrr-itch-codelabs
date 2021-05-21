import React, { useState } from 'react';
import '../styles/screens/cart.css';
import CartScreenHeader from '../components/CartScreenHeader';
import PersonalInfoForm from '../components/PersonalInfoForm';
import PaymentMethodForm from '../components/PaymentMethodForm';
import ConfirmOrderForm from '../components/ConfirmOrder';

const CartScreen = () => {
  const [step, setStep] = useState(1);

  const [formFields, setFormFields] = useState({
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
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const {
    name,
    email,
    contactNumber,
    deliveryAddress,
    deliveryDateTime,
    date,
    message,
    cardHolderName,
    cardNumber,
    expiry,
    cvc,
  } = formFields;

  const values = {
    name,
    email,
    contactNumber,
    deliveryAddress,
    deliveryDateTime,
    date,
    message,
    cardHolderName,
    cardNumber,
    expiry,
    cvc,
  };

  switch (step) {
    case 1:
      return (
        <>
          <CartScreenHeader />
          <div className='cartScreen container-85'>
            <PersonalInfoForm nextStep={nextStep} values={values} handleChange={handleChange} />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <CartScreenHeader />
          <div className='cartScreen container-85'>
            <PaymentMethodForm nextStep={nextStep} values={values} handleChange={handleChange} />
          </div>
        </>
      );
    case 3:
      return (
        <>
          <CartScreenHeader />
          <div className='cartScreen container-85'>
            <ConfirmOrderForm nextStep={nextStep} values={values} />
          </div>
        </>
      );

    default:
      console.log('This is a multi-step form built with React.');
  }
};

export default CartScreen;
