import { createSelector } from 'reselect'

import { name } from './constants'

const getAll = state => state.get(name)

const getError = createSelector( getAll, state => state.get('error') )
const getRequesting = createSelector( getAll, state => state.get('requesting') )

const getSearch = createSelector( getAll, state => state.get('search') )
const getSearchFeatures = createSelector( getSearch, state => state.get('features') )
const getSearchFitToBounds = createSelector( getSearch, state => state.get('fitToBounds') )
const getSearchFocus = createSelector( getSearch, state => state.get('focus') )
const getSearchOverlay = createSelector( getSearch, state => state.get('overlay') )

export default {
  all: getAll,

  error: getError,
  requesting: getRequesting,

  search: getSearch,
  searchFeatures: getSearchFeatures,
  searchFitToBounds: getSearchFitToBounds,
  searchFocus: getSearchFocus,
  searchOverlay: getSearchOverlay,
}
