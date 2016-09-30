import { createSelector } from 'reselect'
import { name } from './constants'

import { selectors as ui } from '../ui'

// static
const getAll = state => state.get(name)
const getFeatures = createSelector( getAll, state => state.get('features') )
const getGeocodes = createSelector( getAll, state => state.get('geocodes') )
const getPoint = createSelector( getAll, state => state.get('point').toArray() )
const getResults = createSelector( getAll, state => state.get('results') )
const getTerm = createSelector( getAll, state => state.get('term') )
const getSearchFeatures = ui.getSearchFeatures
const getSearchFocus = ui.getSearchFocus

// computed
const getShowSuggestions = createSelector( [ getTerm, getGeocodes, getSearchFocus ], (term, geocodes, focus) => term && geocodes.size && focus )

export default {
  features: getFeatures,
  geocodes: getGeocodes,
  point: getPoint,
  results: getResults,
  term: getTerm,
  isSearchFeatures: getSearchFeatures,
  isSearchFocused: getSearchFocus,
  showSuggestions: getShowSuggestions,
}
