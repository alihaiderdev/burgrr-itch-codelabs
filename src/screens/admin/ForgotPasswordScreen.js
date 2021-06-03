import React, { useState } from 'react';
import '../../styles/screens/admin/forgotPassword.css';

import { BiEnvelope } from 'react-icons/bi';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import AlertModal from '../../components/modals/AlertModal';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import InputField from '../../components/formComponents/InputField';
import AuthScreensWrapper from '../../components/admin/AuthScreensWrapper';
import { forgotPassword } from '../../store/actions/userActions';

const EmailScreen = ({ changeToForgotPasswordScreen }) => {
  const [alertResetLinkModal, setAlertResetLinkModal] = useState(false);
  const openResetLinkAlertModal = () => setAlertResetLinkModal(true);
  const closeResetLinkAlertModal = () => setAlertResetLinkModal(false);

  const dispatch = useDispatch();
  const { forgotPass } = useSelector((state) => state.userForgotPassword);

  const [formikEmail, setFormikEmail] = useState('');

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required!'),
  });

  const onSubmit = (values) => {
    const { email } = values;
    setFormikEmail(email);
    console.log('Form Data : ', values);
    dispatch(forgotPassword(email));
    openResetLinkAlertModal();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log('formikE : ', formik);

  console.log({ formikEmail });

  return (
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
      {formikEmail !== '' && (
        <AlertModal
          type='success'
          modalTitle='Reset Link Sent Successfully!'
          modalDescription='Reset Link Sent Successfully!'
          linkTitle={formikEmail}
          openAlertModal={alertResetLinkModal}
          closeAlertModal={() => {
            closeResetLinkAlertModal();
            changeToForgotPasswordScreen();
          }}
          width={700}
          modalPosition={100}
          btn2Title='Check Email'
          btnColor='#24be59' // green
        />
      )}
    </form>
  );
};

const PasswordScreen = () => {
  const [alertResetPasswordModal, setAlertResetPasswordModal] = useState(false);
  const openResetPasswordAlertModal = () => setAlertResetPasswordModal(true);
  const closeResetPasswordAlertModal = () => setAlertResetPasswordModal(false);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string().required('Required!'),
    confirmPassword: Yup.string().required('Required!'),
  });

  const onSubmit = (values, { resetForm }) => {
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
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log('formikP : ', formik);

  return (
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
  );
};

const ForgotPasswordScreen = ({ history }) => {
  ScrollToTop();

  const [forgetPasswordInputFields, setForgetPasswordInputFields] =
    useState(false);

  const changeToForgotPasswordScreen = () => setForgetPasswordInputFields(true);

  return (
    <>
      <AdminHeader />
      <div className='forgetPasswordScreen container-85 center'>
        <AuthScreensWrapper
          title='Forgot Password'
          descrption='Enter your email id in below input field to get password reset link'
          style={{ width: '35%', padding: '50px' }}
        >
          {!forgetPasswordInputFields ? (
            <EmailScreen
              changeToForgotPasswordScreen={changeToForgotPasswordScreen}
            />
          ) : (
            <PasswordScreen />
          )}
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default ForgotPasswordScreen;
