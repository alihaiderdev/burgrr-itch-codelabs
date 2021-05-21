import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';
import { Button, Form } from 'react-bootstrap';
import AdminHeader from '../../components/admin/AdminHeader';
import EmailAddressIcon from '../../assets/icons/Form Icons/EmailAddress.svg';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });

  const { email, fullName, password, confirmPassword } = signupInfo;

  const onChangeHandler = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const signupSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      email,
      fullName,
      password,
      confirmPassword,
    });
  };
  return (
    <>
      <AdminHeader />
      <div className='signupScreen container-85'>
        <Form
          autoComplete
          onSubmit={signupSubmitHandler}
          className='signupForm'
        >
          <div className='signupWrapper'>
            <h1 className='um black'>Signup</h1>
            <p className='um'>To Create Your Online Store</p>
          </div>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              name='email'
              type='email'
              value={email}
              onChange={onChangeHandler}
              placeholder='someone@email.com'
            />
            {/* <img
              className='form-icon'
              src={EmailAddressIcon}
              alt='EmailAddressIcon'
            /> */}
          </Form.Group>
          <Form.Group controlId='fullName'>
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              required
              name='fullName'
              type='text'
              value={fullName}
              onChange={onChangeHandler}
              placeholder='i.e Jhon Smith'
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              type='password'
              value={password}
              onChange={onChangeHandler}
              placeholder='..........'
            />
          </Form.Group>
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              name='confirmPassword'
              type='password'
              value={confirmPassword}
              onChange={onChangeHandler}
              placeholder='..........'
            />
          </Form.Group>
          <p className='termConditions'>
            *by clicking sign up button you accept our
            <Link>
              <span className='orange ur'>terms and conditions</span>
            </Link>
            to create our store.
          </p>
          <div className='signupBtnWrapper sb'>
            <Button type='submit'>Signup</Button>
          </div>
        </Form>
        <p className='alreadyAccount um'>
          Already have account?{' '}
          <Link to='/admin/login' className='orange um'>
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupScreen;
