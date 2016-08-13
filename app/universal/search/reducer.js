import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

// actionTypes
import * as actions from './actionTypes'

// utils
import { immutableToggle as toggle } from '../shared/util'

export const initialState = Immutable.fromJS({
  features: [],
  results: [],
  term: null,
  requesting: false,
  error: null,
})

export default createReducer(initialState, {

  [actions.TERM]: (state, action) => state.merge({ ...action.payload }),
  [actions.FEATURE]: (state, action) => toggle(state.get('features'), action.payload.feature),
  [actions.SUBMIT_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.SUBMIT_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.SUBMIT_FAILURE]: (state, action) => state.merge({ ...action.payload }),

})
