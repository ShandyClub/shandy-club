import { combineReducers } from 'redux-immutablejs'
import * as Search from '../../search'
import * as UI from '../../ui'

export default combineReducers({
  [Search.name]: Search.reducer,
  [UI.name]: UI.reducer,
})
