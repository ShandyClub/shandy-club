import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  requesting: false,
  error: null,
})

export default createReducer(initialState, {

  [actions.SET_ERROR]: (state, action) => state.merge({ ...action.payload }),
  [actions.SET_REQUEST]: (state, action) => state.merge({ ...action.payload }),

})
