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
})

export default createReducer(initialState, {

  [actions.TERM]: (state, action) => state.merge({ ...action.payload }),
  [actions.FEATURE]: (state, action) => toggle(state.get('features'), action.payload.feature),
  [actions.SUBMIT]: (state, action) => state.merge({ ...action.payload }),
  [actions.RESULT]: (state, action) => state.merge({ ...action.payload }),

})
