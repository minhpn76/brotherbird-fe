import { all } from "redux-saga/effects";
import authSaga from "../modules/auth/saga";
import homeSaga from "../modules/home/saga";
import faqSaga from "../modules/faq/saga";
import collectionSaga from "../modules/collection/saga";


export default function* rootSaga() {
  yield all([
    authSaga(), homeSaga(), 
    faqSaga(), collectionSaga()
  ]);
}
