/**
  * @desc Colour palette and utilities
*/

import Color from 'color'

// -----
// PALETTE
// -----

export const white = '#FFFFFF'
export const dark = '#47444F'
export const light = '#FFFBF3'
export const shandy = '#F58C40'
export const accent = '#27A5F9'
export const error = '#AC6F76'

// -----
// UTILS
// -----

export const rgb = colour => colour.rgbString()
export const alpha = (colour, value) => rgb( Color(colour).alpha(value) )
export const lighten = (colour, value) => rgb( Color(colour).lighten(value) )
