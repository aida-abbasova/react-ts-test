import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaGoods from './effects';
import reducer from './reducer'


declare global {
  interface Action {
    type: string;
    payload?: object;
  }
}

declare global {
  interface GlobalStore extends Store {
    [key: string]: any;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
console.log("store", store)
sagaMiddleware.run(sagaGoods);

export default store;
