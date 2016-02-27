import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from '../store/configureStore';

// containers
import App from './App';
import Pub from './Pub';

const store = configureStore();

export default class Root extends Component {

  render() {

    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Pub} />
              {/*<Route path="/another" component={Another} />*/}
            </Route>
          </Router>
        </Provider>
      </div>
    );

  }

}
