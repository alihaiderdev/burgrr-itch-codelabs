import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_FORGET_PASSWORD_REQUEST,
  USER_FORGET_PASSWORD_SUCCESS,
  USER_FORGET_PASSWORD_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      console.log({ payload });
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const userForgetPasswordReducer = (
  state = { emailAddress: '' },
  { payload, type }
) => {
  switch (type) {
    case USER_FORGET_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case USER_FORGET_PASSWORD_SUCCESS:
      console.log({ payload });
      return { loading: false, userInfo: payload };
    case USER_FORGET_PASSWORD_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const userChangePasswordReducer = (
  state = { changePassword: {} },
  { payload, type }
) => {
  switch (type) {
    case USER_FORGET_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case USER_FORGET_PASSWORD_SUCCESS:
      console.log({ payload });
      return { loading: false, changePassword: payload };
    case USER_FORGET_PASSWORD_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
