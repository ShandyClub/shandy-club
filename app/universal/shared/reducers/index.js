import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as Search from '../../search'
import * as UI from '../../ui'

export default combineReducers({
  routing: routerReducer,
  [Search.name]: Search.reducer,
  [UI.name]: UI.reducer,
})
