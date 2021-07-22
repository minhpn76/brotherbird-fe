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
  fetchCollections,
  fetchCollectionsSuccess,
  fetchCollectionsFailed
} from './redux'
import httpServices from '../../core/http/apis'

function* fetchCollectionsSaga(action) {
  try {
    const resps = yield call(fetchCollectionsReq)
    yield put({ type: fetchCollectionsSuccess, payload: resps });
  } catch (error) {
    yield put({ type: fetchCollectionsFailed });
  }
}

const fetchCollectionsReq = async () => {
  const res = await httpServices.get('/collections?_sort=orderIndex')
  if (!res || !res.data) throw new Error("Opps");
  return res.data;
}

function* watchCollections() {
  yield takeLatest(fetchContentFAQ, fetchCollectionsSaga);
}

export default function* faqSaga() {
  yield all([watchCollections()]);
}