import { ADD_PRODUCTS, ADD_TO_CART } from "../Action-Types/ActionTypes";

const initialState = {
  products: [],
};

function reducer(state = initialState, { type, payload }) {
  if (type === ADD_PRODUCTS) {
    return {
      ...state,
      products: payload,
    };
  } else {
    return state;
  }
}
export default reducer;
