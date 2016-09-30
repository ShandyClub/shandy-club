import test from 'tape'
import Immutable from 'immutable'

import reducer, { initialState } from '../../app/universal/search/reducer'
import * as types from '../../app/universal/search/actionTypes'

test('Search:Reducer[DEFAULT] - Search reducer default output', t => {

  const actual = reducer(undefined, {})
  const expected = initialState

  t.deepEqual(actual, expected,
    'reducer() should return initial state')

  t.end()

})

test(`Search:Reducer[${types.FEATURE}] - Search reducer toggle feature output`, t => {

  const payload = { feature: 'architecture' }

  const actual = reducer(initialState, { type: types.FEATURE, payload })
  const expected = initialState.updateIn([ 'features', payload.feature ], value => !value )

  t.ok(Immutable.is(actual, expected),
    'reducer() should return toggle feature state')

  t.end()

})

test(`Search:Reducer[${types.GEOCODE_SET}] - Search reducer set geocode output`, t => {

  const payload = { point: [ -0.101729, 51.569542 ], term: 'Finsbury Park' }

  const actual = reducer(initialState, { type: types.GEOCODE_SET, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return set geocode state')

  t.end()

})

test(`Search:Reducer[${types.GEOCODE_RESET}] - Search reducer reset geocode output`, t => {

  const payload = { geocodes: [], term: null }

  const actual = reducer(initialState, { type: types.GEOCODE_RESET, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return reset geocode state')

  t.end()

})

test(`Search:Reducer[${types.GEOLOCATION_SET}] - Search reducer set geolocation output`, t => {

  const payload = { geolocation: { lng: -0.101729, lat: 51.569542 } }

  const actual = reducer(initialState, { type: types.GEOLOCATION_SET, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return set geolocation state')

  t.end()

})

test(`Search:Reducer[${types.GEOCODE_REQUEST}] - Search reducer geocode API request output`, t => {

  const payload = { term: 'Shoreditch' }

  const actual = reducer(initialState, { type: types.GEOCODE_REQUEST, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return geocode API request state')

  t.end()

})

test(`Search:Reducer[${types.GEOCODE_SUCCESS}] - Search reducer geocode API success output`, t => {

  const payload = { geocodes: [] }

  const actual = reducer(initialState, { type: types.GEOCODE_SUCCESS, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return geocode API success state')

  t.end()

})

test(`Search:Reducer[${types.GEOCODE_FAILURE}] - Search reducer geocode API failure output`, t => {

  const payload = {}

  const actual = reducer(initialState, { type: types.GEOCODE_FAILURE, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return geocode API failure state')

  t.end()

})

test(`Search:Reducer[${types.SUBMIT_REQUEST}] - Search reducer submit API request output`, t => {

  const payload = {}

  const actual = reducer(initialState, { type: types.SUBMIT_REQUEST, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return submit API request state')

  t.end()

})

test(`Search:Reducer[${types.SUBMIT_SUCCESS}] - Search reducer submit API success output`, t => {

  const payload = { results: [] }

  const actual = reducer(initialState, { type: types.SUBMIT_SUCCESS, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return submit API success state')

  t.end()

})

test(`Search:Reducer[${types.SUBMIT_FAILURE}] - Search reducer submit API failure output`, t => {

  const payload = {}

  const actual = reducer(initialState, { type: types.SUBMIT_FAILURE, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return submit API failure state')

  t.end()

})

test(`Search:Reducer[${types.LUCKY_REQUEST}] - Search reducer lucky API request output`, t => {

  const payload = {}

  const actual = reducer(initialState, { type: types.LUCKY_REQUEST, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return lucky API request state')

  t.end()

})

test(`Search:Reducer[${types.LUCKY_SUCCESS}] - Search reducer lucky API success output`, t => {

  const payload = { results: [] }

  const actual = reducer(initialState, { type: types.LUCKY_SUCCESS, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return lucky API success state')

  t.end()

})

test(`Search:Reducer[${types.LUCKY_FAILURE}] - Search reducer lucky API failure output`, t => {

  const payload = {}

  const actual = reducer(initialState, { type: types.LUCKY_FAILURE, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return lucky API failure state')

  t.end()

})
