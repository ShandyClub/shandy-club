import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

// actionTypes
import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  features: [],
  results: [],
  term: null,
})

export default createReducer(initialState, {

  [actions.TERM]: (state, action) => state.merge({ ...action.payload }),
  // TODO - how to update feature array with toggled feature ?
  [actions.FEATURE]: (state, action) => state.merge({ ...action.payload }),
  [actions.SUBMIT]: (state, action) => state.merge({ ...action.payload }),
  [actions.RESULT]: (state, action) => state.merge({ ...action.payload }),

})
