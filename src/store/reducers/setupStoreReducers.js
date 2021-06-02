import {
  GET_CITY_LIST_REQUEST,
  GET_CITY_LIST_SUCCESS,
  GET_COUNTRY_LIST_REQUEST,
  GET_COUNTRY_LIST_SUCCESS,
  GET_INDUSTRY_LIST_REQUEST,
  GET_INDUSTRY_LIST_SUCCESS,
  GET_STATE_LIST_REQUEST,
  GET_STATE_LIST_SUCCESS,
} from '../constants/setupStoreConstants';

export const countryListReducer = (
  state = { countries: {} },
  { payload, type }
) => {
  switch (type) {
    case GET_COUNTRY_LIST_REQUEST:
      return { ...state, loading: true };
    case GET_COUNTRY_LIST_SUCCESS:
      return { loading: false, countries: payload };
    default:
      return state;
  }
};

export const stateListReducer = (state = { states: {} }, { payload, type }) => {
  switch (type) {
    case GET_STATE_LIST_REQUEST:
      return { ...state, loading: true };
    case GET_STATE_LIST_SUCCESS:
      return { loading: false, states: payload };
    default:
      return state;
  }
};

export const cityListReducer = (state = { cities: {} }, { payload, type }) => {
  switch (type) {
    case GET_CITY_LIST_REQUEST:
      return { ...state, loading: true };
    case GET_CITY_LIST_SUCCESS:
      return { loading: false, cities: payload };
    default:
      return state;
  }
};

export const industryListReducer = (
  state = { industries: {} },
  { payload, type }
) => {
  switch (type) {
    case GET_INDUSTRY_LIST_REQUEST:
      return { ...state, loading: true };
    case GET_INDUSTRY_LIST_SUCCESS:
      return { loading: false, industries: payload };
    default:
      return state;
  }
};
