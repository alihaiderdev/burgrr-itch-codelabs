import React, { useState } from 'react';
import '../../styles/screens/admin/changePassword.css';

import { Formik, Form, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import AlertModal from '../../components/modals/AlertModal';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import InputField from '../../components/formComponents/InputField';
import AuthScreensWrapper from './../../components/admin/AuthScreensWrapper';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { changePassword } from '../../store/actions/userActions';

const ChangePasswordScreen = () => {
  ScrollToTop();

  const [alertChangePasswordModal, setAlertChangePasswordModal] =
    useState(false);
  const openChangePasswordAlertModal = () => setAlertChangePasswordModal(true);
  const closeChangePasswordAlertModal = () =>
    setAlertChangePasswordModal(false);

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    newConfirmPassword: '',
  };

  const dispatch = useDispatch();
  const userChangePassword = useSelector((state) => state.userChangePassword);
  const {
    loading,
    changePassword: { passwordChanged },
    error,
  } = userChangePassword;

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Required!'),
    newPassword: Yup.string().required('Required!'),
    newConfirmPassword: Yup.string().required('Required!'),
  });

  const onSubmit = (values, { resetForm }) => {
    const { oldPassword, newPassword, newConfirmPassword } = values;
    if (newPassword === newConfirmPassword) {
      console.log('Form Data : ', values);
      // onSubmitProps.resetForm();
      openChangePasswordAlertModal();
      dispatch(changePassword(oldPassword, newPassword));
    } else {
      alert(
        `Your entered password (${newPassword}) and confirmPassword (${newConfirmPassword}) are not same that's why you see this alert`
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
      <div className='forgetPasswordScreen container-85 center'>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <AuthScreensWrapper
          title='Change Password'
          descrption='Enter old and new password to change your current password'
          style={{ width: '35%', padding: '50px' }}
        >
          {/* <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          > */}
          <form onSubmit={formik.handleSubmit}>
            <InputField
              type='password'
              name='oldPassword'
              label='Old Password'
              placeholder='.....'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
              touched={formik.touched.oldPassword}
              errors={formik.errors.oldPassword}
            />
            <InputField
              type='password'
              name='newPassword'
              label='New Password'
              placeholder='.....'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
              touched={formik.touched.newPassword}
              errors={formik.errors.newPassword}
            />
            <InputField
              type='password'
              name='newConfirmPassword'
              label='New Confirm Password'
              placeholder='.....'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newConfirmPassword}
              touched={formik.touched.newConfirmPassword}
              errors={formik.errors.newConfirmPassword}
            />
            <div className='center my-4'>
              <Button
                title='Change Password'
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
              modalTitle='Password Change Succeffully!'
              modalDescription='Your password has been updated, now you can access your account using new password'
              openAlertModal={alertChangePasswordModal}
              closeAlertModal={closeChangePasswordAlertModal}
              width={800}
              modalPosition={100}
              btn2Title='Okay'
              btnColor='#24be59' // green
            />
          </form>
          {/* </Formik> */}
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default ChangePasswordScreen;
