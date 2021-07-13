import { persistReducer, persistStore } from "redux-persist";
import sagaMiddleware, { setupMiddleware } from "./middleware";

import {
  configureStore,
} from "@reduxjs/toolkit";
import { persistConfig } from "./options";
import rootReducer from "./reducers";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

setupMiddleware();

let persistor = persistStore(store);

export { store, persistor };
