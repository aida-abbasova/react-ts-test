import { createActions } from 'redux-actions';

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  FILTER_PRODUCTS,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_ERROR,
  FAVOURITE,
  FAVOURITE_ERROR,
  FAVOURITE_SUCCESS,
} from './constants';

export const {
  getProducts,
  getProductsSuccess,
  getProductsError, 
  filterProducts,
  filterProductsSuccess,
  filterProductsError,
  favourite,
  favouriteSuccess,
  favouriteError,
} = createActions(
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  FILTER_PRODUCTS,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_ERROR,
  FAVOURITE,
  FAVOURITE_ERROR,
  FAVOURITE_SUCCESS,
);
