import React, { useState } from 'react';
import '../../styles/screens/admin/signup.css';

import { Formik, Form, useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { BiEnvelope } from 'react-icons/bi';
import PasswordStrengthBar from 'react-password-strength-bar';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import FacebookIcon from '../../assets/icons/FacebookIcon.svg';
import GoogleIcon from '../../assets/icons/GoogleIcon.svg';
import InputField from '../../components/formComponents/InputField';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';
import Icon from '../../components/Icon';
import { toast } from 'react-toastify';

const SignupScreen = ({ history }) => {
  ScrollToTop();

  toast.configure();

  const initialValues = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  };

  const { email, fullName, password, confirmPassword } = initialValues;

  const validationSchema = yup.object({
    email: yup.string().email('Invalid Email Format').required('Required!'),
    fullName: yup.string().required('Required!'),
    // password: yup
    //   .string()
    //   .required('Required!')
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    //   ),
    password: yup.string().required('Required!'),
    confirmPassword: yup.string().required('Required!'),
  });

  const onSubmit = (values, { resetForm }) => {
    const { email, fullName, password, confirmPassword } = values;
    if (password === confirmPassword) {
      console.log('Form Data : ', values);
      history.push('/admin/login');
      resetForm();
    } else {
      toast(
        `🦄 The password you enter in both password (${password}) and confirm password (${confirmPassword}) fields is not matched please enter same password in both fields `,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
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
          {/* <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          > */}
          <form onSubmit={formik.handleSubmit}>
            <InputField
              type='email'
              name='email'
              label='Email'
              placeholder='someone@gmail.com'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              touched={formik.touched.email}
              errors={formik.errors.email}
            >
              <BiEnvelope className='grayIcon ' size='20px' />
            </InputField>
            <InputField
              type='text'
              name='fullName'
              label='Fullname'
              placeholder='i.e : Ali Haider'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              touched={formik.touched.fullName}
              errors={formik.errors.fullName}
            />
            <InputField
              type='password'
              name='password'
              label='Password'
              placeholder='.....'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              touched={formik.touched.password}
              errors={formik.errors.password}
              passwordValidations={true}
            />
            <InputField
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder='.....'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              touched={formik.touched.confirmPassword}
              errors={formik.errors.confirmPassword}
              passwordValidations={true}
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
                  type='button'
                  className='button p-0'
                  onClick={() => alert('Login With FaceBoook')}
                >
                  <img src={FacebookIcon} alt='FacebookIcon' />
                </button>
                <button
                  type='button'
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
          </form>
          {/* </Formik> */}
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default SignupScreen;
