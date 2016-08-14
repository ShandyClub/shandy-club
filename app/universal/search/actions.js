import * as actions from './actionTypes'

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

export const toggleFeature = feature => ({
  type: actions.FEATURE,
  payload: {
    feature
  }
})

export const submitSearch = () => ({
  type: actions.SUBMIT_REQUEST,
  payload: {
    requesting: true,
    error: null
  }
})

export const submitLucky = () => ({
  type: actions.LUCKY_REQUEST,
  payload: {
    requesting: true,
    error: null
  }
})
