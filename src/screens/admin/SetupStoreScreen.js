import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';

import { Form } from 'react-bootstrap';
import { Select } from 'antd';
import { Link } from 'react-router-dom';

import AdminHeader from '../../components/admin/AdminHeader';
import { countryName } from '../../data/countryCodeList';
import Button from '../../components/formComponents/Button';
import cityList from '../../data/List';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import AuthScreensWrapper from './../../components/admin/AuthScreensWrapper';

const { Option } = Select;

const SetupStoreScreen = ({ history }) => {
  ScrollToTop();

  const [setupStoreInfo, setSetupStoreInfo] = useState({
    storeName: '',
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
    industry,
    location: { street, country, state, city },
  } = setupStoreInfo;

  const handleOnChangeStoreName = (e) => {
    setSetupStoreInfo({
      ...setupStoreInfo,
      storeName: e.target.value,
    });
  };
  const handleOnChangeStreet = (e) => {
    setSetupStoreInfo({
      ...setupStoreInfo,
      location: { ...setupStoreInfo.location, street: e.target.value },
    });
  };

  const onChangeHandler = (v, n) => {
    console.log({ v, n });
    setSetupStoreInfo({
      ...setupStoreInfo,
      [n]: v,
    });
  };

  const onChangeLocationHandler = (v, n) => {
    setSetupStoreInfo({
      ...setupStoreInfo,
      location: { ...setupStoreInfo.location, [n]: v },
    });
  };

  const setupStoreSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      storeName,
      industry,
      location: { street, country, state, city },
    });
    history.push('/admin/pricing');
  };

  return (
    <>
      <AdminHeader />
      <div className='setupStore container-85 center'>
        <AuthScreensWrapper
          title='Setup Store'
          descrption='Tell us about your business'
          style={{ width: '40%', padding: '50px' }}
        >
          <Form onSubmit={setupStoreSubmitHandler} className='signupForm'>
            <Form.Group controlId='storeName'>
              <Form.Label>Store Name</Form.Label>
              <Form.Control
                name='storeName'
                type='text'
                value={storeName}
                onChange={handleOnChangeStoreName}
                placeholder='i.e, Burger O Clock'
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

            <p className='termConditions'>
              *by clicking sign up button you accept our{' '}
              <span className='orange ur'>terms and conditions</span> to create
              our store.
            </p>
            <div className='center mt-4'>
              <Button
                title='Setup'
                type='submit'
                className='mb-4'
                style={{
                  borderRadius: '5px',
                  padding: '15px 50px',
                  marginBottom: '24px',
                  width: '75%',
                }}
              />
              <Link to='/admin/get-started' className='orange later'>
                Later
              </Link>
            </div>
          </Form>
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default SetupStoreScreen;
