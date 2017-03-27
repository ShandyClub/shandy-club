/**
  * @desc Colour palette and utilities
*/

import Color from 'color'

// -----
// PALETTE
// -----

export const white = '#FFFFFF'
export const dark = '#2F2F2C'
export const light = '#FEFEF2'
export const grey = '#D4D7D1'
export const shandy = '#F79E5A'
export const accent = '#6CCBF1'
export const error = '#EA663A'

// -----
// UTILS
// -----

export const rgb = colour => colour.rgbString()
export const alpha = (colour, value) => rgb( Color(colour).alpha(value) )
export const lighten = (colour, value) => rgb( Color(colour).lighten(value) )
