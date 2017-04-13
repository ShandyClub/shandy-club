import React, { Component } from 'react'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { configureStore } from '../app/core/store'

export default withRedux(configureStore)(connect()(class extends Component {

  static async getInitialProps({ store }) {

    // ...

  }

  render() {

    return (
      <h1>Pub</h1>
    )

  }

}))
