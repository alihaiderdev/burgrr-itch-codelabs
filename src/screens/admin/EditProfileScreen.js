// const yup = require('yup-password')(yup); // extend yup

import React from 'react';
import '../../styles/screens/admin/editProfile.css';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BiEnvelope } from 'react-icons/bi';
import { IoLogOutOutline } from 'react-icons/io5';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';
import InputField from '../../components/formComponents/InputField';
import { Link } from 'react-router-dom';

const EditProfileScreeen = ({ history }) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const onSubmit = (values) => console.log('Form Data : ', values);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Format').required('Required!'),
    password: Yup.string().required('Required!'),
  });

  return (
    <>
      <AdminHeader />
      <div className='editProfileScreen container-85 center'>
        <AuthScreensWrapper
          title='Profile Setting'
          descrption='Setup your profile'
          style={{ width: '50%', padding: '50px' }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className='infoWrapper'>
                <div className='editInfoWrapper'>
                  <InputField
                    type='text'
                    name='name'
                    label='Name'
                    placeholder='Enter your name'
                  />
                  <InputField
                    type='email'
                    name='email'
                    label='Email'
                    placeholder='Enter your email'
                  >
                    <BiEnvelope className='grayIcon icon' size='20px' />
                  </InputField>
                  <InputField
                    type='password'
                    name='password'
                    label='Password'
                    placeholder='.....'
                  />
                  <Link to='/admin/forget-password'>Change</Link>
                </div>
                <div className='editProfileWrapper'>
                  <h1>Profile</h1>
                </div>
              </div>
              <div className='fe mt-4'>
                <Button
                  title='Logout'
                  type='button'
                  btnType='text'
                  onClick={() => history.push('/admin/home')}
                  style={{
                    borderRadius: '35px',
                    // width: '25%',
                    padding: '12px 30px',
                    borderRadius: '5px',
                  }}
                >
                  <IoLogOutOutline size='25' />
                </Button>
                <Button
                  title='Save Changes'
                  type='submit'
                  style={{
                    borderRadius: '35px',
                    boxShadow: '0px 15px 25px #00000029',
                    width: '35%',
                    padding: '12px 50px',
                    borderRadius: '5px',
                  }}
                />
              </div>
            </Form>
          </Formik>
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default EditProfileScreeen;
