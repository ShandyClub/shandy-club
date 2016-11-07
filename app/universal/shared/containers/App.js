import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectors } from '../../ui'

import { View } from 'components/layout'
import { Loader } from 'components/loader'

class App extends Component {

  render() {

    const { children, requesting } = this.props

    const renderLoader = requesting ? <Loader /> : null

    return (
      <View>

        { renderLoader }

        { children }

      </View>
    )

  }

}

export default connect(
  createStructuredSelector({ ...selectors })
)(App)
