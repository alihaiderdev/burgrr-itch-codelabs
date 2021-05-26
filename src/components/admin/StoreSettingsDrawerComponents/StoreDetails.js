import React, { useState } from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/storeDetails.css';

import { Form } from 'react-bootstrap';
import { Select } from 'antd';
import { Link } from 'react-router-dom';

import cityList from '../../../data/List';
import { countryName } from '../../../data/countryCodeList';
import Button from '../../formComponents/Button';

const { Option } = Select;

const StoreDetails = () => {
  const [storeDetailsInfo, setStoreDetailsInfo] = useState({
    storeName: '',
    phoneNumber: '',
    industry: 'Food',
    location: {
      street: '',
      country: 'Pakistan',
      state: 'Sindh',
      city: 'Karachi',
    },
  });

  const [industryList, setIndustryList] = useState([
    'Clothes',
    'Food',
    'Vegetable',
    'Meals',
    'Patroleum',
    'Automobile',
  ]);
  const [stateList, setStateList] = useState([
    'Sindh',
    'Azad Jammu and Kashmir',
    'Balochistan',
    'Gilgit-Baltistan',
    'Islamabad Capital Territory',
    'Khyber Pakhtunkhwa',
    'Punjab',
  ]);

  const {
    storeName,
    phoneNumber,
    industry,
    location: { street, country, state, city },
  } = storeDetailsInfo;

  const handleOnChangeStoreNameAndPhoneNumber = (e) => {
    const { name, value } = e.target;
    setStoreDetailsInfo({
      ...storeDetailsInfo,
      [name]: value,
    });
  };
  const handleOnChangeStreet = (e) => {
    setStoreDetailsInfo({
      ...storeDetailsInfo,
      location: { ...storeDetailsInfo.location, street: e.target.value },
    });
  };

  const onChangeHandler = (v, n) => {
    setStoreDetailsInfo({
      ...storeDetailsInfo,
      [n]: v,
    });
  };

  const onChangeLocationHandler = (v, n) => {
    setStoreDetailsInfo({
      ...storeDetailsInfo,
      location: { ...storeDetailsInfo.location, [n]: v },
    });
  };

  const storeDetailsSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      storeName,
      phoneNumber,
      industry,
      location: { street, country, state, city },
    });
  };

  return (
    <div className='storeDetails'>
      <Form
        autoComplete
        onSubmit={storeDetailsSubmitHandler}
        className='signupForm'
      >
        <Form.Group controlId='storeName'>
          <Form.Label>Store Name</Form.Label>
          <Form.Control
            name='storeName'
            type='text'
            value={storeName}
            onChange={handleOnChangeStoreNameAndPhoneNumber}
            placeholder='i.e, Burger O Clock'
          />
        </Form.Group>
        <Form.Group controlId='phoneNumber'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name='phoneNumber'
            type='text'
            value={phoneNumber}
            onChange={handleOnChangeStoreNameAndPhoneNumber}
            placeholder='03332222400'
          />
        </Form.Group>

        <Form.Group controlId='industry'>
          <Form.Label>Select your Industry</Form.Label>
          <Select
            size='large'
            defaultValue={industry}
            style={{ width: '100%' }}
            onChange={(e) => onChangeHandler(e, 'industry')}
            showSearch
          >
            {industryList &&
              industryList.map((s, i) => (
                <Option key={i} value={s}>
                  {s}
                </Option>
              ))}
          </Select>
        </Form.Group>

        <Form.Group controlId='street'>
          <Form.Label>Store Location</Form.Label>
          <Form.Control
            name='street'
            type='text'
            value={street}
            onChange={handleOnChangeStreet}
            placeholder='Street'
          />
        </Form.Group>
        <Form.Group controlId='country'>
          <Select
            size='large'
            defaultValue={country}
            style={{ width: '100%' }}
            onChange={(e) => onChangeLocationHandler(e, 'country')}
            showSearch
            value={country}
          >
            {countryName &&
              countryName.map((c, i) => (
                <Option key={i} value={c}>
                  {c}
                </Option>
              ))}
          </Select>
        </Form.Group>
        <Form.Group controlId='state'>
          <Select
            size='large'
            defaultValue={state}
            style={{ width: '100%' }}
            onChange={(e) => onChangeLocationHandler(e, 'state')}
            showSearch
            value={state}
          >
            {stateList &&
              stateList.map((c, i) => (
                <Option key={i} value={c}>
                  {c}
                </Option>
              ))}
          </Select>
        </Form.Group>
        <Form.Group controlId='city'>
          <Select
            size='large'
            defaultValue={city}
            style={{ width: '100%' }}
            onChange={(e) => onChangeLocationHandler(e, 'city')}
            showSearch
            value={city}
          >
            {cityList &&
              cityList.map((c, i) => (
                <Option key={i} value={c}>
                  {c}
                </Option>
              ))}
          </Select>
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

export default StoreDetails;
