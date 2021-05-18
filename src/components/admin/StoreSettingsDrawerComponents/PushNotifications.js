import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/pushNotifications.css';

const PushNotifications = () => {
  const [pushNotifications, setPushNotifications] = useState({
    phoneNumber: '',
    email: '',
  });

  const {phoneNumber, email} = pushNotifications;

  const onChangeHandler = (e) => {
    setPushNotifications({
      ...pushNotifications,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='pushNotifications'>
      <Form>
        <Form.Group controlId='phoneNumber'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
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
            required
            name='email'
            type='email'
            value={email}
            onChange={onChangeHandler}
            placeholder='someone@email.com'
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default PushNotifications;
