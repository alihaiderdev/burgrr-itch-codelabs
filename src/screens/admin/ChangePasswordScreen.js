import React, { useState } from 'react';
import '../../styles/screens/admin/changePassword.css';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import AlertModal from '../../components/modals/AlertModal';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';
import InputField from '../../components/formComponents/InputField';
import AuthScreensWrapper from './../../components/admin/AuthScreensWrapper';

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

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Required!'),
    newPassword: Yup.string().required('Required!'),
    newConfirmPassword: Yup.string().required('Required!'),
  });

  const onSubmit = (values, onSubmitProps) => {
    const { newPassword, newConfirmPassword } = values;
    if (newPassword === newConfirmPassword) {
      console.log('Form Data : ', values);
      // onSubmitProps.resetForm();
      openChangePasswordAlertModal();
    } else {
      alert(
        `Your entered password (${newPassword}) and confirmPassword (${newConfirmPassword}) are not same that's why you see this alert`
      );
    }
  };

  return (
    <>
      <AdminHeader />
      <div className='forgetPasswordScreen container-85 center'>
        <AuthScreensWrapper
          title='Change Password'
          descrption='Enter old and new password to change your current password'
          style={{ width: '35%', padding: '50px' }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log({ formik });
              return (
                <Form>
                  <InputField
                    type='password'
                    name='oldPassword'
                    label='Old Password'
                    placeholder='.....'
                  />
                  <InputField
                    type='password'
                    name='newPassword'
                    label='New Password'
                    placeholder='.....'
                  />
                  <InputField
                    type='password'
                    name='newConfirmPassword'
                    label='New Confirm Password'
                    placeholder='.....'
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
                </Form>
              );
            }}
          </Formik>
        </AuthScreensWrapper>
      </div>
    </>
  );
};

export default ChangePasswordScreen;
