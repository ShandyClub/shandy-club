import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
import App from 'containers/App'
import NotFound from 'containers/NotFound'
import * as Search from './search'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Search.Container} />

    {/* 404 */}
    <Route path='*' component={NotFound} />
  </Route>
)
