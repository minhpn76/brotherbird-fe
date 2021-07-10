import Storage from "../../helper/storage";
import { cloneDeep } from "lodash";
import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { RootState } from "../../redux/store";
import { shopFailed, shopStart, shopSuccess } from "./redux";

function* shopSaga(action) {
  try {
    yield put({ type: shopSuccess, payload: action.payload });
  } catch (error) {
    yield put({ type: shopFailed });
  }
}

function* watchShop() {
  yield takeLatest(shopStart.type, shopSaga);
}

export default function* homeSaga() {
    yield all([watchShop()]);
  }