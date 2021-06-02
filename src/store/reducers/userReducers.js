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

export const userRegisterReducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userForgotPasswordReducer = (
  state = { forgotPass: {} },
  { payload, type }
) => {
  switch (type) {
    case USER_FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case USER_FORGOT_PASSWORD_SUCCESS:
      return { loading: false, forgotPass: payload };
    default:
      return state;
  }
};

export const userChangePasswordReducer = (
  state = { changePassword: {} },
  { payload, type }
) => {
  switch (type) {
    case USER_CHANGE_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case USER_CHANGE_PASSWORD_SUCCESS:
      return { loading: false, changePassword: payload };
    default:
      return state;
  }
};
