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

export class Search extends Component {

  constructor() {

    super()

    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.toggleClickOutsideEvent = this.toggleClickOutsideEvent.bind(this)
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

    console.log('toggleClickOutsideEvent', enabled)

    const handleClickOutside = this.handleClickOutside

    // listen for clicks outside || stop listening for clicks outside
    const listener = enabled ? window.addEventListener : window.removeEventListener

    listener('click', handleClickOutside)

  }

  handleClickOutside() {

    this.toggleInputFocus(false)

  }

  toggleInputFocus(focus=true) {

    const { updateUI } = this.props.actions

    updateUI({ search: { focus } })

  }

  render() {

    const { actions, features, geocodes, term, showSuggestions } = this.props
    const { getGeocode, setGeocode, clearGeocode, toggleFeature, submitSearch, submitLucky } = actions

    const toggleInputFocus = this.toggleInputFocus

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
    showSuggestions: selectors.getShowSuggestions,
    isSearchFocused: selectors.getSearchFocus,
  }),
  dispatch => ({
    actions: bindActionCreators({ ...actions, ...uiActions }, dispatch)
  })
)(Search)
