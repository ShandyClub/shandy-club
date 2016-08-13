import * as actions from './actionTypes'

export const getGeocode = term => ({
  type: actions.GEOCODE_REQUEST,
  payload: {
    term
  }
})

export const toggleFeature = feature => ({
  type: actions.FEATURE,
  payload: {
    feature
  }
})

export const submitSearch = search => ({
  type: actions.SUBMIT_REQUEST,
  payload: {
    search,
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
