import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/reducer';

let store;

// 如果是开发环境，则打印出action和state信息
if (process.env.NODE_ENV === 'development') {
    store = createStore(reducer, {}, applyMiddleware(thunk, logger));
} else {
    store = createStore(reducer, {}, applyMiddleware(thunk));
}

export default store;
