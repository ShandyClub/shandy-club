import { takeLatest } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'

// services
import * as API from '../core/services/api'
import * as Geolocation from '../core/services/geolocation'

// actions/selectors
import * as actions from './actions'
import * as actionTypes from './actionTypes'
import selectors from './selectors'

// -----
// GEOCODE
// -----

export function* geocode() {

  yield* takeLatest(actionTypes.GEOCODE_REQUEST, fetchGeocode)

}

function* fetchGeocode(action) {

  try {

    // geocode search term
    const res = yield call(API.get, `search/geocode/${action.payload.term}`)
    const data = yield res.json()
    const geocodes = data.geocode

    // success!
    yield put(actions.geocodeSuccess({ geocodes }))

  } catch (error) {

    // failure!
    yield put(actions.geocodeFailure({ error }))

  }

}

// -----
// GEOLOCATION
// -----

export function* geolocation() {

  yield* takeLatest(actionTypes.GEOLOCATION_REQUEST, fetchGeolocation, requestSubmit)

}

function* fetchGeolocation(callback) {

  try {

    // request user geolocation
    const { coords: { longitude: lng, latitude: lat } } = yield call(Geolocation.getCurrentPosition)

    // success!
    yield put(actions.geolocationSuccess({ geolocation: [ lat, lng ], point: [ lng, lat ] }))

    // continue
    yield call(callback)

  } catch (error) {

    // failure!
    yield put(actions.geolocationFailure({ error }))

  }

}

// -----
// SUBMIT
// -----

export function* submit() {

  yield* takeLatest(actionTypes.SUBMIT_REQUEST, fetchSubmit)

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
    yield put(actions.submitSuccess({ results }, meta))

  } catch (error) {

    // failure!
    yield put(actions.submitFailure({ error }))

  }

}

function* requestSubmit({ fitToBounds=true }={}) {

  yield put(actions.submitSearch({ ui: { search: { fitToBounds } } }))

}

// ----
// OBSERVERS
// ----

export function* observeFeature() {

  yield* takeLatest(actionTypes.FEATURE, handleFeature)

}

function* handleFeature() {

  const isSearchOverlayed = yield select(selectors.isSearchOverlayed)

  if (!isSearchOverlayed) yield* requestSubmit({ fitToBounds: false })

}

export function* observeGeocode() {

  yield* takeLatest(actionTypes.GEOCODE_SET, requestSubmit)

}

export function* observePoint() {

  yield* takeLatest(actionTypes.POINT_SET, requestSubmit, { fitToBounds: false })

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
