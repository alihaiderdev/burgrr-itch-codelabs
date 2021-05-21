import React, { useState, Component } from 'react';

import '../../styles/components/store/cartForms.css';

import { Form, Button, Col } from 'react-bootstrap';
// import VisacardImage from '../assets/images/visacard-image.png';
// import VisacardImage from '../assets/images/visacard-image.png';
// import ContactNumberIcon from '../assets/icons/Form Icons/ContactNumber.svg';

export class PaymentMethodForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { cardHolderName, cardNumber, expiry, cvc, paymentMethod },
      handleChange,
      current,
    } = this.props;
    console.log('{ current } : ', { current });
    const [creaditCard, jazzCash, easyPaisa, cashOnDelivery] = paymentMethod;

    return (
      <div className='paymentMethodForm cartForm contaniner-85'>
        <Form>
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
                onChange={handleChange('cardHolderName')}
              />
            </Form.Group>

            <Form.Group controlId='cardNumber'>
              <Form.Control
                required
                name='cardNumber'
                type='tel'
                placeholder='Card Number'
                value={cardNumber}
                onChange={handleChange('cardNumber')}
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
                  onChange={handleChange('expiry')}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='cvc'>
                <Form.Control
                  required
                  name='cvc'
                  type='number'
                  placeholder='CVC'
                  value={cvc}
                  onChange={handleChange('cvc')}
                />
              </Form.Group>
            </Form.Row>

            <Form.Check
              className='modalRadioButtonLabel mb-3'
              type='radio'
              name='payment-method'
              // label='Jazzcash'
              // id='Jazzcash'
              value={jazzCash}
              label={jazzCash}
              id={jazzCash}
            />
            <Form.Check
              className='modalRadioButtonLabel mb-3'
              type='radio'
              name='payment-method'
              // label='Easypaisa'
              // id='Easypaisa'
              value={easyPaisa}
              label={easyPaisa}
              id={easyPaisa}
            />
            <Form.Check
              className='modalRadioButtonLabel mb-4'
              type='radio'
              name='payment-method'
              // label='Cash-on-delivery'
              // id='cod'
              value={cashOnDelivery}
              label={cashOnDelivery}
              id={cashOnDelivery}
            />
          </div>
          <Button
            className='btn btn-block'
            variant='primary'
            onClick={this.continue}
            type='submit'
          >
            Next
          </Button>
        </Form>
      </div>
    );
  }
}
export default PaymentMethodForm;

// const [cardHolderName, setCardHolderName] = useState('');
// const [cardNumber, setCardNumber] = useState('');
// const [expiry, setExpiry] = useState('');
// const [cvc, setCvc] = useState('');
