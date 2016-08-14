import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as selectors from './selectors'

// components
import * as Components from './components'
import Button from '../shared/components/button'
import Loader from '../shared/components/loader'

export class Container extends Component {

  componentWillMount() {

    console.log('Search :: componentWillMount')

  }

  render() {

    const { actions, features, geocodes, term, isRequestingGeocodes, error } = this.props
    const { getGeocode, setGeocode, clearGeocode, toggleFeature, submitSearch } = actions

    return (
      <div>

        <Components.input term={term} handleSearchTerm={ (term) => term ? getGeocode(term) : clearGeocode() } />

        <Loader loaded={isRequestingGeocodes}>
          <Components.suggestions geocodes={geocodes} setGeocode={setGeocode} error={error} />
        </Loader>

        <Components.features features={features} toggleFeature={toggleFeature} />

        <Button label={'beer me'} callback={submitSearch} />

        {/* TODO - Components.roam ... */}
        {/* TODO - Components.lucky ... */}
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    search: selectors.getAll,
    features: selectors.getFeatures,
    geocodes: selectors.getGeocodes,
    results: selectors.getResults,
    term: selectors.getTerm,
    isRequesting: selectors.getIsRequesting,
    isRequestingGeocodes: selectors.getIsRequestingGeocodes,
    error: selectors.getError,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Container)
