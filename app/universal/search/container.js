import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import { actions as uiActions } from '../ui'
import * as selectors from './selectors'

// components
import * as Components from './components'
import Button from '../shared/components/button'

export class Container extends Component {

  componentWillMount() {

    console.log('Search :: componentWillMount')

  }

  render() {

    const { actions, uiActions, features, geocodes, term, hasSuggestions } = this.props
    const { getGeocode, setGeocode, clearGeocode, toggleFeature, submitSearch, submitLucky, updateUI } = actions

    const renderSuggestions = hasSuggestions ? (
      <Components.suggestions geocodes={geocodes} setGeocode={setGeocode} />
    ) : null

    return (
      <div>

        <Components.input
          term={term}
          handleSearchTerm={ (term) => term ? getGeocode(term) : clearGeocode() }
          onFocus={ () => updateUI({ search: { focus: true } }) } />

        { renderSuggestions }

        <Components.features
          features={features}
          toggleFeature={toggleFeature} />

        <Button
          label={'beer me'}
          callback={submitSearch} />

        <Button
          label={'roam free'} />

        <Button
          label={'lucky pint!'}
          callback={submitLucky} />

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    features: selectors.getFeatures,
    geocodes: selectors.getGeocodes,
    results: selectors.getResults,
    term: selectors.getTerm,
    hasSuggestions: selectors.getHasSuggestions,
  }),
  dispatch => ({
    actions: bindActionCreators({ ...actions, ...uiActions }, dispatch)
  })
)(Container)
