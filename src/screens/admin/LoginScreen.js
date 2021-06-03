import React, { useEffect } from 'react';
import '../../styles/screens/admin/signup.css';
import '../../styles/screens/admin/login.css';

import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { BiEnvelope } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import AdminHeader from '../../components/admin/AdminHeader';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import Button from '../../components/formComponents/Button';
import FacebookIcon from '../../assets/icons/FacebookIcon.svg';
import GoogleIcon from '../../assets/icons/GoogleIcon.svg';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';
import InputField from '../../components/formComponents/InputField';
import { login } from '../../store/actions/userActions';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

const LoginScreen = ({ location, history }) => {
  ScrollToTop();

  const dispatch = useDispatch();
  const { loading, loginUserInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (loginUserInfo) {
      if (loginUserInfo.response.responseCode === 0) {
        history.push('/admin/home');
      } else {
        history.push('/admin/login');
      }
    }
  }, [history, loginUserInfo]);

  const initialValues = {
    emailAddress: '',
    password: '',
  };

  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .email('Invalid Email Format')
      .required('Required!'),
    password: Yup.string().required('Required!'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form Data : ', values);
    const { emailAddress, password } = values;
    dispatch(login(emailAddress, password));
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <AdminHeader />

      <div className='loginScreen container-85 center'>
        {loading && <Loader />}
        <AuthScreensWrapper
          title='Login'
          descrption='To Access Your Online Store'
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
              name='emailAddress'
              label='Email'
              placeholder='someone@gmail.com'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailAddress}
              touched={formik.touched.emailAddress}
              errors={formik.errors.emailAddress}
            >
              <BiEnvelope className='grayIcon ' size='20px' />
            </InputField>
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
            />

            <div className='fe'>
              <Link className='black' to='/admin/forgot-password'>
                Forgot Password
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
          </form>
          {/* </Formik> */}
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default LoginScreen;
