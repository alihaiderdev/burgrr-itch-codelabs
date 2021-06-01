import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = { user: {} }, { action }) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
