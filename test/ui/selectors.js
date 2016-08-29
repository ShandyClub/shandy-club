import test from 'tape'
import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { initialState as state, name, selectors as UISelectors } from '../../app/universal/ui'

const initialState = Immutable.fromJS({ ui: state })

// config
const selectors = createStructuredSelector({
  ui: UISelectors.getAll,
  error: UISelectors.getError,
  requesting: UISelectors.getRequesting,
  search: UISelectors.getSearch,
  searchFocus: UISelectors.getSearchFocus,
  searchOverlay: UISelectors.getSearchOverlay,
})(initialState)

test('UI:Selector[getAll] - UI selector getAll output', t => {

  const { ui } = selectors

  const actual = ui
  const expected = state

  t.deepEqual(actual, expected,
    'getAll() selector should return full UI state')

  t.end()

})

test('UI:Selector[getError] - UI selector getError output', t => {

  const { error } = selectors

  const actual = error
  const expected = initialState.getIn([ name, 'error' ])

  t.deepEqual(actual, expected,
    'getError() selector should return error from UI state')

  t.end()

})

test('UI:Selector[getRequesting] - UI selector getRequesting output', t => {

  const { requesting } = selectors

  const actual = requesting
  const expected = initialState.getIn([ name, 'requesting' ])

  t.deepEqual(actual, expected,
    'getRequesting() selector should return requesting from UI state')

  t.end()

})

test('UI:Selector[getSearch] - UI selector getSearch output', t => {

  const { search } = selectors

  const actual = search
  const expected = initialState.getIn([ name, 'search' ])

  t.deepEqual(actual, expected,
    'getSearch() selector should return search from UI state')

  t.end()

})

test('UI:Selector[getSearchFocus] - UI selector getSearchFocus output', t => {

  const { searchFocus } = selectors

  const actual = searchFocus
  const expected = initialState.getIn([ name, 'search', 'focus' ])

  t.deepEqual(actual, expected,
    'getSearchFocus() selector should return searchFocus from UI state')

  t.end()

})

test('UI:Selector[getSearchOverlay] - UI selector getSearchOverlay output', t => {

  const { searchOverlay } = selectors

  const actual = searchOverlay
  const expected = initialState.getIn([ name, 'search', 'overlay' ])

  t.deepEqual(actual, expected,
    'getSearchOverlay() selector should return searchOverlay from UI state')

  t.end()

})
