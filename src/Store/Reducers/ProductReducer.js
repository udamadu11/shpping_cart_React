import { ADD_PRODUCTS, ADD_TO_CART } from "../Action-Types/ActionTypes";

const initialState = {
  products: [],
  bucket: [],
  total: 0,
};

function reducer(state = initialState, { type, payload }) {
  if (type === ADD_PRODUCTS) {
    return {
      ...state,
      products: payload,
    };
  } else if (type === ADD_TO_CART) {
    let newItem = state.products.products.find(
      (item) => item.id === payload.id
    );
    let exixtItem = state.bucket.find((item) => item.id === payload.id);

    if (exixtItem) {
      newItem.quantity += 1;
      return {
        ...state,
        total: state.total + newItem.price,
      };
    } else {
      newItem.quantity = 1;
      let newTotal = state.total + newItem.price;
      return {
        ...state,
        bucket: [...state.bucket, newItem],
        total: newTotal,
      };
    }
  } else {
    return state;
  }
}
export default reducer;
