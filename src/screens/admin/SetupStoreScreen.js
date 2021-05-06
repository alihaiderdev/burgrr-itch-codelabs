import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';
import { Button, Form } from 'react-bootstrap';
import AdminHeader from '../../components/admin/AdminHeader';
import { Link } from 'react-router-dom';
import { countryInfoList } from '../../data/countryCodeList';

const SetupStoreScreen = () => {
  //   console.log('countryInfoList : ', countryInfoList);
  const [setupStoreInfo, setSetupStoreInfo] = useState({
    storeName: '',
    industry: '',
    location: { street: '', country: 'Pakistan', state: '', city: '' },
  });

  const {
    storeName,
    industry,
    location: { street, country, state, city },
  } = setupStoreInfo;

  const onChangeHandler = (e) => {
    setSetupStoreInfo({
      ...setupStoreInfo,
      ...setupStoreInfo.location,
      [e.target.name]: e.target.value,
    });
  };

  const setupStoreSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      storeName,
      industry,
      location: { street, country, state, city },
    });
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
              value={country}
              onChange={onChangeHandler}
              name='country'
            >
              {countryInfoList &&
                countryInfoList.map((c, i) => {
                  return (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  );
                })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='street'>
            <Form.Label>Store Location</Form.Label>
            <Form.Control
              required
              name='street'
              type='text'
              value={street}
              onChange={onChangeHandler}
              placeholder='Street'
            />
          </Form.Group>
          <Form.Group controlId='location'>
            <Form.Control
              as='select'
              custom
              value={country}
              onChange={onChangeHandler}
              name='country'
            >
              {countryInfoList &&
                countryInfoList.map((c, i) => {
                  return (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  );
                })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='location'>
            <Form.Control
              as='select'
              custom
              value={country}
              onChange={onChangeHandler}
              name='country'
            >
              {countryInfoList &&
                countryInfoList.map((c, i) => {
                  return (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  );
                })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='location'>
            <Form.Control
              as='select'
              custom
              value={country}
              onChange={onChangeHandler}
              name='country'
            >
              {countryInfoList &&
                countryInfoList.map((c, i) => {
                  return (
                    <option key={i} value={c.name}>
                      {c.name}
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
          <div className='signupBtnWrapper sb'>
            <Button type='submit'>Next</Button>
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
