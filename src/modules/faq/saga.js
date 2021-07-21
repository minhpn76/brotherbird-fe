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
import {
  fetchContentFAQ,
  fetchContentFAQSuccess,
  fetchContentFAQFailed
} from './redux'
import httpServices from '../../core/http/apis'

function* fetchContentFAQSaga(action) {
  try {
    const resps = yield call(fetchContentFAQReq)
    yield put({ type: fetchContentFAQSuccess, payload: resps });
  } catch (error) {
    yield put({ type: fetchContentFAQFailed });
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