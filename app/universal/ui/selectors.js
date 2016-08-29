import { name } from './constants'

export const getAll = state => state.get(name)
export const getError = state => state.getIn([ name, 'error' ])
export const getRequesting = state => state.getIn([ name, 'requesting' ])
