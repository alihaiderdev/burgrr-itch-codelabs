import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';

import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';

import AdminHeader from '../../components/admin/AdminHeader';
import EmailAddressIcon from '../../assets/icons/Form Icons/EmailAddress.svg';
import Button from '../../components/formComponents/Button';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import FacebookIcon from '../../assets/icons/FacebookIcon.svg';
import GoogleIcon from '../../assets/icons/GoogleIcon.svg';

const SignupScreen = ({ history }) => {
  ScrollToTop();

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
    history.push('/admin/login');
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
              name='email'
              type='email'
              value={email}
              onChange={onChangeHandler}
              placeholder='someone@email.com'
            />
          </Form.Group>
          <Form.Group controlId='fullName'>
            <Form.Label>Fullname</Form.Label>
            <Form.Control
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
              name='password'
              type='password'
              value={password}
              onChange={onChangeHandler}
              placeholder='......'
            />
          </Form.Group>
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name='confirmPassword'
              type='password'
              value={confirmPassword}
              onChange={onChangeHandler}
              placeholder='......'
            />
          </Form.Group>
          <p className='termConditions'>
            * by clicking sign up button you accept our{' '}
            <Link>
              <span className='orange ur'>terms and conditions</span>
            </Link>{' '}
            to create our store.
          </p>
          <div className='signupBtnWrapper sb'>
            <Button
              title='Signup'
              type='submit'
              classname='mb-4'
              style={{
                borderRadius: '35px',
                boxShadow: '0px 15px 25px #00000029',
                width: '75%',
                padding: '15px 50px',
                borderRadius: '5px',
              }}
            />
          </div>
          <div className='center'>
            <p className='ur mb-3'>Or Continue with</p>
            <div className='socialMediaLoginWrapper mb-2 aic'>
              <button
                className='button p-0'
                onClick={() => alert('Login With FaceBoook')}
              >
                <img src={FacebookIcon} alt='FacebookIcon' />
              </button>
              <button
                className='button p-0'
                onClick={() => alert('Login With Google')}
              >
                <img src={GoogleIcon} alt='GoogleIcon' />
              </button>
            </div>
            <p className='alreadyAccount um m-0'>
              Already have account?{' '}
              <Link to='/admin/login' className='orange um'>
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignupScreen;
