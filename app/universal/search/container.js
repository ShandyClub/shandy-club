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
import * as Shared from '../shared/components'

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

    const { actions, features, geocodes, mapMarkers, selectedResultIndex, term, isPanelOpen, isSearchFeatures, selectedResult, showSuggestions, totalResults } = this.props
    const { getGeocode, setGeocode, clearGeocode, toggleFeature, setSelectedResult, submitSearch, submitLucky } = actions

    const { toggleInputFocus, toggleFeatures } = this

    const renderFeatures = isSearchFeatures ? (
      <Components.features features={features} toggleFeature={toggleFeature} />
    ): null

    const renderPanel = isPanelOpen ? (
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

        <Shared.button
          label={'toggle features'}
          callback={toggleFeatures} />

        { renderFeatures }

        <Shared.button
          label={'beer me'}
          callback={submitSearch} />

        <Shared.button
          label={'roam free'} />

        <Shared.button
          label={'lucky pint!'}
          callback={submitLucky} />

        <Shared.map
          markers={mapMarkers}
          mapOptions={MAP_OPTIONS}
          tileOptions={MAP_TILE_OPTIONS}
          tileURL={MAP_TILE_URL}
          setSelectedResult={setSelectedResult} />

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
