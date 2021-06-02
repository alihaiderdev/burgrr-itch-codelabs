import axios from 'axios';

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
  USER_EDIT_PROFILE_REQUEST,
  USER_EDIT_PROFILE_SUCCESS,
  USER_EDIT_PROFILE_FAIL,
} from '../constants/userConstants';

// import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';

// const history = createBrowserHistory();

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  const { data } = await axios.post('/api/users', { name, email, password });
  dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  localStorage.setItem('userInfo', JSON.stringify(data));
};

export const login = (emailAddress, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  const { data } = await axios.post('/Login', { emailAddress, password });
  dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  console.log('Response : ', data);

  if (data.result !== null) {
    localStorage.setItem('userInfo', JSON.stringify(data.result));
    // localStorage.setItem('auth-token', JSON.stringify(data.result.token));
  }
  if (data.response.responseCode === 0 && data.response.responseMessage) {
    toast.success(`${data.response.responseMessage}`, {
      position: 'top-right',
      autoClose: 5000,
      pauseOnHover: true,
    });
    // history.push('/admin/home');
  } else
    toast.error(`${data.response.responseMessage}`, {
      position: 'top-right',
      autoClose: 5000,
      pauseOnHover: true,
    });
};

export const forgotPassword = (emailAddress) => async (dispatch) => {
  dispatch({ type: USER_FORGOT_PASSWORD_REQUEST });
  const { data } = await axios.post('/ForgotPassword', { emailAddress });
  console.log('forgotPassword : ', data);
  dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS, payload: data });
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    dispatch({ type: USER_CHANGE_PASSWORD_REQUEST });
    const { data } = await axios.post('/ChangePassword', {
      oldPassword,
      newPassword,
    });
    console.log('action : ', { oldPassword, newPassword });
    dispatch({ type: USER_CHANGE_PASSWORD_SUCCESS, payload: data });
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
