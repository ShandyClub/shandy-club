import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// actions
import * as actions from './actions'
import { actions as uiActions } from '../ui'

// selectors
import selectors from './selectors'

// components
import * as Components from './components'
import { Button } from '../shared/components/button'
import Map from '../shared/components/map'

// constants
import { MAP_OPTIONS, MAP_TILE_URL, MAP_TILE_OPTIONS } from '../shared/constants'

export class Search extends Component {

  constructor() {

    super()

    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.toggleClickOutsideEvent = this.toggleClickOutsideEvent.bind(this)
    this.toggleFeatures = this.toggleFeatures.bind(this)
    this.toggleInputFocus = this.toggleInputFocus.bind(this)

  }

  componentDidUpdate(prevProps) {

    const { isSearchFocused } = this.props
    const { isSearchFocused: prevIsSearchFocused } = prevProps

    // check whether suggestions is newly opened || newly closed
    if (isSearchFocused !== prevIsSearchFocused) this.toggleClickOutsideEvent(isSearchFocused)

  }

  componentWillUnmount() {

    const { handleClickOutside, toggleInputFocus } = this

    // stop listening for clicks outside
    window.removeEventListener('click', handleClickOutside)

    // reset UI state
    handleClickOutside()
    // TODO - don't need this?
    toggleInputFocus(false)

  }

  toggleClickOutsideEvent(enabled) {

    const handleClickOutside = this.handleClickOutside

    // listen for clicks outside || stop listening for clicks outside
    const listener = enabled ? window.addEventListener : window.removeEventListener

    listener('click', handleClickOutside)

  }

  handleClickOutside() {

    this.toggleInputFocus(false)

  }

  toggleFeatures() {

    const { isSearchFeatures, actions: { updateUI } } = this.props

    updateUI({ search: { features: !isSearchFeatures } })

  }

  toggleInputFocus(focus=true) {

    const { updateUI } = this.props.actions

    updateUI({ search: { focus } })

  }

  render() {

    const { actions, features, geocodes, point, mapMarkers, selectedResultIndex, term, isPanelOpen, isSearchFeatures, isSearchFitToBounds, isSearchOverlayed, selectedResult, showSuggestions, totalResults } = this.props
    const { getGeocode, setGeocode, clearGeocode, getGeolocation, toggleFeature, setPoint, setSelectedResult } = actions

    const { toggleInputFocus, toggleFeatures } = this

    const renderFeaturesToggle = !isSearchOverlayed ? (
      <Button onClick={toggleFeatures}>toggle features</Button>
    ) : null

    const renderFeatures = isSearchFeatures ? (
      <Components.features features={features} toggleFeature={toggleFeature} />
    ) : null

    const renderMap = !isSearchOverlayed ? (
      <Map
        center={point}
        fitToBounds={isSearchFitToBounds}
        markers={mapMarkers}
        mapOptions={MAP_OPTIONS}
        tileOptions={MAP_TILE_OPTIONS}
        tileURL={MAP_TILE_URL}
        setPoint={setPoint}
        setSelectedResult={setSelectedResult} />
    ) : null

    const renderPanel = !isSearchOverlayed && isPanelOpen ? (
      <Components.panel selectedResult={selectedResult} selectedResultIndex={selectedResultIndex} totalResults={totalResults} setSelectedResult={setSelectedResult} />
    ) : null

    const renderSuggestions = showSuggestions ? (
      <Components.suggestions geocodes={geocodes} setGeocode={setGeocode} />
    ) : null

    return (
      <div>

        <Components.input
          term={term}
          handleSearchTerm={ (term) => term ? getGeocode(term) : clearGeocode() }
          onFocus={ () => toggleInputFocus() }
          onClick={ e => e.stopPropagation() } />

        { renderSuggestions }

        { renderFeaturesToggle }

        { renderFeatures }

        <Button onClick={getGeolocation}>explore nearby</Button>

        { renderMap }

        { renderPanel }

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators({ ...actions, ...uiActions }, dispatch)
  })
)(Search)
