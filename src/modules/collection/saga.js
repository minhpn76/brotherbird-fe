import { cloneDeep, isEmpty } from "lodash";
import {
  all,
  call,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchCollections,
  fetchCollectionsSuccess,
  fetchCollectionsFailed,
  fetchProductsByCollection,
  fetchProductsByCollectionSuccess,
  fetchProductsByCollectionFailed,
  fetchProduct,
  fetchProductSuccess,
  fetchProductFailed,
  fetchCart,
  fetchCartSuccess,
  fetchCartFailed,
  fetchCheckout,
  fetchCheckoutFailed,
  fetchCartItemRemoved,
  fetchCartItemRemovedSuccess
} from './redux'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import httpServices from '../../core/http/apis'
import { typeActionKind } from "../../helper/utils";

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

function* fetchCartSaga(action) {
  try {
    // yield put(showLoading());
    yield put({ type: fetchCartItemRemoved});
    const { tempCart, cart } = yield select(state => state.collection)
    const {type, product, valued, deleted, temp} = action.payload
    let cloneCart = temp ? cloneDeep(tempCart) : cloneDeep(cart)
    let cartItem = {
      ...cloneDeep(product),
      quanlity: 1,
      selected: false
    }
    if (deleted) {
      let newData = cloneCart.filter(i => i.id !== cartItem.id)
      yield put({ type: fetchCartItemRemovedSuccess, payload: product});
      cloneCart = newData
    } else {
      if (isEmpty(cloneCart)) {
        if(type === typeActionKind.SELECT) {
          cartItem.selected = valued.target.checked
        }
        if (type === typeActionKind.QUANTITY) {
          cartItem.quanlity = + valued.target.value
        }
        cloneCart.push(cartItem)
      } else {
        const isExist = cloneCart.find(i => i.id === cartItem.id)
        if (!isEmpty(isExist)) {
          let newData = cloneCart.filter(i => i.id !== cartItem.id)
          if(type === typeActionKind.SELECT) {
            cartItem.selected = valued.target.checked
            cartItem.quanlity = isExist.quanlity
          }
          if (type === typeActionKind.QUANTITY) {
            cartItem.selected = isExist.selected
            cartItem.quanlity = + valued.target.value
          }
          newData.push(cartItem)
          cloneCart = newData
        } else {
          if(type === typeActionKind.SELECT) {
            cartItem.selected = valued.target.checked
          }
          if (type === typeActionKind.QUANTITY) {
            cartItem.quanlity = + valued.target.value
          }
          cloneCart.push(cartItem)
        }
      }
    }
    yield put({ type: fetchCartSuccess, payload: {
      temp,
      cloneCart
    } });
  } catch (error) {
    yield put({ type: fetchCartFailed });
  } finally {
    // yield put(hideLoading());
  }
}

function* fetchCheckoutSaga(action) {
  try {
    // yield put(showLoading());
    const {  tempCart, cart } = yield select(state => state.collection)
    let cloneTempCart = cloneDeep(tempCart)
    let cloneCart = cloneDeep(cart)
    if (!isEmpty(cloneCart)) {
      cloneCart = [
        ...cloneCart,
        ...cloneTempCart
      ]
    } else {
      cloneCart = cloneTempCart
    }
    yield put({ type: fetchCartSuccess, payload: {
      temp: false,
      cloneCart
    } });
  } catch (error) {
    yield put({ type: fetchCheckoutFailed });
  } finally {
    // yield put(hideLoading());
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

function* watchCart() {
  yield takeLatest(fetchCart, fetchCartSaga);
}

function* watchCheckout() {
  yield takeLatest(fetchCheckout, fetchCheckoutSaga);
}

export default function* collectionSaga() {
  yield all([
    watchCollections(),
    watchProductsByCollection(),
    watchProduct(),
    watchCart(),
    watchCheckout()
  ]);
}