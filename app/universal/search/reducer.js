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
    tv: false
  },
  geocodes: [],
  geolocation: {
    lng: null,
    lat: null,
  },
  maxDistance: MAX_DISTANCE,
  point: [],
  results: [],
  term: null,
})

export default createReducer(initialState, {

  [actions.FEATURE]: (state, action) => state.updateIn([ 'features', action.payload.feature ], value => !value ),

  [actions.GEOCODE_SET]: (state, action) => state.merge({ ...action.payload }),
  [actions.GEOCODE_RESET]: (state, action) => state.merge({ ...action.payload }),

  [actions.GEOLOCATION_SET]: (state, action) => state.merge({ ...action.payload }),

  [actions.GEOCODE_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.GEOCODE_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.GEOCODE_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.SUBMIT_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.SUBMIT_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.SUBMIT_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.LUCKY_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.LUCKY_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.LUCKY_FAILURE]: (state, action) => state.merge({ ...action.payload }),

})
