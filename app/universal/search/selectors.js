import { createSelector } from 'reselect'
import { name } from './constants'

export const getAll = state => state.get(name)
export const getFeatures = state => state.getIn([ name, 'features' ])
export const getGeocodes = state => state.getIn([ name, 'geocodes' ])
export const getResults = state => state.getIn([ name, 'results' ])
export const getTerm = state => state.getIn([ name, 'term' ])
export const getIsRequesting = state => state.getIn([ name, 'requesting' ])
export const getError = state => state.getIn([ name, 'error' ])

export const getIsRequestingGeocodes = createSelector([ getTerm, getGeocodes ], (term, geocodes) => term && geocodes.length !== 0)
