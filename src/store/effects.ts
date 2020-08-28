import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import instance from '../utils/instance';

import {
  getProducts,
  getProductsSuccess,
  getProductsError,
  filterProducts,
  filterProductsSuccess,
  filterProductsError,
  favourite,
  favouriteSuccess,
  favouriteError,
} from './actions';


 export interface SagaHandler {
    [key: string]: (payload?: any) => void;
  };

const HANDLERS: SagaHandler  = {
  * [getProducts as any]() {
    try {
      const result = yield call(
        instance,
        `/PRODUCTS_SUCCESS`,
        {
          method: 'GET',
        }
      );
     yield put(getProductsSuccess(result.data.data));
    } catch (error) {
     yield put(getProductsError(error));
    }
  },
  * [filterProducts as any](data) {
    try {
      const result = yield call(
        instance,
        `/FILTER_SUCCESS`,
        {
          method: 'GET',
         // method: 'POST',
        //  data,
        }
      );
     yield put(filterProductsSuccess(result.data.data));
    } catch (error) {
    yield put(filterProductsError(error));
    }
  },
  * [favourite as any](data) {
  console.log("data", data)
    try {
      const result = yield call(
        instance,
        `/FAVORITE_SUCCESS`,
        {
          method: 'GET',
         // method: 'PATCH',
        //  data,
        }
      );
     yield put(favouriteSuccess(result.data.data));
    } catch (error) {
      console.log(error,'errororororoor')
    yield put(favouriteError(error));
    }
  },
};


export function* sagaWatcher(action: Action) {
  const { type, payload, } = action;
  const handler = HANDLERS[type];
  if (handler != null) yield handler(payload);
}

export default function* sagaGoods() {
  yield takeEvery('*', sagaWatcher);
}

