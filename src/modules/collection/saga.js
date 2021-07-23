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
  fetchCollectionsFailed,
  fetchProductsByCollection,
  fetchProductsByCollectionSuccess,
  fetchProductsByCollectionFailed,
  fetchProduct,
  fetchProductSuccess,
  fetchProductFailed
} from './redux'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import httpServices from '../../core/http/apis'

function* fetchCollectionsSaga(action) {
  try {
    yield put(showLoading());
    const resps = yield call(fetchCollectionsReq)
    yield put({ type: fetchCollectionsSuccess, payload: resps });
  } catch (error) {
    yield put({ type: fetchCollectionsFailed });
  } finally {
    yield put(hideLoading());
  }
}

const fetchCollectionsReq = async () => {
  const res = await httpServices.get('/collections?_sort=orderIndex')
  if (!res || !res.data) throw new Error("Opps");
  return res.data;
}

function* fetchProductsByColleSaga(action) {
  const collectionId = action.payload
  try {
    yield put(showLoading());
    const resps = yield call(fetchProductsByColleDetailReq, collectionId)
    yield put({ type: fetchProductsByCollectionSuccess, payload: resps });
  } catch (error) {
    yield put({ type: fetchProductsByCollectionFailed });
  } finally {
    yield put(hideLoading());
  }
}

const fetchProductsByColleDetailReq = async (collectionId) => {
  const res = await httpServices.get(`/products?collectionID=${collectionId}`)
  if (!res || !res.data) throw new Error("Opps");
  return res.data;
}

function* fetchProductSaga(action) {
  try {
    yield put(showLoading());
    yield put({ type: fetchProductSuccess, payload: action.payload });
  } catch (error) {
    yield put({ type: fetchProductFailed });
  } finally {
    yield put(hideLoading());
  }
}
function* watchCollections() {
  yield takeLatest(fetchCollections, fetchCollectionsSaga);
}

function* watchProductsByCollection() {
  yield takeLatest(fetchProductsByCollection, fetchProductsByColleSaga);
}

function* watchProduct() {
  yield takeLatest(fetchProduct, fetchProductSaga);
}

export default function* faqSaga() {
  yield all([
    watchCollections(),
    watchProductsByCollection(),
    watchProduct()
  ]);
}