import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import uuid from 'node-uuid'
import Transition from 'react-addons-css-transition-group'

// actions
import * as actions from './actions'
import { actions as uiActions } from '../ui'

// selectors
import selectors from './selectors'

// components
import { Anchor } from 'components/anchor'
import { Image } from 'components/image'
import { Input } from 'components/input'
import { View } from 'components/layout'
import { List } from 'components/list'
import { Section } from 'components/section'
import { Text } from 'components/text'
import Map from 'components/map'
import Panel from 'components/panel'

// constants
import { MAP_OPTIONS, MAP_TILE_URL, MAP_TILE_OPTIONS, ZOOM_CONTROL_OPTIONS } from 'constants'

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

    const { actions, geocodes, geolocation, point, mapMarkers, selectedResultIndex, term, isPanelOpen, isSearchFitToBounds, isSearchOverlayed, selectedResult, showSuggestions, totalResults } = this.props
    const { getGeocode, setGeocode, clearGeocode, getGeolocation, setPoint, setSelectedResult } = actions

    const { toggleInputFocus } = this

    // const renderFeaturesToggle = !isSearchOverlayed ? (
    //   <Button onClick={toggleFeatures}>toggle features</Button>
    // ) : null

    const renderMap = !isSearchOverlayed ? (
      <Map
        center={point}
        fitToBounds={isSearchFitToBounds}
        geolocation={geolocation}
        markers={mapMarkers}
        mapOptions={MAP_OPTIONS}
        tileOptions={MAP_TILE_OPTIONS}
        tileURL={MAP_TILE_URL}
        zoomControlOptions={ZOOM_CONTROL_OPTIONS}
        setPoint={setPoint}
        setSelectedResult={setSelectedResult} />
    ) : null

    const renderPanel = !isSearchOverlayed && isPanelOpen ? (
      <Panel selectedResult={selectedResult} selectedResultIndex={selectedResultIndex} totalResults={totalResults} setSelectedResult={setSelectedResult} />
    ) : null

    return (
      <View atomic={{ pt: isSearchOverlayed ? 14 : 0 }}>

        <Image src='shandy-club.png' width='50px' height='50px' center atomic={ !isSearchOverlayed ? { po:'a', t:1, l:1, z:1 } : null } />

        { isSearchOverlayed ? (
          <Section>

            <Text atomic={{ fs:7, ta:'c', tt:'u' }} fontStack='secondary' letterSpacing='3px'>
              Shandy Club
            </Text>

            <Text atomic={{ fs:5, ta:'c' }}>

              Fancy a pint? Silly question.<br/>
              So, where to?<br/>
              Now that’s a little tougher.<br/>

              <Anchor onClick={getGeolocation}>
                Luckily we know a few nearby
              </Anchor>

            </Text>

            <Text atomic={{ fs:5, ta:'c' }}>

              But maybe you’re a savvy old sort<br/>
              planning a trip to

              <Input
                autoFocus
                type='text'
                placeholder='Islington'
                width='100px'
                atomic={{ ml:1, mr:1 }}
                value={ term || '' }
                innerRef={ r => Search._input = r }
                onChange={ () => Search._input.value ? getGeocode(Search._input.value) : clearGeocode() }
                onFocus={ () => toggleInputFocus() }
                onClick={ e => e.stopPropagation() } />

            </Text>

            { showSuggestions ? (
              <List maxWidth='600px' maxHeight='144px'>
                { geocodes.map( g => (
                  <div key={uuid.v4()} onClick={ () => setGeocode(g.get('center'), g.get('place_name')) }>
                    { g.get('place_name') }
                  </div>
                )) }
              </List>
            ) : null }

          </Section>
        ) : null }

        {/* { renderFeaturesToggle } */}

        {/* { isSearchFeatures ? (
          <List>
            { features.keySeq().map( f => (
              <div key={uuid.v4()} className={ features.get(f) ? 'TODO active' : 'TODO normal' } onClick={ () => toggleFeature(f) }>{ f }</div>
            )) }
          </List>
        ) : null } */}

        { renderMap }

        <Transition transitionName='slide-left' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          { renderPanel }
        </Transition>

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
