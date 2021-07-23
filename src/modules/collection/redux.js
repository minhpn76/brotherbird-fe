import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux/types";

const initialState = {
    collections: [],
    products: [],
    product: {},
    status: ReduxState.INIT
}

const collectionSlice = createSlice({
    name: "collectionSlice",
    initialState,
    reducers: {
      fetchCollections: (state, action) => {
        state = { ...initialState, status: ReduxState.LOADING };
      },
      fetchCollectionsSuccess: (
        state,
        action
      ) => {
        state.status = ReduxState.SUCCESS;
        state.collections = action.payload
      },
      fetchCollectionsFailed: (state, action) => {
        state = { ...initialState, status: ReduxState.ERROR };
      },
      //Products by collection
      fetchProductsByCollection: (state, action) => {
        state = { ...initialState, status: ReduxState.LOADING };
      },
      fetchProductsByCollectionSuccess: (
        state,
        action
      ) => {
        state.status = ReduxState.SUCCESS;
        state.products = action.payload
      },
      fetchProductsByCollectionFailed: (state, action) => {
        state = { ...initialState, status: ReduxState.ERROR };
      },
      //Product Item
      fetchProduct: (state, action) => {
        state = { ...initialState, status: ReduxState.LOADING };
      },
      fetchProductSuccess: (
        state,
        action
      ) => {
        state.status = ReduxState.SUCCESS;
        state.product = action.payload
      },
      fetchProductFailed: (state, action) => {
        state = { ...initialState, status: ReduxState.ERROR };
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
  } = collectionSlice.actions;
  
  export const selectorCollection = (state) => state.collection;
  export default collectionSlice.reducer;