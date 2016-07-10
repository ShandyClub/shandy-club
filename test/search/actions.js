import test from 'tape'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import promise from '../../src/app/js/middleware/promise-middleware'

import * as actions from '../../src/app/js/actionCreator/referralActionCreator'
import * as types from '../../src/app/js/actionTypes/referral'
import { REFERRAL_URL, ANALYTICS_CATEGORY } from '../../src/app/js/constants/referral'

const mockStore = configureMockStore([ promise ])
const localhost = 'http://local.unlease.io:9000'

test('Referral:Action:[TOGGLE_EMAIL] - toggle email active state', t => {

  const actual = actions.toggleEmail()
  const expected = { type: types.TOGGLE_EMAIL }

  t.deepEqual(actual, expected,
    'toggleEmail() should set emailActive to !emailActive')

  t.end()

})

test('Referral:Action:[GENERATE_CODE_SUCCESS] - generate code success async action output', t => {

  t.plan(1)

  const token = null
  const referralCode = 'TEST1234'
  const referralName = 'Test'
  const referralLink = `${REFERRAL_URL}${referralCode}`

  nock(localhost)
      .post('/resource/user/generateReferralCode')
      .reply(200, { referralCode, firstName: referralName })

  const store = mockStore({})
  const expectedActions = [
    { type: types.GENERATE_CODE_REQUEST, payload: { isLoading: true, error: null } },
    { type: types.GENERATE_CODE_SUCCESS, result: { payload: { referralCode, referralName, referralLink, isLoading: false, error: null } } }
  ]

  return store.dispatch(actions.fetchReferralCode(token))
    .then( () => {
      t.deepEqual(store.getActions(), expectedActions)
    })

})

test('Referral:Action:[GENERATE_CODE_FAILURE] - generate code failure async action output', t => {

  t.plan(1)

  const token = null

  nock(localhost)
      .post('/resource/user/generateReferralCode')
      .reply(400)

  const store = mockStore({})
  const expectedActions = [
    { type: types.GENERATE_CODE_REQUEST, payload: { isLoading: true, error: null } },
    { type: types.GENERATE_CODE_FAILURE, error: { payload: { error: new Error(), isLoading: false } } }
  ]

  return store.dispatch(actions.fetchReferralCode(token))
    .then( () => {
      t.deepEqual(store.getActions(), expectedActions)
    })

})
