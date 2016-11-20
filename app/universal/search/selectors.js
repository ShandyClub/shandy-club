import { createSelector } from 'reselect'
import { name } from './constants'

import { selectors as ui } from '../ui'

// ------
// STATIC
// ------
const getAll = state => state.get(name)
const getFeatures = createSelector( getAll, state => state.get('features') )
const getGeocodes = createSelector( getAll, state => state.get('geocodes') )
const getGeolocation = createSelector( getAll, state => state.get('geolocation').toArray() )
const getMaxDistance = createSelector( getAll, state => state.get('maxDistance') )
const getPoint = createSelector( getAll, state => state.get('point').toArray() )
const getResults = createSelector( getAll, state => state.get('results') )
const getSelectedResultIndex = createSelector( getAll, state => state.get('selectedResultIndex') )
const getTerm = createSelector( getAll, state => state.get('term') )
const getSearchFeatures = ui.searchFeatures
const getSearchFitToBounds = ui.searchFitToBounds
const getSearchFocus = ui.searchFocus
const getSearchOverlay = ui.searchOverlay

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
  geolocation: getGeolocation,
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
