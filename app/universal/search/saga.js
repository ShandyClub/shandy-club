import { takeLatest } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'

// services
import * as API from '../shared/services/api'
import * as Geolocation from '../shared/services/geolocation'

// actions/selectors
import * as actions from './actionTypes'
import { actionTypes as ui } from '../ui'
import selectors from './selectors'

// -----
// GEOCODE
// -----

export function* geocode() {

  yield* takeLatest(actions.GEOCODE_REQUEST, fetchGeocode)

}

export function* watchGeocode() {

  yield* takeLatest(actions.GEOCODE_SUCCESS, updateUI, { requesting: false })

}

function* fetchGeocode(action) {

  try {

    yield call(updateUI, { error: null, requesting: true }, action)

    const res = yield call(API.get, `search/geocode/${action.payload.term}`)
    const data = yield res.json()
    const geocodes = data.geocode

    yield put({ type: ui.UPDATE, payload: { requesting: false } })
    yield put({ type: actions.GEOCODE_SUCCESS, payload: { geocodes } })

  } catch (error) {

    yield call(updateUI, { error, requesting: false }, action)

    yield put({ type: actions.GEOCODE_FAILURE })

  }

}

// -----
// LUCKY
// -----

export function* lucky() {

  yield* takeLatest(actions.LUCKY_REQUEST, checkGeolocation, fetchLucky)

}

export function* watchLucky() {

  yield* takeLatest(actions.LUCKY_SUCCESS, updateUI, { requesting: false })

}

function* fetchLucky(action) {

  try {

    yield call(updateUI, { error: null, requesting: true }, action)

    // get geolocation data
    const geolocation = yield select(selectors.geolocation)

    const res = yield call(API.post, 'search/lucky', { ...geolocation })
    const data = yield res.json()
    const results = data.pubs

    yield put({ type: ui.UPDATE, payload: { requesting: false } })
    yield put({ type: actions.LUCKY_SUCCESS, payload: { results } })

  } catch (error) {

    yield call(updateUI, { error, requesting: false }, action)

    yield put({ type: actions.LUCKY_FAILURE })

  }

}

// -----
// SUBMIT
// -----

export function* submit() {

  yield* takeLatest(actions.SUBMIT_REQUEST, fetchSubmit)

}

export function* watchSubmit() {

  yield* takeLatest(actions.SUBMIT_SUCCESS, updateUI, { requesting: false })

}

function* fetchSubmit(action) {

  try {

    yield call(updateUI, { error: null, requesting: true }, action)

    // get search criteria
    const point = yield select(selectors.point)
    const features = yield select(selectors.features)

    const res = yield call(API.post, 'search/pubs', { point, features })
    const data = yield res.json()
    const results = data.pubs

    yield put({ type: actions.SUBMIT_SUCCESS, payload: { results } })

  } catch (error) {

    yield call(updateUI, { error, requesting: false }, action)

    yield put({ type: actions.SUBMIT_FAILURE })

  }

}

// -----
// GEOLOCATION
// -----

function* checkGeolocation(callback, action) {

  try {

    // request user geolocation
    const { coords: { longitude: lng, latitude: lat } } = yield call(Geolocation.getCurrentPosition)

    yield put({ type: actions.GEOLOCATION_SET, payload: { geolocation: { lng, lat } } })

    yield call(callback, action)

  } catch (error) {

    yield call(updateUI, { error })

  }

}

// -----
// UI
// -----

function* updateUI(props) {

  yield put({ type: ui.UPDATE, payload: { ...props } })

}

// export the root saga containing forks of all the sagas
export default function* root() {

  yield fork(geocode)
  yield fork(watchGeocode)

  yield fork(lucky)
  yield fork(watchLucky)

  yield fork(submit)
  yield fork(watchSubmit)

}
