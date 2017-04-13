import React, { Component } from 'react'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { configureStore } from '../app/core/store'
// import * as Storage from '../app/core/services/storage'
// import { STATE_KEY } from '../app/core/constants'

import { Container as Search } from '../app/search'

// TODO - connect will use reselect selectors for index state/actions
export default withRedux(configureStore)(connect()(class extends Component {

  static async getInitialProps({ store }) {

    // TODO - abstract this to helper to run on each page
    // // store state on change
    // store.subscribe( () => {
    //
    //   // remove search|ui from state before storing
    //   const stateTrimmed = store.getState().delete('search').delete('ui')
    //
    //   // set local storage
    //   process.browser && Storage.setItem(STATE_KEY, stateTrimmed)
    //
    // })

  }

  componentDidMount() {

    // TODO - abstract this to helper to run on each page (can remove isBrowser check from track.js )
    // if (!isDevelopment) initAnalytics()

  }

  render() {

    return (
      <Search />
    )

  }

}))
