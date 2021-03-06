import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { END } from 'redux-saga'

import createMiddleware, { saga } from '../middleware'
import rootReducer from '../reducers'
import * as Storage from '../services/storage'
import { STATE_KEY } from '../constants'

// utils
import { isBrowser, isDevelopment } from '../util'

// create middleware
const middleware = createMiddleware(isDevelopment)

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
