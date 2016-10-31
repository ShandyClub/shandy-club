/**
  * @desc Media queries breakpoint utility
  * @prop half - small screens
  * @prop schooner - above small screens
  * @prop pint - huge screens
*/

import { css } from 'styled-components'

import * as bp from './breakpoints'

const media = (breakpoint, args) => css`
  @media (${ breakpoint }) {
    ${ css(...args) }
  }
`

export const half = (...args) => media(bp.HALF, args)

export const schooner = (...args) => media(bp.SCHOONER, args)

export const pint = (...args) => media(bp.PINT, args)
