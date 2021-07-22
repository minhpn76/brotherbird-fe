import {AppReducerType} from "./types";
import homeReducer from '../modules/home/redux'
import faqReducer from '../modules/faq/redux'
import collectionReducer from '../modules/collection/redux'
import { combineReducers } from "redux";
import languageRecuder from "../languages/redux";
import { loadingBarReducer } from 'react-redux-loading-bar';


export default combineReducers({
  [AppReducerType.LANGUAGE]: languageRecuder,
  [AppReducerType.HOME]: homeReducer,
  [AppReducerType.FAQ]: faqReducer,
  [AppReducerType.COLLECTION]: collectionReducer,
  [AppReducerType.LOADING_BAR]: loadingBarReducer
});
