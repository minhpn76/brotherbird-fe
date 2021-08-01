import { AppReducerType } from "./types";
import storage from "redux-persist/lib/storage";
import { createTransform } from "redux-persist";
import {ReduxState} from './types'

const Transform = createTransform(
  (inboundState, key) => {
    if (key === AppReducerType.COLLECTION) {
      return {
        status: ReduxState.INIT,
        ...inboundState,
        cart: [],
        itemRemoved: {},
        tempCart: [],
      };
    }
    return inboundState;
  },
  (outBoundState, key) => {
    return outBoundState;
  }
);

export const persistConfig = {
  timeout: process.env.NODE_ENV === "development" ? 0 : 30000,
  key: "root",
  storage,
  whitelist: [
    AppReducerType.LANGUAGE,
    AppReducerType.HOME,
    AppReducerType.FAQ,
    AppReducerType.COLLECTION,
    AppReducerType.LOADING_BAR,
  ],
  transforms: [Transform],
};