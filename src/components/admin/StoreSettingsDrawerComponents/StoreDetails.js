import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/storeDetails.css';

const StoreDetails = () => {
  const [storeDetails, setStoreDetails] = useState({
    storeName: '',
    phoneNumber: '',
    storeLocation: '',
  });

  const {storeName, phoneNumber, storeLocation} = storeDetails;

  const onChangeHandler = (e) => {
    setStoreDetails({...storeDetails, [e.target.name]: e.target.value});
  };

  return (
    <div className='storeDetails'>
      <Form>
        <Form.Group controlId='storeName'>
          <Form.Label>Store Name</Form.Label>
          <Form.Control
            required
            name='storeName'
            type='text'
            value={storeName}
            onChange={onChangeHandler}
            placeholder='Burgeritch'
          />
        </Form.Group>
        <Form.Group controlId='phoneNumber'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            name='phoneNumber'
            type='tel'
            value={phoneNumber}
            onChange={onChangeHandler}
            placeholder='+923352917218'
          />
        </Form.Group>
        <Form.Group controlId='storeLocation'>
          <Form.Label>Store Location</Form.Label>
          <Form.Control
            required
            name='storeLocation'
            type='text'
            value={storeLocation}
            onChange={onChangeHandler}
            placeholder='Block 4, Gulshan Iqbal, Karachi, Sindh.'
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default StoreDetails;
