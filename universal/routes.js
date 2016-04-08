import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// containers
import App from './shared/containers/App'
import Home from './shared/containers/Home'
import * as Pub from './pub';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/pub" component={Pub.Container} />

    {/* 404 */}
    <Route path="*" component={Home} />
  </Route>
)
