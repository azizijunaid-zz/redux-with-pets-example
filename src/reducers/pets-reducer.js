import {PETS_REQUEST, PETS_SUCCESS, PETS_ERROR} from '../actions/actions';
import {produce} from 'immer';

const petsReducer = produce((draft, action) => {
  switch (action.type) {
    case PETS_REQUEST:
      draft.isLoading = true;
      return;

    case PETS_SUCCESS:
      console.log('TCL: petsReducer -> action.payload', action.payload);
      draft.data = action.payload.response;
      draft.isLoading = false;
      draft.error = action.error;
      return;

    case PETS_ERROR:
      draft.loading = false;
      draft.error = action.error;

    default: {
      return draft;
    }
  }
});

export default petsReducer;
