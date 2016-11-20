import * as actions from './actionTypes'
import { DEFAULT_POINT } from './constants'

export const getGeocode = term => ({
  type: actions.GEOCODE_REQUEST,
  payload: {
    term
  },
  meta: {
    analytics: {
      type: 'geocodeRequest',
      payload: { term },
    },
  },
})

export const geocodeSuccess = payload => ({
  type: actions.GEOCODE_SUCCESS,
  payload,
  meta: {
    analytics: {
      type: 'geocodeSuccess',
    },
  },
})

export const geocodeFailure = payload => ({
  type: actions.GEOCODE_FAILURE,
  payload,
  meta: {
    analytics: {
      type: 'geocodeFailure',
    },
  },
})

export const setGeocode = (point, term) => ({
  type: actions.GEOCODE_SET,
  payload: {
    term,
    point
  },
  meta: {
    analytics: {
      type: 'geocodeSelect',
      payload: { point, term },
    },
  },
})

export const clearGeocode = () => ({
  type: actions.GEOCODE_RESET,
  payload: {
    geocodes: [],
    term: null
  }
})

export const getGeolocation = () => ({
  type: actions.GEOLOCATION_REQUEST,
  meta: {
    analytics: {
      type: 'geolocationRequest',
    },
  },
})

export const geolocationSuccess = payload => ({
  type: actions.GEOLOCATION_SUCCESS,
  payload,
  meta: {
    analytics: {
      type: 'geolocationSuccess',
      payload: { geolocation: payload.geolocation },
    },
  },
})

export const geolocationFailure = payload => ({
  type: actions.GEOLOCATION_FAILURE,
  payload,
  meta: {
    analytics: {
      type: 'geolocationFailure',
    },
  },
})

export const setPoint = (point=DEFAULT_POINT) => ({
  type: actions.POINT_SET,
  payload: {
    point
  },
  meta: {
    analytics: {
      type: 'mapDragSearch',
      payload: { point },
    },
  },
})

export const setSelectedResult = (selectedResultIndex=null) => ({
  type: actions.SELECTED_RESULT_SET,
  payload: {
    selectedResultIndex,
  },
  meta: {
    analytics: {
      type: 'setSelectedResult',
      // TODO - method! marker or panel
      // payload: { method },
    },
  },
})

export const toggleFeature = feature => ({
  type: actions.FEATURE,
  payload: {
    feature
  },
  meta: {
    analytics: {
      type: 'toggleFeature',
      payload: { feature },
    },
  },
})

export const submitSearch = meta => ({
  type: actions.SUBMIT_REQUEST,
  // TODO - analytics meta w/search method
  meta,
})

export const submitSuccess = (payload, meta) => ({
  type: actions.SUBMIT_SUCCESS,
  payload,
  meta: {
    ...meta,
    analytics: {
      type: 'submitSuccess',
      payload: { results: payload.results.length },
    },
  },
})

export const submitFailure = payload => ({
  type: actions.SUBMIT_FAILURE,
  payload,
  meta: {
    analytics: {
      type: 'submitFailure',
    },
  },
})

export const resetSearch = () => ({
  type: actions.RESET,
  meta: {
    analytics: {
      type: 'resetSearch',
    },
  },
})
