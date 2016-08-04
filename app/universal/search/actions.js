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

export const submitSearch = () => ({
  type: actions.SUBMIT
})

export const setResult = result => ({
  type: actions.RESULT,
  payload: {
    result
  }
})
