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
// GEOLOCATION
// -----

export function* geolocation() {

  yield* takeLatest(actions.GEOLOCATION_REQUEST, fetchGeolocation, requestSubmit)

}

function* fetchGeolocation(callback) {

  try {

    // request user geolocation
    const { coords: { longitude: lng, latitude: lat } } = yield call(Geolocation.getCurrentPosition)

    // success!
    yield put({ type: actions.GEOLOCATION_SUCCESS, payload: { point: [ lng, lat ] } })

    // continue
    yield call(callback)

  } catch (error) {

    // failure!
    yield put({ type: actions.GEOLOCATION_FAILURE, payload: { error } })

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

    // perform request
    const res = yield call(API.post, 'search/pubs', { point, features, maxDistance })
    const data = yield res.json()
    const results = data.pubs

    // get search ui state
    const isSearchOverlayed = yield select(selectors.isSearchOverlayed)

    // construct meta
    const meta = {}

    // update search ui state if necessary
    if (isSearchOverlayed) meta.ui = { search: { overlay: !isSearchOverlayed } }

    // success!
    yield put({ type: actions.SUBMIT_SUCCESS, payload: { results }, meta })

  } catch (error) {

    // failure!
    yield put({ type: actions.SUBMIT_FAILURE, payload: { error } })

  }

}

function* requestSubmit({ fitToBounds=true }={}) {

  yield put({ type: actions.SUBMIT_REQUEST, meta: { ui: { search: { fitToBounds } } } })

}

// ----
// OBSERVERS
// ----

export function* observeFeature() {

  yield* takeLatest(actions.FEATURE, handleFeature)

}

function* handleFeature() {

  const isSearchOverlayed = yield select(selectors.isSearchOverlayed)

  if (!isSearchOverlayed) yield* requestSubmit({ fitToBounds: false })

}

export function* observeGeocode() {

  yield* takeLatest(actions.GEOCODE_SET, requestSubmit)

}

export function* observePoint() {

  yield* takeLatest(actions.POINT_SET, requestSubmit, { fitToBounds: false })

}

// export the root saga containing forks of all the sagas
export default function* root() {

  yield fork(geocode)
  yield fork(geolocation)
  yield fork(submit)

  yield fork(observeFeature)
  yield fork(observeGeocode)
  yield fork(observePoint)

}
