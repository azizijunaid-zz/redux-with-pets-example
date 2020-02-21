import {PETS_REQUEST, PETS_SUCCESS, PETS_ERROR} from '../actions/actions';

import PetsService from '../services/PetsService';

/* PETS ACTIONS */
export function petsRequest() {
  return {type: PETS_REQUEST, isLoading: true};
}

export function petsSuccess(response) {
  return {type: PETS_SUCCESS, payload: {response}, isLoading: false, error: ''};
}

export function petsError(error) {
  return {type: PETS_ERROR, error};
}

/* ACTION CREATORS */

export function getPets() {
  let trace = '';
  return async (dispatch, getState) => {
    const state = getState();
    trace += ' in action creator ';
    console.log('TCL: getPets -> state', state);
    trace += ' dispatch petsRequest';
    dispatch(petsRequest());
    try {
      trace += ' going to call PetsService.getALLPets() ';
      const response = await PetsService.getALLPets();
      console.log('TCL: getPets -> response', response);
      // const animals = response.data.animals;
      const animals = response.data;
      if (!response || response.error) {
        trace += ' response: ' + response;
        throw response.error;
      } else {
        trace += ' dispatch petsSuccess';
        dispatch(petsSuccess(animals));
      }
    } catch (error) {
      trace += ' dispatch petsError ' + error;
      console.log('TCL: getPets -> trace', trace);
      dispatch(petsError(error));
    }
  };
}
