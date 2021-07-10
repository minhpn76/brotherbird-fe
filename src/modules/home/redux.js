import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux/types";

const initialState = {
    data: {
        shop: {}
    },
    status: ReduxState.INIT
}

const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
      shopStart: (state, action) => {
        state.status = ReduxState.LOADING;
      },
      shopSuccess: (
        state,
        action
      ) => {
        state.status = ReduxState.SUCCESS;
        state.data.shop = action.payload
      },
      shopFailed: (state, action) => {
        state = { ...initialState, status: ReduxState.ERROR };
      },
    },
  });

  export const {
    shopStart,
    shopSuccess,
    shopFailed
  } = homeSlice.actions;
  export default homeSlice.reducer;