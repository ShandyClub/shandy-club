import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'

import * as actions from './actions'
import { REQUEST_PATTERN, SUCCESS_PATTERN, FAILURE_PATTERN } from './constants'

// -----
// REQUEST
// -----

export function* watchRequest() {

  yield* takeLatest( action => REQUEST_PATTERN.test(action.type), handleRequest)

}

function* handleRequest({ meta={} }) {

  const { ui } = meta

  yield put(actions.updateUI({ error: null, requesting: true, ...ui }))

}

// -----
// SUCCESS
// -----

export function* watchSuccess() {

  yield* takeLatest( action => SUCCESS_PATTERN.test(action.type), handleSuccess)

}

function* handleSuccess({ meta={} }) {

  const { ui } = meta

  yield put(actions.updateUI({ requesting: false, ...ui }))

}

// -----
// FAILURE
// -----

export function* watchFailure() {

  yield* takeLatest( action => FAILURE_PATTERN.test(action.type), handleFailure)

}

function* handleFailure(action) {

  const { error } = action.payload

  yield put(actions.updateUI({ error, requesting: false }))

}

export default function* root() {

  yield fork(watchRequest)
  yield fork(watchSuccess)
  yield fork(watchFailure)

}
