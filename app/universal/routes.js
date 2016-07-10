import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
import App from './shared/containers/App'
import NotFound from './shared/containers/NotFound'
import * as Pub from './pub'
import * as Search from './search'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Search.Container} />
    <Route path="/pub/:id" component={Pub.Container} />

    {/* 404 */}
    <Route path="*" component={NotFound} />
  </Route>
)
