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
import Button from '../shared/components/button'

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

    const { actions, features, geocodes, term, isSearchFeatures, showSuggestions } = this.props
    const { getGeocode, setGeocode, clearGeocode, toggleFeature, submitSearch, submitLucky } = actions

    const { toggleInputFocus, toggleFeatures } = this

    const renderFeatures = isSearchFeatures ? (
      <Components.features features={features} toggleFeature={toggleFeature} />
    ): null

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

        <Button
          label={'toggle features'}
          callback={toggleFeatures} />

        { renderFeatures }

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
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators({ ...actions, ...uiActions }, dispatch)
  })
)(Search)
