import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

// components
import * as Components from './components'
// actions
import * as actions from './actions'
// selectors
import { getAll } from './selectors'

export class Container extends React.Component {

  render() {

    return (
      <div>
        <h1><%= module %></h1>
        <Components.component />
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    <%= module %>: getAll
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Container)
