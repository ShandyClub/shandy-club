import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import routes from '../../routes'
import configureStore from '../store/configureStore';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {

  render() {

    return (
      <div>
        <Provider store={store}>
          <Router routes={routes} history={history} />
        </Provider>
      </div>
    );

  }

}
