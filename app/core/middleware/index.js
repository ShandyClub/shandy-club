import analyticsMiddleware from 'redux-analytics'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { track } from '../util/track'

export const saga = createSagaMiddleware()

const createMiddleware = isDevelopment => {

  // default middleware
  let middleware = [ saga ]

  // logger middleware in development
  if (isDevelopment) middleware.push( createLogger({ collapsed: true }) )

  // analytics middleware in production
  if (!isDevelopment) middleware.push( analyticsMiddleware( ({ type, payload }) => track(type, payload) ) )

  return middleware

}

export default createMiddleware
