import appInitialState from "../app-state/app-initial-state";
import petsReducer from "./pets-reducer";
import cartReducer from "./cart-reducer";

export default reducer = (state = appInitialState, action) => {
    return {
      petsInfo: petsReducer(state.petsInfo, action),
      // carts: cartReducer(state.carts, action),
    };
  }
  