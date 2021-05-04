import React, { Component } from 'react';
import '../styles/screens/placeOrder.css';
import CartScreenHeader from '../components/CartScreenHeader';
import PaymentMethodForm from '../components/PaymentMethodForm';
import PersonalInfoForm from '../components/PersonalInfoForm';
import ConfirmOrder from '../components/ConfirmOrder';
import OrderPLace from '../components/OrderPLace';

export class PlaceOrderScreen extends Component {
  state = {
    current: 0,
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
  };

  onChange = (current) => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  nextStep = () => {
    const { current } = this.state;
    this.setState({
      current: current + 1,
    });
  };
  prevStep = () => {
    const { current } = this.state;
    this.setState({
      current: current - 1,
    });
  };

  firstStep = () => {
    this.setState({
      current: 0,
    });
  };
  secondStep = () => {
    this.setState({
      current: 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      current,
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
      paymentMethod,
    } = this.state;

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
      paymentMethod,
    };

    switch (current) {
      case 0:
        return (
          <>
            <CartScreenHeader
              onChange={this.onChange}
              current={current}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
            <div className='placeOrderScreen container-85'>
              <PersonalInfoForm
                nextStep={this.nextStep}
                values={values}
                handleChange={this.handleChange}
              />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <CartScreenHeader onChange={this.onChange} current={current} />
            <div className='placeOrderScreen container-85'>
              <PaymentMethodForm
                nextStep={this.nextStep}
                values={values}
                handleChange={this.handleChange}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <CartScreenHeader onChange={this.onChange} current={current} />
            <ConfirmOrder
              firstStep={this.firstStep}
              secondStep={this.secondStep}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </>
        );
      case 3:
        return (
          <>
            <CartScreenHeader onChange={this.onChange} current={current} />
            <div className='placeOrderScreen container-85'>
              <OrderPLace
                firstStep={this.firstStep}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                values={values}
              />
            </div>
          </>
        );
      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}

export default PlaceOrderScreen;
