import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

// TODO - import some action types
import { SOME_ACTION } from './actionTypes'

// TODO - set initialState
export const initialState = Immutable.Map({})

export default createReducer(initialState, {
  [SOME_ACTION]: (state, action) => state.merge({})
})
