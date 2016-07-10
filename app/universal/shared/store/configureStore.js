import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import * as Storage from '../services/storage'
import { STATE_KEY } from '../constants'

// middleware
const router = routerMiddleware(browserHistory)
const saga = createSagaMiddleware()

let middleware = [ router, saga ]

// logger middleware in development
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true })
  middleware.push(logger)
}

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : f => f
)(createStore)

// persist stored state
const persistState = Storage.getItem(STATE_KEY) || {}

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__ || persistState

export default function configureStore(state = initialState) {

  const store = finalCreateStore(rootReducer, Immutable.fromJS(initialState))

  // start sagas
  saga.run(rootSaga)

  // store state on change
  store.subscribe( () => {

    // remove routing from state before storing
    let stateTrimmed = store.getState().delete('routing')

    Storage.setItem(STATE_KEY, stateTrimmed.toJS())

  });

  return store

}
