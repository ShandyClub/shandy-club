import { REQUEST_PUB } from './actionTypes'

export const initialState = {
  request: false
}

export default (state = initialState, action) => {

  switch (action.type) {

    case REQUEST_PUB:
      return Object.assign({}, state, {
        request: true
      });

    default:
      return state

  }

}
