import React, { useState } from 'react';
import '../../styles/screens/admin/forgetPassword.css';
// import '../../styles/screens/admin/login.css';

import { Form } from 'react-bootstrap';
import { BiEnvelope } from 'react-icons/bi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/formComponents/Button';
import AlertModal from '../../components/modals/AlertModal';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';

const ForgetPasswordScreen = ({ history }) => {
  ScrollToTop();
  const [alertResetLinkModal, setAlertResetLinkModal] = useState(false);
  const openResetLinkAlertModal = () => setAlertResetLinkModal(true);
  const closeResetLinkAlertModal = () => setAlertResetLinkModal(false);

  const [alertResetPasswordModal, setAlertResetPasswordModal] = useState(false);
  const openResetPasswordAlertModal = () => setAlertResetPasswordModal(true);
  const closeResetPasswordAlertModal = () => setAlertResetPasswordModal(false);

  const [forgetPasswordInfo, setForgetPasswordInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    forgetPasswordInputFields: false,
  });

  const {
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    forgetPasswordInputFields,
  } = forgetPasswordInfo;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForgetPasswordInfo({
      ...forgetPasswordInfo,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setForgetPasswordInfo({
      ...forgetPasswordInfo,
      showPassword: !showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setForgetPasswordInfo({
      ...forgetPasswordInfo,
      showConfirmPassword: !showConfirmPassword,
    });
  };

  const resetLinkSubmitHandler = (e) => {
    e.preventDefault();
    setForgetPasswordInfo({
      ...forgetPasswordInfo,
      forgetPasswordInputFields: true,
    });
    console.log({
      email,
    });
    openResetLinkAlertModal();
  };

  const forgetPasswordSubmitHandler = (e) => {
    e.preventDefault();
    setForgetPasswordInfo({
      ...forgetPasswordInfo,
      forgetPasswordInputFields: true,
    });
    if (password === confirmPassword) {
      console.log({
        password,
        confirmPassword,
      });
      openResetPasswordAlertModal();
    } else {
      alert(
        `Your entered password (${password}) and confirmPassword (${confirmPassword}) are not same that's why you see this alert`
      );
    }
  };

  return (
    <>
      <AdminHeader />
      <div className='signupScreen forgetPasswordScreen container-85'>
        {!forgetPasswordInputFields ? (
          <Form onSubmit={resetLinkSubmitHandler} className='signupForm'>
            <div className='signupWrapper center'>
              <h1 className='um black'>Forgot Password</h1>
              <p className='um'>
                Enter your email id in below input field to get password reset
                link
              </p>
            </div>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                name='email'
                type='email'
                value={email}
                onChange={onChangeHandler}
                placeholder='someone@email.com'
              />
              <BiEnvelope className='envelopIcon' size='20px' />
            </Form.Group>

            <div className='signupBtnWrapper sb'>
              <Button
                title='Send Reset Link'
                type='submit'
                className='mb-4'
                style={{
                  borderRadius: '5px',
                  padding: '15px 50px',
                  marginBottom: '24px',
                }}
              />
            </div>
          </Form>
        ) : (
          <Form onSubmit={forgetPasswordSubmitHandler} className='signupForm'>
            <div className='signupWrapper center'>
              <h1 className='um black'>Forgot Password</h1>
              <p className='um'>
                Enter your email id in below input field to get password reset
                link
              </p>
            </div>

            <Form.Group controlId='password' className='mb-2'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                value={password}
                type={showPassword ? 'text' : 'password'}
                onChange={onChangeHandler}
                placeholder='......'
              />
              <button
                type='button'
                className='button'
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <AiFillEye size='20px' />
                ) : (
                  <AiFillEyeInvisible size='20px' />
                )}
              </button>
            </Form.Group>
            <Form.Group controlId='confirmPassword' className='mb-2'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name='confirmPassword'
                value={confirmPassword}
                type={showConfirmPassword ? 'text' : 'password'}
                onChange={onChangeHandler}
                placeholder='......'
              />
              <button
                type='button'
                className='button'
                onClick={handleClickShowConfirmPassword}
              >
                {showConfirmPassword ? (
                  <AiFillEye size='20px' />
                ) : (
                  <AiFillEyeInvisible size='20px' />
                )}
              </button>
            </Form.Group>

            <div className='signupBtnWrapper sb'>
              <Button
                title='Reset Password'
                type='submit'
                className='mb-4'
                style={{
                  borderRadius: '5px',
                  padding: '15px 50px',
                  margin: '24px 0',
                }}
              />
            </div>
          </Form>
        )}
      </div>
      {email && (
        <AlertModal
          type='success'
          modalTitle='Reset Link Sent Successfully!'
          modalDescription='Reset Link Sent Successfully!'
          linkTitle={email}
          linkPath='https://mail.google.com/mail/u/0/#inbox'
          openAlertModal={alertResetLinkModal}
          closeAlertModal={closeResetLinkAlertModal}
          width={700}
          modalPosition={100}
          btn2Title='Check Email'
          btnColor='#24be59' // green
        />
      )}

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
    </>
  );
};

export default ForgetPasswordScreen;
