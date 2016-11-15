import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import analyticsMiddleware from 'redux-analytics'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'
import * as Storage from '../services/storage'
import { STATE_KEY } from '../constants'

// utils
import { isBrowser, isDevelopment } from '../util'
import { track } from '../util/track'

// middleware
const router = routerMiddleware(browserHistory)
const saga = createSagaMiddleware()

let middleware = [ router, saga ]

// logger middleware in development
if (isDevelopment) middleware.push( createLogger({ collapsed: true }) )

// analytics middleware in production
if (!isDevelopment) middleware.push( analyticsMiddleware( ({ type, payload }) => track(type, payload) ) )

// create store with middleware - and devTools if dev
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  isBrowser && window.devToolsExtension && isDevelopment ? window.devToolsExtension() : f => f
)(createStore)

// persist stored state
const persistState = isBrowser && Storage.getItem(STATE_KEY) || {}

// get state from a global injected into server-generated HTML
const initialState = isBrowser && window.__INITIAL_STATE__ || persistState

export default function configureStore(state = initialState) {

  const store = finalCreateStore(rootReducer, Immutable.fromJS(state))

  // start sagas
  store.runSaga = saga.run

  // force all sagas to terminate
  store.close = () => store.dispatch(END)

  // store state on change
  store.subscribe( () => {

    // remove routing|ui from state before storing
    let stateTrimmed = store.getState().delete('routing').delete('search').delete('ui')

    isBrowser && Storage.setItem(STATE_KEY, stateTrimmed)

  })

  return store

}
