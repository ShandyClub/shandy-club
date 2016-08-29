import test from 'tape'

import { actions, actionTypes as types } from '../../app/universal/ui'

test('UI:Action:[UPDATE] - update UI state', t => {

  const payload = { requesting: true }

  const actual = actions.updateUI(payload)
  const expected = { type: types.UPDATE, payload }

  t.deepEqual(actual, expected,
    'updateUI() should set the provided UI state')

  t.end()

})

test('UI:Action:[RESET] - reset UI state', t => {

  const actual = actions.resetUI()
  const expected = { type: types.RESET }

  t.deepEqual(actual, expected,
    'resetUI() should reset the UI state')

  t.end()

})
