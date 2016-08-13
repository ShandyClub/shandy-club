import * as actions from './actionTypes'

export const setTerm = term => ({
  type: actions.TERM,
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
