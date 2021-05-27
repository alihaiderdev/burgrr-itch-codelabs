import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';
import '../../styles/screens/admin/login.css';

import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiEnvelope } from 'react-icons/bi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import AdminHeader from '../../components/admin/AdminHeader';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import Button from '../../components/formComponents/Button';
import FacebookIcon from '../../assets/icons/FacebookIcon.svg';
import GoogleIcon from '../../assets/icons/GoogleIcon.svg';
import Icon from '../../components/Icon';

const LoginScreen = ({ history }) => {
  ScrollToTop();

  const [signinInfo, setSigninInfo] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const { email, password, showPassword } = signinInfo;

  const onChangeHandler = (e) => {
    setSigninInfo({ ...signinInfo, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setSigninInfo({ ...signinInfo, showPassword: !showPassword });
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
    history.push('/admin/setup-store');
  };
  return (
    <>
      <AdminHeader />
      <div className='signupScreen loginScreen container-85'>
        <Form onSubmit={loginSubmitHandler} className='signupForm'>
          <div className='signupWrapper'>
            <h1 className='um black'>Login</h1>
            <p className='um'>To Access Your Online Store</p>
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

            <BiEnvelope className='envelopIcon' size='20px' />
          </Form.Group>

          <Form.Group controlId='password' className='mb-2'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              value={password}
              type={showPassword ? 'text' : 'password'}
              onChange={onChangeHandler}
              placeholder='......'
            />
            <button className='button' onClick={handleClickShowPassword}>
              {showPassword ? (
                <AiFillEye size='20px' />
              ) : (
                <AiFillEyeInvisible size='20px' />
              )}
            </button>
          </Form.Group>
          <div className='forgetPassword'>
            <Link to='/admin/forget-password'>Forget Password</Link>
          </div>
          <div className='signupBtnWrapper sb'>
            <Button
              title='Login'
              type='submit'
              className='mb-4'
              style={{
                borderRadius: '5px',
                padding: '15px 50px',
                marginBottom: '24px',
              }}
            />
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
            <p className='alreadyAccount um'>
              Don't have an account?&nbsp;
              <Link to='/admin/signup' className='orange ur'>
                Signup
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginScreen;
