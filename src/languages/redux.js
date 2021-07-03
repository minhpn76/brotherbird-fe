import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const LanguageType = {
  VI : "VI",
  EN : "EN",
}

export const Language = {
  [LanguageType.VI]: "vi",
  [LanguageType.EN]: "en",
};

const initialState = {
  lang: Language[LanguageType.VI],
  type: LanguageType.VI,
};

const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.type = action.payload;
      state.lang = Language[action.payload];
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
