import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as Components from './components'
import * as selectors from './selectors'

export class Container extends Component {

  componentWillMount() {

    console.log('Search :: componentWillMount')

  }

  render() {

    return (
      <div>
        <h1>Search</h1>
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    search: selectors.getAll
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Container)
