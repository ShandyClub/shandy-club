/**
  * @desc Atomic styled-components
*/

import { SCALE, UNIT } from './scale'

// -----
// PROPERTY SHORTHAND
// -----

const properties = {
  b: 'bottom',
  bw: 'border-width',
  c: 'cursor',
  d: 'display',
  fd: 'flex-direction',
  fs: 'font-size',
  fw: 'font-weight',
  h: 'height',
  l: 'left',
  lh: 'line-height',
  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',
  o: 'overflow',
  p: 'padding',
  pt: 'padding-top',
  pr: 'padding-right',
  pb: 'padding-bottom',
  pl: 'padding-left',
  po: 'position',
  r: 'right',
  t: 'top',
  ta: 'text-align',
  td: 'text-decoration',
  to: 'text-overflow',
  tt: 'text-transform',
  va: 'vertical-align',
  w: 'width',
  ws: 'white-space',
  z: 'z-index',
}

// -----
// STATIC VALUES
// -----

const values = {
  c: {
    a: 'auto',
    d: 'default',
    p: 'pointer',
  },
  d: {
    b: 'block',
    i: 'inline',
    ib: 'inline-block',
    n: 'none',
    f: 'flex',
    t: 'table',
    tc: 'table-cell',
    tr: 'table-row',
  },
  fd: {
    c: 'column',
    r: 'row',
  },
  fw: {
    n: 400,
    b: 700,
  },
  o: {
    a: 'auto',
    h: 'hidden',
    s: 'scroll',
    v: 'visible',
  },
  po: {
    s: 'static',
    r: 'relative',
    a: 'absolute',
    f: 'fixed',
  },
  ta: {
    c: 'center',
    l: 'left',
    r: 'right',
    j: 'justify',
  },
  td: {
    u: 'underline',
    o: 'overline',
    n: 'none',
  },
  to: {
    c: 'clip',
    e: 'ellipsis',
  },
  tt: {
    u: 'uppercase',
  },
  va : {
    l: 'baseline',
    tt: 'text-top',
    tb: 'text-bottom',
    m: 'middle',
    t: 'top',
    b: 'bottom',
  },
  ws: {
    n: 'nowrap',
    p: 'pre',
    pw: 'pre-wrap',
    pl: 'pre-line',
  },
}

// -----
// PROPERTY RESOLVERS
// -----

const getters = {
  b: value => getScaledProperty('b', value),
  bw: value => getComputedProperty('bw', value),
  c: value => getStaticProperty('c', value),
  d: value => getStaticProperty('d', value),
  fd: value => getStaticProperty('fd', value),
  fs: value => getScaledProperty('fs', value),
  fw: value => getStaticProperty('fw', value),
  h: value => getScaledProperty('h', value),
  l: value => getScaledProperty('l', value),
  lh: value => getScaledProperty('lh', value),
  m: value => getScaledProperty('m', value),
  mt: value => getScaledProperty('mt', value),
  mr: value => getScaledProperty('mr', value),
  mb: value => getScaledProperty('mb', value),
  ml: value => getScaledProperty('ml', value),
  o: value => getStaticProperty('o', value),
  p: value => getScaledProperty('p', value),
  pt: value => getScaledProperty('pt', value),
  pr: value => getScaledProperty('pr', value),
  pb: value => getScaledProperty('pb', value),
  pl: value => getScaledProperty('pl', value),
  po: value => getStaticProperty('po', value),
  r: value => getScaledProperty('r', value),
  t: value => getScaledProperty('t', value),
  ta: value => getStaticProperty('ta', value),
  td: value => getStaticProperty('td', value),
  to: value => getStaticProperty('to', value),
  tt: value => getStaticProperty('tt', value),
  va: value => getStaticProperty('va', value),
  w: value => getScaledProperty('w', value),
  ws: value => getStaticProperty('ws', value),
  z: value => getActualProperty('z', value),
}

// -----
// RESOLVE METHODS
// -----

const createScaledPropertyGetter = (property, value, unit, scale=SCALE) => typeof value === 'number' && typeof scale[value] === 'number' && typeof properties[property] === 'string' ? { [`${ properties[property] }`]: `${ scale[value] }${ unit }` } : null

const createComputedPropertyGetter = (property, value, unit) => typeof value === 'number' && typeof properties[property] === 'string' ? { [`${ properties[property] }`]: `${ value }${ unit }` } : null

const createStaticPropertyGetter = (property, value) => typeof properties[property] === 'string' && typeof values[property] === 'object' && typeof values[property][value] !== 'undefined' ? { [`${ properties[property] }`]: `${ values[property][value] }` } : null

const createActualPropertyGetter = (property, value) => typeof properties[property] === 'string' ? { [`${ properties[property] }`]: value } : null

// -----
// RESOLVE METHOD CREATORS
// -----

const getScaledProperty = (property, value, unit=UNIT) => createScaledPropertyGetter(property, value, unit)

const getComputedProperty = (property, value, unit=UNIT) => createComputedPropertyGetter(property, value, unit)

const getStaticProperty = (property, value) => createStaticPropertyGetter(property, value)

const getActualProperty = (property, value) => createActualPropertyGetter(property, value)

// -----
// ATOMIC STYLE HANDLER
// -----

const Atomic = atomic => {

  if (typeof atomic !== 'object') return

  let atoms = {}

  for (var atom in atomic) {

    if (atomic.hasOwnProperty(atom)) {

      atoms = Object.assign({}, { ...atoms, ...( getters[atom] && getters[atom](atomic[atom]) ) })

    }

  }

  return atoms

}

export default Atomic
