import test from 'tape'

import * as actions from '../../app/universal/search/actions'
import * as types from '../../app/universal/search/actionTypes'

test(`Search:Action[${types.GEOCODE_REQUEST}] - Geocode API request action`, t => {

  const term = 'Shoreditch'
  const meta = { analytics: { payload: { term }, type: 'geocodeRequest' } }

  const actual = actions.getGeocode(term)
  const expected = { type: types.GEOCODE_REQUEST, payload: { term }, meta }

  t.deepEqual(actual, expected,
    'getGeocode() should set `term`')

  t.end()

})

test(`Search:Action[${types.GEOCODE_SET}] - Geocode set action`, t => {

  const point = [ -0.101729, 51.569542 ]
  const term = 'Finsbury Park'
  const meta = { analytics: { payload: { point, term }, type: 'geocodeSelect' } }

  const actual = actions.setGeocode(point, term)
  const expected = { type: types.GEOCODE_SET, payload: { point, term }, meta }

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

  const meta = {}

  const actual = actions.submitSearch(meta)
  const expected = { type: types.SUBMIT_REQUEST, meta }

  t.deepEqual(actual, expected,
    'submitSearch() should start search request')

  t.end()

})
