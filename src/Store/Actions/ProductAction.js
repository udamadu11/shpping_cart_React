import {
  ADD_PRODUCTS,
  ADD_TO_CART,
  ADD_CART,
  REMOVE_CART,
} from "../Action-Types/ActionTypes";

export const addProduct = (products) => ({
  type: ADD_PRODUCTS,
  payload: { products },
});

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: { id },
});

export const addCart = (id) => ({
  type: ADD_CART,
  payload: { id },
});

export const removeCart = (id) => ({
  type: REMOVE_CART,
  payload: { id },
});
