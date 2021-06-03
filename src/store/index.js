import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import {
  userChangePasswordReducer,
  userForgotPasswordReducer,
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducers';

import {
  allListsReducer,
  cityListReducer,
  countryListReducer,
  industryListReducer,
  stateListReducer,
} from './reducers/setupStoreReducers';

const persistConfig = {
  key: 'root',
  storage,
  // in this way we can only persist that reducers into local storage that we want
  whitelist: ['userRegister', 'userLogin'],
};

// const userInfoFromStorage = localStorage.getItem('login-user-info')
//   ? JSON.parse(localStorage.getItem('login-user-info'))
//   : null;

// const tokenFromStorage = localStorage.getItem('auth-token')
//   ? JSON.parse(localStorage.getItem('auth-token'))
//   : null;

// const initialState = {
//   userLogin: { loginUserInfo: userInfoFromStorage },
// };

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userForgotPassword: userForgotPasswordReducer,
  userChangePassword: userChangePasswordReducer,
  countryList: countryListReducer,
  stateList: stateListReducer,
  cityList: cityListReducer,
  industryList: industryListReducer,
  allLists: allListsReducer,
});

// const middleware = [thunk];
// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

// export const reduxStore = () => {
let store = createStore(
  persistedReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);
export const reduxStore = { store, persistor };
// };
