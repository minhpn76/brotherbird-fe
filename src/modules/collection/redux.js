import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux/types";

const initialState = {
    collections: {},
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
        state.faq = action.payload
      },
      fetchCollectionsFailed: (state, action) => {
        state = { ...initialState, status: ReduxState.ERROR };
      },
    },
  });

  export const {
    fetchCollections,
    fetchCollectionsSuccess,
    fetchCollectionsFailed
  } = collectionSlice.actions;
  export const selectorCollection = (state) => state.collection;
  export default collectionSlice.reducer;