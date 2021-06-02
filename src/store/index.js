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
  cityListReducer,
  countryListReducer,
  industryListReducer,
  stateListReducer,
} from './reducers/setupStoreReducers';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userForgotPassword: userForgotPasswordReducer,
  userChangePassword: userChangePasswordReducer,
  countryList: countryListReducer,
  stateList: stateListReducer,
  cityList: cityListReducer,
  industryList: industryListReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
