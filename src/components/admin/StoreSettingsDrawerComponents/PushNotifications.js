import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/pushNotifications.css';
import Button from '../../formComponents/Button';

const PushNotifications = () => {
  const [pushNotifications, setPushNotifications] = useState({
    phoneNumber: '',
    email: '',
  });

  const { phoneNumber, email } = pushNotifications;

  const onChangeHandler = (e) => {
    setPushNotifications({
      ...pushNotifications,
      [e.target.name]: e.target.value,
    });
  };

  const pushNotificationsSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ phoneNumber, email });
  };

  return (
    <div className='pushNotifications'>
      <Form onSubmit={pushNotificationsSubmitHandler}>
        <Form.Group controlId='phoneNumber'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name='phoneNumber'
            type='tel'
            value={phoneNumber}
            onChange={onChangeHandler}
            placeholder='033539999000'
          />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type='email'
            value={email}
            onChange={onChangeHandler}
            placeholder='someone@email.com'
          />
        </Form.Group>
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

export default PushNotifications;
