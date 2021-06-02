import React, { useState } from 'react';
import '../../styles/screens/admin/forgotPassword.css';

import { BiEnvelope } from 'react-icons/bi';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import AlertModal from '../../components/modals/AlertModal';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import InputField from '../../components/formComponents/InputField';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';

const ForgotPasswordScreen = ({ history }) => {
  ScrollToTop();

  const [forgetPasswordInputFields, setForgetPasswordInputFields] =
    useState(false);

  const [alertResetLinkModal, setAlertResetLinkModal] = useState(false);
  const openResetLinkAlertModal = () => {
    setAlertResetLinkModal(true);
  };
  const closeResetLinkAlertModal = () => setAlertResetLinkModal(false);

  const [alertResetPasswordModal, setAlertResetPasswordModal] = useState(false);
  const openResetPasswordAlertModal = () => setAlertResetPasswordModal(true);
  const closeResetPasswordAlertModal = () => setAlertResetPasswordModal(false);

  let formikEmail = '';

  const initialValuesEmail = {
    email: '',
  };

  const validationSchemaEmail = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required!'),
  });

  const onSubmitEmail = (values) => {
    const { email } = values;
    console.log('Form Data : ', values);
    if (email !== '') {
      openResetLinkAlertModal();
    }
  };

  const formikE = useFormik({
    initialValuesEmail,
    validationSchemaEmail,
    onSubmitEmail,
  });

  console.log('formikE : ', formikE);

  const initialValuesPassword = {
    password: '',
    confirmPassword: '',
  };

  const validationSchemaPassword = Yup.object({
    password: Yup.string().required('Required!'),
    confirmPassword: Yup.string().required('Required!'),
  });

  const onSubmitPassword = (values, { resetForm }) => {
    const { password, confirmPassword } = values;
    if (password === confirmPassword) {
      console.log('Form Data : ', values);
      // resetForm();
      openResetPasswordAlertModal();
    } else {
      alert(
        `Your entered password (${password}) and confirmPassword (${confirmPassword}) are not same that's why you see this alert`
      );
    }
  };

  const formik = useFormik({
    initialValuesPassword,
    validationSchemaPassword,
    onSubmitPassword,
  });

  console.log('formikP : ', formik);

  return (
    <>
      <AdminHeader />
      <div className='forgetPasswordScreen container-85 center'>
        {!forgetPasswordInputFields ? (
          <AuthScreensWrapper
            title='Forgot Password'
            descrption='Enter your email id in below input field to get password reset link'
            style={{ width: '35%', padding: '50px' }}
          >
            {/* <Formik
              initialValues={initialValuesEmail}
              validationSchema={validationSchemaEmail}
              onSubmit={onSubmitEmail}
            > */}

            <form onSubmit={formikE.handleSubmit}>
              <InputField
                type='email'
                name='email'
                label='Email'
                placeholder='someone@gmail.com'
                onChange={formikE.handleChange}
                onBlur={formikE.handleBlur}
                value={formikE.values.email}
                touched={formikE.touched.email}
                errors={formikE.errors.email}
              >
                <BiEnvelope className='grayIcon ' size='20px' />
              </InputField>
              <div className='center my-4'>
                <Button
                  title='Send Reset Link'
                  type='submit'
                  style={{
                    borderRadius: '5px',
                    padding: '15px 50px',
                    marginTop: '24px',
                    fontFamily: 'Ubunturegular',
                    width: '70%',
                  }}
                />
              </div>
              {formikEmail && (
                <AlertModal
                  type='success'
                  modalTitle='Reset Link Sent Successfully!'
                  modalDescription='Reset Link Sent Successfully!'
                  linkTitle={formikEmail}
                  openAlertModal={alertResetLinkModal}
                  closeAlertModal={() => {
                    closeResetLinkAlertModal();
                    setForgetPasswordInputFields(true);
                  }}
                  width={700}
                  modalPosition={100}
                  btn2Title='Check Email'
                  btnColor='#24be59' // green
                />
              )}
            </form>
            {/* </Formik> */}
          </AuthScreensWrapper>
        ) : (
          <AuthScreensWrapper
            title='Forgot Password'
            descrption='Enter your email id in below input field to get password reset link'
            style={{ width: '35%', padding: '50px' }}
          >
            {/* <Formik
              initialValues={initialValuesPassword}
              validationSchema={validationSchemaPassword}
              onSubmit={onSubmitPassword}
            > */}
            <form onSubmit={formik.handleSubmit}>
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
              />
              <div className='center my-4'>
                <Button
                  title='Reset Password'
                  type='submit'
                  style={{
                    borderRadius: '5px',
                    padding: '15px 50px',
                    marginTop: '24px',
                    fontFamily: 'Ubunturegular',
                    width: '70%',
                  }}
                />
              </div>
              <AlertModal
                type='success'
                modalTitle='Password Reset Succeffully!'
                modalDescription='Your password has been updated, now you can access your account using new password'
                openAlertModal={alertResetPasswordModal}
                closeAlertModal={closeResetPasswordAlertModal}
                width={800}
                modalPosition={100}
                btn2Title='Okay'
                btnColor='#24be59' // green
              />
            </form>
            {/* </Formik> */}
          </AuthScreensWrapper>
        )}
      </div>
    </>
  );
};

export default ForgotPasswordScreen;
