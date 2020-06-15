
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers';
import sagas from './Sagas';

export default function () {
  const sagaMiddleware = createSagaMiddleware();
  const store = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
  sagas.forEach(saga => sagaMiddleware.run(saga));
  return store;
}
