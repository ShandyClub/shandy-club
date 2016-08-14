import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'

import * as API from '../shared/services/api'
import * as actions from './actionTypes'
import { getFeatures, getPoint } from './selectors'

// -----
// GEOCODE
// -----

export function* geocode() {

  yield* takeLatest(actions.GEOCODE_REQUEST, fetchGeocode)

}

function* fetchGeocode(action) {

  try {

    const res = yield call(API.get, `search/geocode/${action.payload.term}`)
    const data = yield res.json()
    const geocodes = data.geocode

    yield put({ type: actions.GEOCODE_SUCCESS, payload: { geocodes } })

  } catch (error) {

    yield put({ type: actions.GEOCODE_FAILURE, payload: { error } })

  }

}

// -----
// LUCKY
// -----

export function* lucky() {

  yield* takeLatest(actions.LUCKY_REQUEST, fetchLucky)

}

function* fetchLucky() {

  // TODO - get geolocation

  try {

    const res = yield call(API.post, 'search/lucky', {})
    const data = yield res.json()
    const results = data.pubs

    yield put({ type: actions.LUCKY_SUCCESS, payload: { results, requesting: false } })

  } catch (error) {

    yield put({ type: actions.LUCKY_FAILURE, payload: { error, requesting: false } })

  }

}

// -----
// SUBMIT
// -----

export function* submit() {

  yield* takeLatest(actions.SUBMIT_REQUEST, fetchSubmit)

}

function* fetchSubmit() {

  try {

    // get search criteria
    const point = yield select(getPoint)
    const features = yield select(getFeatures)

    const res = yield call(API.post, 'search/pubs', { point, features })
    const data = yield res.json()
    const results = data.pubs

    yield put({ type: actions.SUBMIT_SUCCESS, payload: { results, requesting: false } })

  } catch (error) {

    yield put({ type: actions.SUBMIT_FAILURE, payload: { error, requesting: false } })

  }

}

// export the root saga containing forks of all the sagas
export default function* root() {

  yield fork(geocode)
  yield fork(lucky)
  yield fork(submit)

}
