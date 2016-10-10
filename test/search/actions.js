import test from 'tape'

import * as actions from '../../app/universal/search/actions'
import * as types from '../../app/universal/search/actionTypes'

test(`Search:Action[${types.GEOCODE_REQUEST}] - Geocode API request action`, t => {

  const term = 'Shoreditch'

  const actual = actions.getGeocode(term)
  const expected = { type: types.GEOCODE_REQUEST, payload: { term } }

  t.deepEqual(actual, expected,
    'getGeocode() should set `term`')

  t.end()

})

test(`Search:Action[${types.GEOCODE_SET}] - Geocode set action`, t => {

  const point = [ -0.101729, 51.569542 ]
  const term = 'Finsbury Park'

  const actual = actions.setGeocode(point, term)
  const expected = { type: types.GEOCODE_SET, payload: { point, term } }

  t.deepEqual(actual, expected,
    'setGeocode() should set `point` and `term`')

  t.end()

})

test(`Search:Action[${types.GEOCODE_RESET}] - Geocode clear action`, t => {

  const actual = actions.clearGeocode()
  const expected = { type: types.GEOCODE_RESET, payload: { geocodes: [], term: null } }

  t.deepEqual(actual, expected,
    'clearGeocode() should reset `geocodes` and `term`')

  t.end()

})

test(`Search:Action[${types.FEATURE}] - Toggle feature action`, t => {

  const feature = 'beer'

  const actual = actions.toggleFeature(feature)
  const expected = { type: types.FEATURE, payload: { feature }, meta: { analytics: { type: 'toggleFeature', payload: { feature } } } }

  t.deepEqual(actual, expected,
    'toggleFeature() should toggle `feature`')

  t.end()

})

test(`Search:Action[${types.SUBMIT_REQUEST}] - Submit search action`, t => {

  const actual = actions.submitSearch()
  const expected = { type: types.SUBMIT_REQUEST }

  t.deepEqual(actual, expected,
    'submitSearch() should start search request')

  t.end()

})

test(`Search:Action[${types.LUCKY_REQUEST}] - Submit lucky action`, t => {

  const actual = actions.submitLucky()
  const expected = { type: types.LUCKY_REQUEST }

  t.deepEqual(actual, expected,
    'submitLucky() should start lucky request')

  t.end()

})
