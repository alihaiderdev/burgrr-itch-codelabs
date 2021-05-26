import React, { useState } from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/paymentSetup.css';

import { Form } from 'react-bootstrap';
import { Radio, Space, Checkbox } from 'antd';
import Button from '../../formComponents/Button';

const PaymentSetup = () => {
  const [options, setOptions] = useState([
    { label: 'Cash on Delivery', value: 'Cash on Delivery' },
    { label: 'Card on Delivery', value: 'Card on Delivery' },
  ]);
  // const options = [
  //   { label: 'Cash on Delivery', value: 'Cash on Delivery' },
  //   { label: 'Card on Delivery', value: 'Card on Delivery' },
  // ];
  let selectedMethods = [];
  const selectedOptions = (selectedValues) => {
    selectedMethods = selectedValues;
    console.log({ selectedValues });
  };

  const paymentSetupSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ selectedMethods });
  };

  return (
    <div className='paymentSetup'>
      <Form onSubmit={paymentSetupSubmitHandler}>
        <Checkbox.Group
          options={options}
          defaultValue={['Cash on Delivery']}
          onChange={selectedOptions}
        />

        <div className='sb'>
          <Button
            title='Cancle'
            btnType='outline'
            type='button'
            className='mb-4'
            style={{
              borderRadius: '5px',
              padding: '8px 50px',
              margin: '10px 0',
            }}
          />
          <Button
            title='Save Changes'
            type='submit'
            className='mb-4'
            style={{
              borderRadius: '5px',
              padding: '10px 50px',
              margin: '10px 0',
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default PaymentSetup;
