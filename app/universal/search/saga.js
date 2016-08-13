import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'

import * as API from '../shared/services/api'
import * as actions from './actionTypes'
// import { getHuman, hasBeenPolled, hasVisited, isTheEnd } from './selectors'

// -----
// SUBMIT
// -----

export function* submit() {

  yield* takeLatest(actions.SUBMIT_REQUEST, fetchSubmit)

}

function* fetchSubmit(action) {

  try {

    const res = yield call(API.post, 'search/pubs', { ...action.payload.search })
    const data = yield res.json()
    const results = data.pubs

    yield put({ type: actions.SUBMIT_SUCCESS, payload: { results, requesting: false } })

  } catch (error) {

    yield put({ type: actions.SUBMIT_FAILURE, payload: { error, requesting: false } })

  }

}

// export the root saga containing forks of all the sagas
export default function* root() {

  yield fork(submit)

}
