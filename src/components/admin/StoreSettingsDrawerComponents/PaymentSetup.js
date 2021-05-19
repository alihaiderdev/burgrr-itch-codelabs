import React, {useState} from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/paymentSetup.css';

import {Form} from 'react-bootstrap';
import {Radio, Space} from 'antd';

const PaymentSetup = () => {
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');

  const onChange = (e) => {
    console.log('radio checked : ', e.target.value);
    setPaymentMethod(e.target.value);
  };

  return (
    <div className='paymentSetup'>
      {/* <Form>
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
      </Form> */}
      <Radio.Group onChange={onChange} value={paymentMethod}>
        <Space direction='vertical'>
          <Radio value={'Cash on Delivery'}>Cash on Delivery</Radio>
          <Radio value={'Card on Delivery'}>Card on Delivery</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default PaymentSetup;
