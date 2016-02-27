import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(logger)
)(createStore);

export default function configureStore(initialState = {}) {

  const store = finalCreateStore(rootReducer, initialState);

  return store;

}
