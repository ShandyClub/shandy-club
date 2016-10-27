import { createSelector } from 'reselect'
import { name } from './constants'

import { selectors as ui } from '../ui'

// ------
// STATIC
// ------
const getAll = state => state.get(name)
const getFeatures = createSelector( getAll, state => state.get('features') )
const getGeocodes = createSelector( getAll, state => state.get('geocodes') )
const getMaxDistance = createSelector( getAll, state => state.get('maxDistance') )
const getPoint = createSelector( getAll, state => state.get('point').toArray() )
const getResults = createSelector( getAll, state => state.get('results') )
const getSelectedResultIndex = createSelector( getAll, state => state.get('selectedResultIndex') )
const getTerm = createSelector( getAll, state => state.get('term') )
const getSearchFeatures = ui.getSearchFeatures
const getSearchFitToBounds = ui.getSearchFitToBounds
const getSearchFocus = ui.getSearchFocus
const getSearchOverlay = ui.getSearchOverlay

// ------
// COMPUTED
// ------
const getTotalResults = createSelector( getResults, results => results.size )
const getSelectedResult = createSelector( [ getResults, getSelectedResultIndex ], (results, index) => results.get(index) && results.get(index).toObject() )
const getIsPanelOpen = createSelector( getSelectedResult, selectedResult => selectedResult )
const getShowSuggestions = createSelector( [ getTerm, getGeocodes, getSearchFocus ], (term, geocodes, focus) => term && geocodes.size && focus )

// construct Leaflet markers from `results`
const getMapMarkers = createSelector( getResults, results => results.map( r => ({ id: r.get('_id'), coordinates: r.getIn([ 'loc', 'coordinates' ]).toArray(), name: r.get('name') }) ).toArray() )

export default {
  features: getFeatures,
  geocodes: getGeocodes,
  maxDistance: getMaxDistance,
  point: getPoint,
  results: getResults,
  selectedResultIndex: getSelectedResultIndex,
  term: getTerm,
  mapMarkers: getMapMarkers,
  isPanelOpen: getIsPanelOpen,
  isSearchFeatures: getSearchFeatures,
  isSearchFitToBounds: getSearchFitToBounds,
  isSearchFocused: getSearchFocus,
  isSearchOverlayed: getSearchOverlay,
  selectedResult: getSelectedResult,
  showSuggestions: getShowSuggestions,
  totalResults: getTotalResults,
}
