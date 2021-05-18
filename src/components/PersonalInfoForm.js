import React, {useState, Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../styles/components/cartForms.css';
import EmailAddressIcon from '../assets/icons/Form Icons/EmailAddress.svg';
import ContactNumberIcon from '../assets/icons/Form Icons/ContactNumber.svg';
import DeliveryAddressIcon from '../assets/icons/Form Icons/DeliveryAddress.svg';
import {AiOutlineArrowRight} from 'react-icons/ai';

export class PersonalInfoForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values: {
        name,
        email,
        contactNumber,
        deliveryAddress,
        deliveryDateTime,
        message,
      },
      handleChange,
      current,
    } = this.props;

    return (
      <div className='personalInfoForm cartForm contaniner-85'>
        <Form>
          <h3 className='um black mb-4'>Your Details</h3>

          <Form.Group controlId='name'>
            <Form.Control
              required
              name='name'
              type='text'
              placeholder='Your Name'
              defaultValue={name}
              onChange={handleChange('name')}
            />
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Control
              required
              name='email'
              type='email'
              placeholder='Email Address'
              defaultValue={email}
              onChange={handleChange('email')}
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
              defaultValue={contactNumber}
              onChange={handleChange('contactNumber')}
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
              defaultValue={deliveryAddress}
              onChange={handleChange('deliveryAddress')}
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
              defaultValue={deliveryDateTime}
              onChange={handleChange('deliveryDateTime')}
            />
          </Form.Group>

          <Form.Group controlId='Message'>
            <Form.Control
              required
              name='message'
              as='textarea'
              placeholder='Message for Rider'
              rows={5}
              defaultValue={message}
              onChange={handleChange('message')}
            />
          </Form.Group>

          <Button
            className='btn btn-block'
            type='submit'
            onClick={this.continue}
          >
            Next
            <AiOutlineArrowRight color='white' />
          </Button>
        </Form>
      </div>
    );
  }
}

export default PersonalInfoForm;
