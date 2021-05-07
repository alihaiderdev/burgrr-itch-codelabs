import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';
import { Button, Form } from 'react-bootstrap';
import AdminHeader from '../../components/admin/AdminHeader';
import { Link } from 'react-router-dom';
import { countryName } from '../../data/countryCodeList';

const SetupStoreScreen = () => {
  const [setupStoreInfo, setSetupStoreInfo] = useState({
    storeName: '',
    industry: 'Pakistan',
    location: { street: '', country: 'Pakistan', state: 'India', city: 'Oman' },
  });

  const {
    storeName,
    industry,
    location: { street, country, state, city },
  } = setupStoreInfo;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSetupStoreInfo({
      ...setupStoreInfo,
      [name]: value,
    });

    // setSetupStoreInfo((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  const onChangeLocationHandler = (e) => {
    const { name, value } = e.target;
    setSetupStoreInfo({
      ...setupStoreInfo,
      location: { ...setupStoreInfo.location, [name]: value },
    });
  };

  const setupStoreSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      storeName,
      industry,
      location: { street, country, state, city },
    });
    alert(storeName, industry, street, country, state, city);
  };

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
            <Form.Control
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
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='street'>
            <Form.Label>Store Location</Form.Label>
            <Form.Control
              // required
              name='street'
              type='text'
              value={street}
              onChange={onChangeLocationHandler}
              placeholder='Street'
            />
          </Form.Group>
          <Form.Group controlId='country'>
            <Form.Control
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
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='state'>
            <Form.Control
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
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='city'>
            <Form.Control
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
            </Form.Control>
          </Form.Group>

          <p className='termConditions'>
            *by clicking sign up button you accept our{' '}
            <span className='orange ur'>terms and conditions</span> to create
            our store.
          </p>
          <div className='signupBtnWrapper'>
            <Button type='submit' className='mb-4'>
              Next
            </Button>
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
