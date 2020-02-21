import {CART_REQUEST, CART_SUCCESS, CART_ERROR} from '../actions/actions';
import {produce} from 'immer';

const cartReducer = produce((draft, action) => {
  switch (action.type) {
    case CART_REQUEST:
      draft.isLoading = true;
      return;

    case CART_SUCCESS:
      draft.petsInfo = action.payload.petsInfo;
      draft.isLoading = action.isLoading;
      draft.error = action.error;
      return;

    case CART_ERROR:
      draft.loading = false;
      draft.error = action.error;

    default: {
      return draft;
    }
  }
});

export default cartReducer;
