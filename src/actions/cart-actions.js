import {CART_REQUEST, CART_SUCCESS, CART_ERROR} from './actions';

/* CART ACTIONS */
export function cartRequest() {
  return {type: CART_REQUEST, isLoading: true};
}

export function cartSuccess(response) {
  return {
    type: CART_SUCCESS,
    payload: {petsInfo: response},
    isLoading: false,
    error: '',
  };
}

export function cartError(error) {
  return {type: CART_ERROR, error};
}
