import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/paymentSetup.css';

const PaymentSetup = () => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  return (
    <div className='paymentSetup'>
      <Form>
        <Form.Check
          className='mb-3 ur'
          type='radio'
          checked={paymentMethod === 'Cash on Delivery'}
          value='Cash on Delivery'
          label='Cash on Delivery'
          id='Cash on Delivery'
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Form.Check
          className='mb-3 ur'
          type='radio'
          checked={paymentMethod === 'Card on Delivery'}
          value='Card on Delivery'
          label='Card on Delivery'
          id='Card on Delivery'
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default PaymentSetup;
