import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as Pub from '../../pub'
import * as Search from '../../search'

export default combineReducers({
  routing: routerReducer,
  [Pub.name]: Pub.reducer,
  [Search.name]: Search.reducer,
})
