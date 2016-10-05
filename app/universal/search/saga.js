import { takeLatest } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'

// services
import * as API from '../shared/services/api'
import * as Geolocation from '../shared/services/geolocation'

// actions/selectors
import * as actions from './actionTypes'
import selectors from './selectors'

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

  yield* takeLatest(actions.LUCKY_REQUEST, checkGeolocation, fetchLucky, actions.LUCKY_FAILURE)

}

function* fetchLucky() {

  try {

    // get geolocation data
    const geolocation = yield select(selectors.geolocation)

    const res = yield call(API.post, 'search/lucky', { ...geolocation })
    const data = yield res.json()
    const results = data.pubs

    yield put({ type: actions.LUCKY_SUCCESS, payload: { results } })

  } catch (error) {

    yield put({ type: actions.LUCKY_FAILURE, payload: { error } })

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
    const point = yield select(selectors.point)
    const features = yield select(selectors.features)
    const maxDistance = yield select(selectors.maxDistance)

    const res = yield call(API.post, 'search/pubs', { point, features, maxDistance })
    const data = yield res.json()
    const results = data.pubs

    yield put({ type: actions.SUBMIT_SUCCESS, payload: { results } })

  } catch (error) {

    yield put({ type: actions.SUBMIT_FAILURE, payload: { error } })

  }

}

// -----
// GEOLOCATION
// -----

function* checkGeolocation(callback, failure, action) {

  try {

    // request user geolocation
    const { coords: { longitude: lng, latitude: lat } } = yield call(Geolocation.getCurrentPosition)

    yield put({ type: actions.GEOLOCATION_SET, payload: { geolocation: { lng, lat } } })

    yield call(callback, action)

  } catch (error) {

    yield put({ type: failure, payload: { error } })

  }

}

// export the root saga containing forks of all the sagas
export default function* root() {

  yield fork(geocode)
  yield fork(lucky)
  yield fork(submit)

}
