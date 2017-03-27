import React, { Component } from 'react'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import { END } from 'redux-saga'

import { configureStore } from '../app/core/store'
import { saga } from '../app/core/middleware'
import * as Storage from '../app/core/services/storage'
import { STATE_KEY } from '../app/core/constants'

// TODO - connect will use reselect selectors for index state
export default withRedux(configureStore)(connect()(class extends Component {

  static async getInitialProps({ store }) {

    // start sagas
    store.runSaga = saga.run

    // TODO - might need to do this?
    // store.runSaga(rootSaga)

    // force all sagas to terminate
    store.close = () => store.dispatch(END)

    // store state on change
    store.subscribe( () => {

      // remove search|ui from state before storing
      const stateTrimmed = store.getState().delete('search').delete('ui')

      // set local storage
      process.browser && Storage.setItem(STATE_KEY, stateTrimmed)

    })

  }

  render() {

    return (
      <div>

        <h1>🍺 Shandy Club</h1>

        <Link href='/story'>
          <a>Our story</a>
        </Link>

      </div>
    )

  }

}))
