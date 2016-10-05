import { createSelector } from 'reselect'
import { name } from './constants'

import { selectors as ui } from '../ui'

// static
const getAll = state => state.get(name)
const getFeatures = createSelector( getAll, state => state.get('features') )
const getGeocodes = createSelector( getAll, state => state.get('geocodes') )
const getGeolocation = createSelector( getAll, state => state.get('geolocation').toObject() )
const getMaxDistance = createSelector( getAll, state => state.get('maxDistance') )
const getPoint = createSelector( getAll, state => state.get('point').toArray() )
const getResults = createSelector( getAll, state => state.get('results') )
const getTerm = createSelector( getAll, state => state.get('term') )
const getSearchFeatures = ui.getSearchFeatures
const getSearchFocus = ui.getSearchFocus

// computed
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
  term: getTerm,
  mapMarkers: getMapMarkers,
  isSearchFeatures: getSearchFeatures,
  isSearchFocused: getSearchFocus,
  showSuggestions: getShowSuggestions,
}
