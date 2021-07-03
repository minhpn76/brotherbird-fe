import { all } from "redux-saga/effects";
import authSaga from "../modules/auth/saga";
import homeSaga from "../modules/home/saga";

export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}
