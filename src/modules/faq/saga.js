import {
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchContentFAQ,
  fetchContentFAQSuccess,
  fetchContentFAQFailed
} from './redux'
import httpServices from '../../core/http/apis'
import { showLoading, hideLoading } from 'react-redux-loading-bar';

function* fetchContentFAQSaga(action) {
  try {
    yield put(showLoading())
    const resps = yield call(fetchContentFAQReq)
    yield put({ type: fetchContentFAQSuccess, payload: resps });
  } catch (error) {
    yield put({ type: fetchContentFAQFailed });
  } finally {
    yield put(hideLoading())
  }
}

const fetchContentFAQReq = async () => {
  const res = await httpServices.get('/faq')
  if (!res || !res.data) throw new Error("Opps");
  return res.data;
}

function* watchContentFAQ() {
  yield takeLatest(fetchContentFAQ, fetchContentFAQSaga);
}

export default function* faqSaga() {
  yield all([watchContentFAQ()]);
}