import test from 'tape'
import Immutable from 'immutable'

import reducer, { initialState } from '../../src/app/js/reducer/referralReducer'
import * as types from '../../src/app/js/actionTypes/referral'

test('Referral:Reducer[DEFAULT] - Referral reducer default output', t => {

  const actual = reducer(undefined, {})
  const expected = initialState

  t.deepEqual(actual, expected,
    'reducer() should return initial state')

  t.end()

})

test('Referral:Reducer[TOGGLE_EMAIL] - Referral reducer toggle email output', t => {

  const actual = reducer(initialState, { type: types.TOGGLE_EMAIL })
  const expected = initialState.update('emailActive', value => !value)

  t.ok(Immutable.is(actual, expected),
    'reducer() should return toggle email state')

  t.end()

})
