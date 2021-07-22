import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux/types";

const initialState = {
    collections: [],
    products: [],
    status: ReduxState.INIT
}

const collectionSlice = createSlice({
    name: "collectionSlice",
    initialState,
    reducers: {
      fetchCollections: (state, action) => {
        state.status = ReduxState.LOADING;
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
        state.status = ReduxState.LOADING;
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
    },
  });

  export const {
    fetchCollections,
    fetchCollectionsSuccess,
    fetchCollectionsFailed,
    fetchProductsByCollection,
    fetchProductsByCollectionSuccess,
    fetchProductsByCollectionFailed
  } = collectionSlice.actions;
  
  export const selectorCollection = (state) => state.collection;
  export default collectionSlice.reducer;