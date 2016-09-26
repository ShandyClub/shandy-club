import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  requesting: false,
  error: null,
  search: {
    focus: false,
    overlay: true,
  }
})

export default createReducer(initialState, {

  [actions.UPDATE]: (state, action) => state.merge({ ...action.payload }),
  [actions.RESET]: state => state.merge({ ...initialState.toJS() }),

})
