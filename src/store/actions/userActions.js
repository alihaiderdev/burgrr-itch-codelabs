import axios from 'axios';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_FORGET_PASSWORD_REQUEST,
  USER_FORGET_PASSWORD_SUCCESS,
  USER_FORGET_PASSWORD_FAIL,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_FAIL,
} from '../constants/userConstants';

import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';

const history = createBrowserHistory();

// function Pushhistory() {
//   //   const history = useHistory();
//   history.push('/admin/setup-store');
// }

export const login = (emailAddress, password) => async (dispatch) => {
  console.log('action : ', { emailAddress, password });
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post('/Login', { emailAddress, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    console.log('Response : ', data);
    localStorage.setItem('userInfo', JSON.stringify(data.result));
    if (data.result !== null)
      localStorage.setItem('auth-token', JSON.stringify(data.result.token));
  } catch (e) {
    console.log('error : ', e.message);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const forgetPassword = (emailAddress) => async (dispatch) => {
  try {
    dispatch({ type: USER_FORGET_PASSWORD_REQUEST });
    const { data } = await axios.post('/ForgotPassword', { emailAddress });
    console.log('action : ', { emailAddress });
    dispatch({ type: USER_FORGET_PASSWORD_SUCCESS, payload: data });
  } catch (e) {
    console.log('error : ', e);
    dispatch({
      type: USER_FORGET_PASSWORD_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_CHANGE_PASSWORD_REQUEST });
      const { data } = await axios.post('/ChangePassword', {
        oldPassword,
        newPassword,
      });
      console.log('action : ', { oldPassword, newPassword });
      dispatch({ type: USER_FORGET_PASSWORD_SUCCESS, payload: data });
    } catch (e) {
      console.log('error : ', e);
      dispatch({
        type: USER_CHANGE_PASSWORD_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
  };
