import React from 'react';
import '../../styles/screens/admin/signup.css';
import '../../styles/screens/admin/login.css';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { BiEnvelope } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import AdminHeader from '../../components/admin/AdminHeader';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import Button from '../../components/formComponents/Button';
import FacebookIcon from '../../assets/icons/FacebookIcon.svg';
import GoogleIcon from '../../assets/icons/GoogleIcon.svg';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';
import InputField from '../../components/formComponents/InputField';

const LoginScreen = ({ history }) => {
  ScrollToTop();

  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, userInfo, error } = userLogin;

  const onSubmit = (values) => {
    console.log('Form Data : ', values);
    history.push('/admin/setup-store');
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required!'),
    password: Yup.string().required('Required!'),
  });

  return (
    <>
      <AdminHeader />
      <div className='loginScreen container-85 center'>
        <AuthScreensWrapper
          title='Login'
          descrption='To Access Your Online Store'
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
                type='password'
                name='password'
                label='Password'
                placeholder='.....'
              />

              <div className='fe'>
                <Link className='black' to='/admin/forget-password'>
                  Forget Password
                </Link>
              </div>
              <div className='center'>
                <Button
                  title='Login'
                  type='submit'
                  className='mb-4'
                  style={{
                    borderRadius: '5px',
                    padding: '15px 50px',
                    marginBottom: '24px',
                    width: '75%',
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
          </Formik>
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default LoginScreen;
