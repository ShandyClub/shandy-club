import { name } from './constants'

export const getAll = state => state.get(name)

export const getError = state => state.getIn([ name, 'error' ])
export const getRequesting = state => state.getIn([ name, 'requesting' ])

export const getSearch = state => state.getIn([ name, 'search' ])
export const getSearchFeatures = state => state.getIn([ name, 'search', 'features' ])
export const getSearchFocus = state => state.getIn([ name, 'search', 'focus' ])
export const getSearchOverlay = state => state.getIn([ name, 'search', 'overlay' ])
