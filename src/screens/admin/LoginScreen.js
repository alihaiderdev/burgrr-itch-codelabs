import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';
import { Button, Form } from 'react-bootstrap';
import AdminHeader from '../../components/admin/AdminHeader';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [signinInfo, setSigninInfo] = useState({
    email: '',
    password: '',
  });

  const { email, password } = signinInfo;

  const onChangeHandler = (e) => {
    setSigninInfo({ ...signinInfo, [e.target.name]: e.target.value });
  };

  const signinSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };
  return (
    <>
      <AdminHeader />
      <div className='signupScreen container-85'>
        <Form
          autoComplete
          onSubmit={signinSubmitHandler}
          className='signupForm'
        >
          <div className='signupWrapper'>
            <h1 className='um black'>Signin</h1>
            <p className='um'>To Create Your Online Store Please Login</p>
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
          </Form.Group>

          <Form.Group controlId='password' className='mb-4'>
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

          <div className='signupBtnWrapper sb'>
            <Button type='submit'>Login</Button>
          </div>
        </Form>
        <p className='alreadyAccount um'>
          Don't have an account? Please{' '}
          <Link to='/admin/signup' className='orange um'>
            Signup
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginScreen;
