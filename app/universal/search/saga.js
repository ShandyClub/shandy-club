import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'

import * as API from '../shared/services/api'
import * as actions from './actionTypes'
// import { getHuman, hasBeenPolled, hasVisited, isTheEnd } from './selectors'

// -----
// JUST A TEST
// -----

export function* testing() {

  yield* takeLatest(actions.SOME_ACTION, fetchTest)

}

function* fetchTest(action) {

  yield true

}

// export the root saga containing forks of all the sagas
export default function* root() {

  yield fork(testing)

}
