import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import loggingMiddleware from './middleware/logging';
import reducer from '../reducers/index';

function configureStore(middlewares = []) {
  const store = createStore(
    reducer,
    applyMiddleware(thunk, loggingMiddleware, ...middlewares),
  );

  store.subscribe(()=> console.log("store", store));

  return {
    store,
    Provider,
  };
}


export default configureStore;
