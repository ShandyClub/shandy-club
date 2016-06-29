import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

// middleware
const router = routerMiddleware(browserHistory)

let middleware = [ router ]

// logger middleware in development
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true })
  middleware.push(logger)
}

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : f => f
)(createStore)

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__ || {}

export default function configureStore(state = initialState) {

  const store = finalCreateStore(rootReducer, initialState)

  return store

}
