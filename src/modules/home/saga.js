import { showLoading, hideLoading } from "react-redux-loading-bar";
import {
  all,
  put,
  takeLatest,
} from "redux-saga/effects";
import { shopFailed, shopStart, shopSuccess } from "./redux";

function* shopSaga(action) {
  try {
    yield put(showLoading())
    yield put({ type: shopSuccess, payload: action.payload });
  } catch (error) {
    yield put({ type: shopFailed });
  } finally {
    yield put(hideLoading())
  }
}

function* watchShop() {
  yield takeLatest(shopStart.type, shopSaga);
}

export default function* homeSaga() {
    yield all([watchShop()]);
  }