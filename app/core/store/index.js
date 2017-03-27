import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'

import createMiddleware from '../middleware'
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

// create store
export const configureStore = (initialState = persistState) => finalCreateStore(rootReducer, Immutable.fromJS(initialState))
