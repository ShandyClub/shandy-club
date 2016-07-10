import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

// actionTypes
import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  request: false
})

export default createReducer(initialState, {

  [actions.REQUEST_PUB]: (state, action) => state.merge({ ...action.payload })

})
