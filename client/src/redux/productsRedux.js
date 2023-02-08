import axios from 'axios';
import { PRODUCT_URL } from '../cfg'

export const getProducts = ({product}) => product.data
export const getProducById = ({product}, id) => product.data.find(p => p.id === id);

const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS })

export const getAllProducts = () => {

  return async dispatch => {
    dispatch(startRequest());

    try {

     let res = await axios.get(PRODUCT_URL);
     dispatch(loadProducts(res.data));
     dispatch(endRequest());

    } catch(error) {
      dispatch(errorRequest(error.message));
    }
  }
}

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
}

export default function reducer(statePart = initialState, action = {}) {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: [ ...action.payload ]}
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart
  }
}