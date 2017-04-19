import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import uuid from 'uuid'

import * as actions from './actions'
import selectors from './selectors'

import { Image, Section, View } from '../core/primitives'

export class Search extends Component {

  // constructor() {
  //
  //   super()
  //
  //   this.handleClickOutside = this.handleClickOutside.bind(this)
  //   this.toggleClickOutsideEvent = this.toggleClickOutsideEvent.bind(this)
  //   this.toggleInputFocus = this.toggleInputFocus.bind(this)
  //
  // }

  // componentDidUpdate(prevProps) {
  //
  //   const { isSearchFocused } = this.props
  //   const { isSearchFocused: prevIsSearchFocused } = prevProps
  //
  //   // check whether suggestions is newly opened || newly closed
  //   if (isSearchFocused !== prevIsSearchFocused) this.toggleClickOutsideEvent(isSearchFocused)
  //
  // }

  // componentWillUnmount() {
  //
  //   const { handleClickOutside } = this
  //
  //   // stop listening for clicks outside
  //   window.removeEventListener('click', handleClickOutside)
  //
  //   // reset UI state
  //   handleClickOutside()
  //
  // }

  // toggleClickOutsideEvent(enabled) {
  //
  //   // listen for clicks outside || stop listening for clicks outside
  //   const listener = enabled ? window.addEventListener : window.removeEventListener
  //
  //   listener('click', this.handleClickOutside)
  //
  // }

  // handleClickOutside() {
  //
  //   this.toggleInputFocus(false)
  //
  // }

  // toggleInputFocus(focus=true) {
  //
  //   const { updateUI } = this.props.actions
  //
  //   updateUI({ search: { focus } })
  //
  // }

  render() {

    // const { actions, geocodes, geolocation, term, showSuggestions } = this.props
    // const { getGeocode, setGeocode, clearGeocode, getGeolocation, setPoint, setSelectedResult } = actions

    return (
      <View atomic={{ pt:12 }} maxWidth='none'>

        <Image src='/static/img/shandy-club.png' width='50px' height='50px' center atomic={{ c:'p' }} />

          <Section>

            HI :)

            {/* <Text atomic={{ fs:7, ta:'c', tt:'u' }} fontStack='secondary' letterSpacing='3px'>
              Shandy Club
            </Text>

            <Text atomic={{ fs:4, fw:'b', ta:'c' }}>
              curated pubs for curious people
            </Text>

            <Text atomic={{ mt:7, mb:7, ta:'c' }}>

              <ButtonIcon atomic={{ fs:4, fw:'b', p:1 }} onClick={getGeolocation}>

                <Image src='compass.svg' width='32px' height='32px' atomic={{ d:'ib', mr:1, va:'m' }} />

                Find pubs nearby

              </ButtonIcon>

            </Text>

            <Text atomic={{ fs:4, ta:'c' }}>

              <Input
                type='text'
                placeholder='Or somewhere else?'
                width='164px'
                atomic={{ ml:1, mr:1, pt:1, pb:1 }}
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
            ) : null } */}

          </Section>

      </View>
    )

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch),
  })
)(Search)
