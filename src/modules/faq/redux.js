import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../redux/types";

const initialState = {
    faq: {},
    status: ReduxState.INIT
}

const faqSlice = createSlice({
    name: "faqSlice",
    initialState,
    reducers: {
      fetchContentFAQ: (state, action) => {
        state.status = ReduxState.LOADING;
      },
      fetchContentFAQSuccess: (
        state,
        action
      ) => {
        state.status = ReduxState.SUCCESS;
        state.faq = action.payload
      },
      fetchContentFAQFailed: (state, action) => {
        state = { ...initialState, status: ReduxState.ERROR };
      },
    },
  });

  export const {
    fetchContentFAQ,
    fetchContentFAQSuccess,
    fetchContentFAQFailed
  } = faqSlice.actions;
  export const selectorFAQ = (state) => state.faq;
  export default faqSlice.reducer;