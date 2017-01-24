import analyticsMiddleware from 'redux-analytics'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import { track } from '../util/track'

const router = routerMiddleware(browserHistory)

export const saga = createSagaMiddleware()

const createMiddleware = isDevelopment => {

  // default middleware
  let middleware = [ router, saga ]

  // logger middleware in development
  if (isDevelopment) middleware.push( createLogger({ collapsed: true }) )

  // analytics middleware in production
  if (!isDevelopment) middleware.push( analyticsMiddleware( ({ type, payload }) => track(type, payload) ) )

  return middleware

}

export default createMiddleware
