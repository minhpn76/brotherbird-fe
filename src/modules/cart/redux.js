import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux/types";

const initialState = {
    bill: {},
    status: ReduxState.INIT,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    saveReceipt: (state, action) => {
      return {
        ...state,
        status: ReduxState.LOADING,
      };
    },
    saveReceiptSuccess: (state, action) => {
      return {
        ...state,
        status: ReduxState.SUCCESS,
        bill: action.payload
      };
    },
    saveReceiptFailed: (state, action) => {
      return {
        ...state,
        status: ReduxState.ERROR,
      };
    },
  },
});
export const { saveReceipt, saveReceiptSuccess, saveReceiptFailed } =
  cartSlice.actions;

export const selectorCart = (state) => state.cart;
export default cartSlice.reducer;
