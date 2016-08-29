import test from 'tape'
import Immutable from 'immutable'

import { actionTypes as types, initialState, reducer } from '../../app/universal/ui'

test('UI:Reducer[DEFAULT] - UI reducer default output', t => {

  const actual = reducer(undefined, {})
  const expected = initialState

  t.deepEqual(actual, expected,
    'reducer() should return initial state')

  t.end()

})

test('UI:Reducer[UPDATE] - UI reducer update output', t => {

  const payload = { requesting: true }

  const actual = reducer(initialState, { type: types.UPDATE, payload })
  const expected = initialState.merge({ ...payload })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return update UI state')

  t.end()

})

test('UI:Reducer[RESET] - UI reducer reset output', t => {

  const actual = reducer(initialState, { type: types.RESET })
  const expected = initialState.merge({ ...initialState.toJS() })

  t.ok(Immutable.is(actual, expected),
    'reducer() should return reset UI state')

  t.end()

})
