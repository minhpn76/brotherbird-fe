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
import {saveReceipt, saveReceiptSuccess, saveReceiptFailed} from './redux'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import httpServices from '../../core/http/apis'

function* saveReceiptSaga(action) {
  try {
    yield put(showLoading());
    const resps = yield call(fetchSaveRecieptReq, action.payload)
    console.log('resps', resps);
    yield put({ type: saveReceiptSuccess, payload: resps });
  } catch (error) {
    yield put({ type: saveReceiptFailed });
  } finally {
    yield put(hideLoading());
  }
}

const fetchSaveRecieptReq = async (data) => {
  const res = await httpServices.post('/save-receipt', data)
  if (!res || !res.data) throw new Error("Opps");
  return res.data;
}

function* watchSaveReciept() {
  yield takeLatest(saveReceipt, saveReceiptSaga);
}


export default function* cartSaga() {
    yield all([watchSaveReciept()]);
  }