import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { BiEnvelope } from 'react-icons/bi';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import FacebookIcon from '../../assets/icons/FacebookIcon.svg';
import GoogleIcon from '../../assets/icons/GoogleIcon.svg';
import InputField from '../../components/formComponents/InputField';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';
import Icon from '../../components/Icon';

const SignupScreen = ({ history }) => {
  ScrollToTop();

  const initialValues = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values) => {
    console.log('Form Data : ', values);
    history.push('/admin/login');
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required!'),
    fullName: Yup.string().required('Required!'),
    password: Yup.string().required('Required!'),
    confirmPassword: Yup.string().required('Required!'),
  });

  return (
    <>
      <AdminHeader />
      <div className='signupScreen container-85 center'>
        <AuthScreensWrapper
          title='Signup'
          descrption='To Create Your Online Store'
          style={{ width: '35%', padding: '50px' }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <InputField
                type='email'
                name='email'
                label='Email'
                placeholder='someone@gmail.com'
              >
                <BiEnvelope className='grayIcon ' size='20px' />
              </InputField>
              <InputField
                type='text'
                name='fullName'
                label='Fullname'
                placeholder='i.e : Ali Haider'
              />
              <InputField
                type='password'
                name='password'
                label='Password'
                placeholder='.....'
              />
              <InputField
                type='password'
                name='confirmPassword'
                label='Confirm Password'
                placeholder='.....'
              />

              <p className='termConditions'>
                * by clicking sign up button you accept our{' '}
                <Link>
                  <span className='orange ur'>terms and conditions</span>
                </Link>{' '}
                to create our store.
              </p>
              <div className='center'>
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
          </Formik>
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default SignupScreen;
