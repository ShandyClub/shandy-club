import { createSelector } from 'reselect'
import { name } from './constants'

import { selectors as ui } from '../ui'

// static
const getAll = state => state.get(name)
const getFeatures = createSelector( getAll, state => state.get('features').toObject() )
const getGeocodes = createSelector( getAll, state => state.get('geocodes') )
const getResults = createSelector( getAll, state => state.get('results') )
const getTerm = createSelector( getAll, state => state.get('term') )
const getSearchFocus = ui.getSearchFocus

// computed
const getShowSuggestions = createSelector( [ getTerm, getGeocodes, getSearchFocus ], (term, geocodes, focus) => term && geocodes.size && focus )

export default {
  features: getFeatures,
  geocodes: getGeocodes,
  results: getResults,
  term: getTerm,
  isSearchFocused: getSearchFocus,
  showSuggestions: getShowSuggestions,
}
