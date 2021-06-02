import axios from 'axios';
import {
  GET_COUNTRY_LIST_FAIL,
  GET_COUNTRY_LIST_SUCCESS,
  GET_COUNTRY_LIST_REQUEST,
  GET_STATE_LIST_REQUEST,
  GET_STATE_LIST_SUCCESS,
  GET_CITY_LIST_SUCCESS,
  GET_CITY_LIST_REQUEST,
  GET_INDUSTRY_LIST_REQUEST,
  GET_INDUSTRY_LIST_SUCCESS,
} from '../constants/setupStoreConstants';

export const getCountryList = () => async (dispatch) => {
  dispatch({ type: GET_COUNTRY_LIST_REQUEST });
  const { data } = await axios.get('/GetCountriesList');
  dispatch({ type: GET_COUNTRY_LIST_SUCCESS, payload: data });
};

export const getStateList = (countryId) => async (dispatch) => {
  dispatch({ type: GET_STATE_LIST_REQUEST });
  const { data } = await axios.get(`/GetStateList?CountryId=${countryId}`);
  dispatch({ type: GET_STATE_LIST_SUCCESS, payload: data });
};

export const getCityList = (stateId) => async (dispatch) => {
  dispatch({ type: GET_CITY_LIST_REQUEST });
  const { data } = await axios.get(`/GetCitiesList?StateId=${stateId}`);
  dispatch({ type: GET_CITY_LIST_SUCCESS, payload: data });
};

export const getIndustryList = () => async (dispatch) => {
  dispatch({ type: GET_INDUSTRY_LIST_REQUEST });
  const { data } = await axios.get(`/GetIndustries`);
  dispatch({ type: GET_INDUSTRY_LIST_SUCCESS, payload: data });
};
