import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as pub from '../../pub'

export default combineReducers({
  routing: routerReducer,
  [pub.name]: pub.reducer
})
