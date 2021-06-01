export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    // user register hota saath hi login bhi ho jaega is nicha wali line of code ki wajah sa
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
};
