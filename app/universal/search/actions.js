import * as actions from './actionTypes'
import { DEFAULT_POINT } from './constants'

export const getGeocode = term => ({
  type: actions.GEOCODE_REQUEST,
  payload: {
    term
  }
})

export const setGeocode = (point, term) => ({
  type: actions.GEOCODE_SET,
  payload: {
    term,
    point
  }
})

export const clearGeocode = () => ({
  type: actions.GEOCODE_RESET,
  payload: {
    geocodes: [],
    term: null
  }
})

export const setPoint = (point=DEFAULT_POINT) => ({
  type: actions.POINT_SET,
  payload: {
    point
  }
})
export const setSelectedResult = (selectedResultIndex=null) => ({
  type: actions.SELECTED_RESULT_SET,
  payload: {
    selectedResultIndex,
  }
})

export const toggleFeature = feature => ({
  type: actions.FEATURE,
  payload: {
    feature
  },
  meta: {
    analytics: {
      type: 'toggleFeature',
      payload: {
        feature,
      }
    },
  },
})

export const submitSearch = () => ({
  type: actions.SUBMIT_REQUEST
})

export const submitLucky = () => ({
  type: actions.LUCKY_REQUEST
})
