import test from 'tape'
import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { initialState as state, name, selectors as UISelectors } from '../../app/universal/ui'

const initialState = Immutable.fromJS({ ui: state })

// config
const selectors = createStructuredSelector({
  ui: UISelectors.all,
  error: UISelectors.error,
  requesting: UISelectors.requesting,
  search: UISelectors.search,
  searchFocus: UISelectors.searchFocus,
  searchOverlay: UISelectors.searchOverlay,
})(initialState)

test('UI:Selector[all] - UI selector all output', t => {

  const { ui } = selectors

  const actual = ui
  const expected = state

  t.deepEqual(actual, expected,
    'all() selector should return full UI state')

  t.end()

})

test('UI:Selector[error] - UI selector error output', t => {

  const { error } = selectors

  const actual = error
  const expected = initialState.getIn([ name, 'error' ])

  t.deepEqual(actual, expected,
    'error() selector should return error from UI state')

  t.end()

})

test('UI:Selector[requesting] - UI selector requesting output', t => {

  const { requesting } = selectors

  const actual = requesting
  const expected = initialState.getIn([ name, 'requesting' ])

  t.deepEqual(actual, expected,
    'requesting() selector should return requesting from UI state')

  t.end()

})

test('UI:Selector[search] - UI selector search output', t => {

  const { search } = selectors

  const actual = search
  const expected = initialState.getIn([ name, 'search' ])

  t.deepEqual(actual, expected,
    'search() selector should return search from UI state')

  t.end()

})

test('UI:Selector[searchFocus] - UI selector searchFocus output', t => {

  const { searchFocus } = selectors

  const actual = searchFocus
  const expected = initialState.getIn([ name, 'search', 'focus' ])

  t.deepEqual(actual, expected,
    'searchFocus() selector should return searchFocus from UI state')

  t.end()

})

test('UI:Selector[searchOverlay] - UI selector searchOverlay output', t => {

  const { searchOverlay } = selectors

  const actual = searchOverlay
  const expected = initialState.getIn([ name, 'search', 'overlay' ])

  t.deepEqual(actual, expected,
    'searchOverlay() selector should return searchOverlay from UI state')

  t.end()

})
