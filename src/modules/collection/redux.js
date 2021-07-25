import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux/types";

const initialState = {
    collections: [],
    products: [],
    product: {},
    cart: [],
    tempCart: [],
    status: ReduxState.INIT
}

const collectionSlice = createSlice({
    name: "collectionSlice",
    initialState,
    reducers: {
      fetchCollections: (state, action) => {
        return {
          ...state,
          collections: [],
          status: ReduxState.LOADING
        }
      },
      fetchCollectionsSuccess: (
        state,
        action
      ) => {
        return {
          ...state,
          collections: action.payload
        }
      },
      fetchCollectionsFailed: (state, action) => {
        return { 
          ...state, 
          collections: [],
          status: ReduxState.ERROR 
        };
      },
      //Products by collection
      fetchProductsByCollection: (state, action) => {
        return {
          ...state,
          products: [],
          status: ReduxState.LOADING
        }
      },
      fetchProductsByCollectionSuccess: (
        state,
        action
      ) => {
        return {
          ...state,
          products: action.payload,
          status: ReduxState.SUCCESS
        }
      },
      fetchProductsByCollectionFailed: (state, action) => {
        return {
          ...state,
          products: [],
          status: ReduxState.ERROR
        }
      },
      //Product Item
      fetchProduct: (state, action) => {
        return {
          ...state,
          product: [],
          status: ReduxState.LOADING,
          tempCart: []
        }
      },
      fetchProductSuccess: (
        state,
        action
      ) => {
        return {
          ...state,
          status: ReduxState.SUCCESS,
          product: action.payload
        }
      },
      fetchProductFailed: (state, action) => {
        return {
          ...state,
          product: [],
          status: ReduxState.ERROR
        }
      },
      //cart
      fetchCart: (state, action) => {
        return {
          ...state,
          status: ReduxState.LOADING
        }
      },
      fetchCartSuccess: (
        state,
        action
      ) => {
        const {temp, cloneCart} = action.payload
        if (temp) {
          return {
            ...state,
            tempCart: cloneCart,
            status: ReduxState.SUCCESS
          }
        }
        return {
          ...state,
          cart: cloneCart,
          status: ReduxState.SUCCESS
        }
      },
      fetchCartFailed: (state, action) => {
        return {
          ...state,
          cart: [],
          status: ReduxState.ERROR
        }
      },
      //checkout
      fetchCheckout: (state, action) => {
        return {
          ...state,
          status: ReduxState.LOADING
        }
      },
      fetchCheckoutSuccess: (
        state,
        action
      ) => {
        return {
          ...state,
          checkout: action.payload,
          status: ReduxState.SUCCESS
        }
      },
      fetchCheckoutFailed: (state, action) => {
        return {
          ...state,
          checkout: false,
          status: ReduxState.ERROR
        }
      },
    },
  });

  export const {
    fetchCollections,
    fetchCollectionsSuccess,
    fetchCollectionsFailed,
    fetchProductsByCollection,
    fetchProductsByCollectionSuccess,
    fetchProductsByCollectionFailed,
    fetchProduct,
    fetchProductSuccess,
    fetchProductFailed,
    fetchCart,
    fetchCartSuccess,
    fetchCartFailed,
    fetchCheckout,
    fetchCheckoutSuccess,
    fetchCheckoutFailed
  } = collectionSlice.actions;
  
  export const selectorCollection = (state) => state.collection;
  export default collectionSlice.reducer;