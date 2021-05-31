// const yup = require('yup-password')(yup); // extend yup

import React, { useState } from 'react';
import '../../styles/screens/admin/editProfile.css';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BiEnvelope } from 'react-icons/bi';
import { IoLogOutOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { IoCameraSharp } from 'react-icons/io5';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';
import InputField from '../../components/formComponents/InputField';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import EditProfileImagePlacholder from '../../assets/icons/user.svg';

const { Dragger } = Upload;

const EditProfileScreeen = ({ history }) => {
  ScrollToTop();

  const [imageInfo, setImageInfo] = useState({ file: null, base64URL: '' });

  const { file, base64URL } = imageInfo;

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = '';
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log('Called', reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    let _file = e.target.files[0];
    getBase64(_file)
      .then((result) => {
        _file['base64'] = result;
        console.log('File Is', _file);
        setImageInfo({ base64URL: result, file: _file });
      })
      .catch((err) => {
        console.log(err);
      });
    setImageInfo({ ...imageInfo, file: _file });
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log('Form Data : ', values);
    let finalState = {
      ...values,
      imageUrl: base64URL,
    };
    console.log({ finalState });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Format').required('Required!'),
    password: Yup.string().required('Required!'),
    // profileImage: Yup.string().required('Required!'),
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
            {(formik) => {
              // console.log({ formik });
              return (
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
                        // disabled
                        // value='ali@gmail.com'
                      >
                        <BiEnvelope className='grayIcon icon' size='20px' />
                      </InputField>
                      <InputField
                        type='password'
                        name='password'
                        label='Password'
                        placeholder='.....'
                      />
                      <Link to='/admin/forget-password' className='blue'>
                        Change
                      </Link>
                    </div>
                    <div className='editProfileWrapper'>
                      <div class='image-upload'>
                        <label for='file-input'>
                          {base64URL && base64URL.length > 0 ? (
                            <>
                              <div className='imageWrapper'>
                                <img
                                  src={base64URL}
                                  alt='Profile Pic'
                                  className='profileImage'
                                />
                                <div className='uploadIcon center'>
                                  <IoCameraSharp size='40px' color='white' />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className='imageWrapper'>
                                <img
                                  src={EditProfileImagePlacholder}
                                  alt='EditProfileImagePlacholder'
                                  className='profileImage'
                                />
                                <div className='uploadIcon center'>
                                  <IoCameraSharp size='40px' color='white' />
                                </div>
                              </div>
                            </>
                          )}
                        </label>
                        <input
                          id='file-input'
                          accept='image/*'
                          type='file'
                          onChange={handleFileInputChange}
                        />
                      </div>
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
              );
            }}
          </Formik>
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default EditProfileScreeen;
