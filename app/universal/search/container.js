import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as selectors from './selectors'

// components
import * as Components from './components'
import Loader from '../shared/components/loader'

export class Container extends Component {

  componentWillMount() {

    console.log('Search :: componentWillMount')

  }

  render() {

    const { features, geocodes, term, isRequestingGeocodes, error, actions: { getGeocode } } = this.props

    // TODO - need to get availableFeatures somehow... ? Constants?
    // "features": {
    //     "architecture": true,
    //     "beer": true,
    //     "fire": false,
    //     "food": false,
    //     "games": false,
    //     "garden": true,
    //     "peace": false,
    //     "tv": false
    // }

    return (
      <div>

        <Components.input term={term} handleSearchTerm={getGeocode} />

        <Loader loaded={isRequestingGeocodes}>
          <Components.suggestions geocodes={geocodes} error={error} />
        </Loader>

        <Components.features features={features} />

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
