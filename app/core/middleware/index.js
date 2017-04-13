import analyticsMiddleware from 'redux-analytics';
import createLogger from 'redux-logger';
import {middleware as pack} from 'redux-pack';

import {track} from '../util/track';

const createMiddleware = isDevelopment => {
  // default middleware
  let middleware = [pack];

  // logger middleware in development
  if (isDevelopment) middleware.push(createLogger({collapsed: true}));

  // analytics middleware in production
  if (!isDevelopment)
    middleware.push(
      analyticsMiddleware(({type, payload}) => track(type, payload)),
    );

  return middleware;
};

export default createMiddleware;
