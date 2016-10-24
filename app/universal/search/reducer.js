import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'
import { MAX_DISTANCE } from './constants'

export const initialState = Immutable.fromJS({
  features: {
    architecture: false,
    beer: false,
    fire: false,
    food: false,
    games: false,
    garden: false,
    peace: false,
    tv: false,
  },
  geocodes: [],
  maxDistance: MAX_DISTANCE,
  point: [],
  results: [],
  selectedResultIndex: null,
  term: null,
})

export default createReducer(initialState, {

  [actions.FEATURE]: (state, action) => state.updateIn([ 'features', action.payload.feature ], value => !value ),

  [actions.POINT_SET]: (state, action) => state.merge({ ...action.payload }),

  [actions.SELECTED_RESULT_SET]: (state, action) => state.merge({ ...action.payload }),

  [actions.GEOCODE_SET]: (state, action) => state.merge({ ...action.payload }),
  [actions.GEOCODE_RESET]: (state, action) => state.merge({ ...action.payload }),

  [actions.GEOCODE_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.GEOCODE_SUCCESS]: (state, action) => state.merge({ ...action.payload }),

  [actions.GEOLOCATION_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.GEOLOCATION_SUCCESS]: (state, action) => state.merge({ ...action.payload }),

  [actions.SUBMIT_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.SUBMIT_SUCCESS]: (state, action) => state.merge({ ...action.payload }),

})
