import { AppReducerType } from "./types";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  timeout: process.env.NODE_ENV === "development" ? 0 : 30000,
  key: "root",
  storage,
  whitelist: [
    AppReducerType.LANGUAGE,
    AppReducerType.HOME,
  ],
//   transforms: [Transform],
};
