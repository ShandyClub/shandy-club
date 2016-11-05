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
import { Anchor } from 'components/anchor'
import { Button } from 'components/button'
import { Image } from 'components/image'
import { Input } from 'components/input'
import { IntroText, TitleText } from 'components/text'
import { HAlign, View } from 'components/layout'
import Map from 'components/map'
import Panel from 'components/panel'

// constants
import { MAP_OPTIONS, MAP_TILE_URL, MAP_TILE_OPTIONS } from 'constants'

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

    const { handleClickOutside } = this

    // stop listening for clicks outside
    window.removeEventListener('click', handleClickOutside)

    // reset UI state
    handleClickOutside()

  }

  toggleClickOutsideEvent(enabled) {

    // listen for clicks outside || stop listening for clicks outside
    const listener = enabled ? window.addEventListener : window.removeEventListener

    listener('click', this.handleClickOutside)

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
      <Panel selectedResult={selectedResult} selectedResultIndex={selectedResultIndex} totalResults={totalResults} setSelectedResult={setSelectedResult} />
    ) : null

    const renderSuggestions = showSuggestions ? (
      <Components.suggestions geocodes={geocodes} setGeocode={setGeocode} />
    ) : null

    return (
      <View padded paddedTop>

        <HAlign media='half'>

          <Image src='shandy-club.png' width='50px' height='50px' center />

          <TitleText>
            Shandy Club
          </TitleText>

          <IntroText>

            Fancy a pint? Silly question.<br/>
            So, where to?<br/>
            Now that’s a little tougher.<br/>

            <Anchor onClick={getGeolocation}>
              Luckily we know a few nearby
            </Anchor>

          </IntroText>

          <IntroText>

            But maybe you’re a savvy old sort<br/>
            planning a trip to

            <Input
              autoFocus
              type='text'
              placeholder='Islington'
              width='100px'
              value={ term || '' }
              innerRef={ r => Search._input = r }
              onChange={ () => Search._input.value ? getGeocode(Search._input.value) : clearGeocode() }
              onFocus={ () => toggleInputFocus() }
              onClick={ e => e.stopPropagation() } />

          </IntroText>

        </HAlign>

        { renderSuggestions }

        { renderFeaturesToggle }

        { renderFeatures }

        { renderMap }

        { renderPanel }

      </View>
    )

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators({ ...actions, ...uiActions }, dispatch)
  })
)(Search)
