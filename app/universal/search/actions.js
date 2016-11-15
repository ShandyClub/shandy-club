import * as actions from './actionTypes'
import { DEFAULT_POINT } from './constants'

export const getGeocode = term => ({
  type: actions.GEOCODE_REQUEST,
  payload: {
    term
  }
})

export const geocodeSuccess = payload => ({
  type: actions.GEOCODE_SUCCESS,
  payload,
})

export const geocodeFailure = payload => ({
  type: actions.GEOCODE_FAILURE,
  payload,
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

export const getGeolocation = () => ({
  type: actions.GEOLOCATION_REQUEST
})

export const geolocationSuccess = payload => ({
  type: actions.GEOLOCATION_SUCCESS,
  payload,
})

export const geolocationFailure = payload => ({
  type: actions.GEOLOCATION_FAILURE,
  payload,
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

export const submitSearch = meta => ({
  type: actions.SUBMIT_REQUEST,
  meta,
})

export const submitSuccess = (payload, meta) => ({
  type: actions.SUBMIT_SUCCESS,
  payload,
  meta,
})

export const submitFailure = payload => ({
  type: actions.SUBMIT_FAILURE,
  payload,
})

export const resetSearch = () => ({
  type: actions.RESET
})
