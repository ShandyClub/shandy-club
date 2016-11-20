/**
  * @name View - top-level wrapper component
  * @param {string} [width=100%] - base width
  * @param {string} [maxWidth=1280px] - maximum width
  *
  * @name Grid
  * @param {string} [cell] - fixed width of grid cells
  * @param {string} [gutter=scale(1)] - margin between grid cells
*/

import styled from 'styled-components'
import Atomic from '../style/atomic'

import { media, scale } from '../style'

export const View = styled.div`
  width: ${ props => props.width || View.default.width };
  max-width: ${ props => props.maxWidth || View.default.maxWidth };
  height: 100%;
  margin: 0 auto;

  ${ ({ atomic }) => Atomic({ ...View.default.atomic, ...atomic }) }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${ props => scale.getScaledValue(props.gutter) || Grid.default.gutter };

  & > * {
    flex: 0 0 100%;
    margin: ${ props => scale.getScaledValue(props.gutter) || Grid.default.gutter };
    ${ media.schooner`
      flex: ${ props => props.cell ? 'none' : 1 };
      width: ${ props => `calc(${ props.cell || 100 }% - ${ scale.getScaledValue(props.gutter) || Grid.default.gutter } * 2)` };
    ` }
  }
`

export const Cell = styled.div``

View.default = {
  width: '100%',
  maxWidth: '1280px',
  atomic: {
    p: 0,
  }
}

Grid.default = {
  gutter: scale.getScaledValue(1),
}
