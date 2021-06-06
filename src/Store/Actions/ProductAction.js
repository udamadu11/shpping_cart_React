import { ADD_PRODUCTS, ADD_TO_CART } from "../Action-Types/ActionTypes";

export const addProduct = (products) => ({
  type: ADD_PRODUCTS,
  payload: { products },
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
