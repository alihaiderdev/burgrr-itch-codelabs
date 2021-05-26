import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';

import { Form } from 'react-bootstrap';
import { Select } from 'antd';
import { Link } from 'react-router-dom';

import AdminHeader from '../../components/admin/AdminHeader';
import { countryName } from '../../data/countryCodeList';
import Button from '../../components/formComponents/Button';
import cityList from '../../data/List';

const { Option } = Select;

const SetupStoreScreen = ({ history }) => {
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

  const {
    storeName,
    industry,
    location: { street, country, state, city },
  } = setupStoreInfo;

  const onChangeHandler = (e,i) => {
    const { name, value } = e.target;
    console.log(e.target,"state",e,i)
    setSetupStoreInfo({
      ...setupStoreInfo,
      [name]: value,
    });
  };

  const onChangeLocationHandler = (e, n) => {
    // const { name, value } = e.target;
    console.log('state : ', e, n);
    setSetupStoreInfo({
      ...setupStoreInfo,
      location: { ...setupStoreInfo.location, [n]: e },
    });
  };

  const setupStoreSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      storeName,
      industry,
      location: { street, country, state, city },
    });
    history.push('/admin/home');
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <AdminHeader />
      <div className='signupScreen container-85'>
        <Form
          autoComplete
          onSubmit={setupStoreSubmitHandler}
          className='signupForm'
        >
          <div className='signupWrapper'>
            <h1 className='um black'>Setup Store</h1>
            <p className='um'>Tell us about your business</p>
          </div>
          <Form.Group controlId='storeName'>
            <Form.Label>Store Name</Form.Label>
            <Form.Control
              required
              name='storeName'
              type='text'
              value={storeName}
              onChange={onChangeHandler}
              placeholder='i.e, Burger O Clock'
            />
          </Form.Group>

          <Form.Group controlId='industry'>
            <Form.Label>Select your Industry</Form.Label>
            <Select
              size='large'
              defaultValue={industry}
              style={{ width: '100%' }}
              onChange={(e)=>onChangeHandler(e,'industry')}
              showSearch
            >
              {/* <Option value=''>Industry</Option> */}
              {industryList &&
                industryList.map((s, i) => (
                  <Option key={i} value={s}>
                    {s}
                  </Option>
                ))}
            </Select>
            {/* <Form.Control
              as='select'
              custom
              value={industry}
              onChange={onChangeHandler}
              name='industry'
            >
              {countryName &&
                countryName.map((cn, i) => {
                  return (
                    <option key={i} value={cn}>
                      {cn}
                    </option>
                  );
                })}
            </Form.Control> */}
          </Form.Group>

          <Form.Group controlId='street'>
            <Form.Label>Store Location</Form.Label>
            <Form.Control
              // required
              name='street'
              type='text'
              value={street}
              onChange={(e)=>onChangeLocationHandler(e, "street")}
              placeholder='Street'
            />
          </Form.Group>
          <Form.Group controlId='country'>
            <Select
              size='large'
              defaultValue={country}
              style={{ width: '100%' }}
              onChange={(e)=>onChangeLocationHandler(e,"country")}
              showSearch
              value={country}
            >
              {/* <Option value=''>Country</Option> */}
              {countryName &&
                countryName.map((c, i) => (
                  <Option key={i} value={c}>
                    {c}
                  </Option>
                ))}
            </Select>
            {/* <Form.Control
              as='select'
              custom
              value={country}
              onChange={onChangeLocationHandler}
              name='country'
            >
              {countryName &&
                countryName.map((cn, i) => {
                  return (
                    <option key={i} value={cn}>
                      {cn}
                    </option>
                  );
                })}
            </Form.Control> */}
          </Form.Group>
          <Form.Group controlId='state'>
            <Select
              size='large'
              defaultValue={state}
              style={{ width: '100%' }}
              onChange={(e)=>onChangeLocationHandler(e,"state")}
              showSearch
              value={state}
            >
              {/* <Option value=''>State</Option> */}
              {stateList &&
                stateList.map((c, i) => (
                  <Option key={i} value={c}>
                    {c}
                  </Option>
                ))}
            </Select>
            {/* <Form.Control
              as='select'
              custom
              value={state}
              onChange={onChangeLocationHandler}
              name='state'
            >
              {countryName &&
                countryName.map((cn, i) => {
                  return (
                    <option key={i} value={cn}>
                      {cn}
                    </option>
                  );
                })}
            </Form.Control> */}
          </Form.Group>
          <Form.Group controlId='city'>
            <Select
              size='large'
              defaultValue={city}
              style={{ width: '100%' }}
              onChange={(e)=>onChangeLocationHandler(e,"city")}
              showSearch
              value={city}
            >
              {/* <Option value=''>City</Option> */}
              {cityList &&
                cityList.map((c, i) => (
                  <Option key={i} value={c}>
                    {c}
                  </Option>
                ))}
            </Select>
            {/* <Form.Control
              as='select'
              custom
              value={city}
              onChange={onChangeLocationHandler}
              name='city'
            >
              {countryName &&
                countryName.map((cn, i) => {
                  return (
                    <option key={i} value={cn}>
                      {cn}
                    </option>
                  );
                })}
            </Form.Control> */}
          </Form.Group>

          <p className='termConditions'>
            *by clicking sign up button you accept our{' '}
            <span className='orange ur'>terms and conditions</span> to create
            our store.
          </p>
          <div className='signupBtnWrapper'>
            <Button
              title='Next'
              type='submit'
              className='mb-4'
              style={{
                borderRadius: '5px',
                padding: '15px 50px',
                marginBottom: '24px',
              }}
            />
            <Link to='/signup' className='orange later'>
              Later
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SetupStoreScreen;
