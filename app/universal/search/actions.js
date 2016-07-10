import * as actions from './actionTypes'

export const someAction = () => ({
  type: actions.SOME_ACTION,
  payload: {
    search: true
  }
})
