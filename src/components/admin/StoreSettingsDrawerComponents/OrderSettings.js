import React, { useState } from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/orderSettings.css';

import { DatePicker, Space, TimePicker } from 'antd';
import moment from 'moment';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import Button from '../../formComponents/Button';
import { Form } from 'react-bootstrap';

// import ToggleOnIcon from '../../../assets/admin-icons-images/Icons/Toggle-On.svg';
// import ToggleOffIcon from '../../../assets/admin-icons-images/Icons/Toggle-Off.svg';
import Icon from '../../Icon';

// const { RangePicker } = DatePicker;

const OrderSettings = () => {
  const [orderSettingsInfo, setOrderSettingsInfo] = useState({
    acceptOrders: true,
    upTill: '',
  });

  const { acceptOrders, upTill } = orderSettingsInfo;

  const [dontAcceptOrderToggle, setDontAcceptOrderToggle] = useState(true);
  const format = 'h:mm:ss A';

  const handleUpTillTimeChange = (time, timeString) => {
    setOrderSettingsInfo({ ...orderSettingsInfo, upTill: timeString });
  };

  const handleAcceptOrderChange = () => {
    setOrderSettingsInfo({
      ...orderSettingsInfo,
      acceptOrders: !acceptOrders,
    });
  };

  const orderSettingsSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ acceptOrders, upTill });
  };

  return (
    <div className='orderSettings'>
      <Form onSubmit={orderSettingsSubmitHandler}>
        <div className='sb mb-3'>
          <span className='gray'>Don’t Accept Orders</span>
          <button onClick={() => handleAcceptOrderChange()}>
            {acceptOrders ? (
              <Icon children={<BsToggleOn size='30px' />} />
            ) : (
              <Icon children={<BsToggleOff size='30px' />} />
            )}
          </button>
        </div>
        <div className='sb'>
          <span className='gray'>Up Till</span>
          <TimePicker
            defaultValue={moment('12:00:00', format)}
            format={format}
            onChange={handleUpTillTimeChange}
            style={{ width: 'auto' }}
          />
        </div>

        <div className='sb mt-3'>
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

export default OrderSettings;
