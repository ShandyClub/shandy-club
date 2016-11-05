/**
  * @name View - top-level wrapper component
  * @param {string} [width=100%] - base width
  * @param {string} [maxWidth=1280px] - maximum width
  *
  * @name Grid
  * @param {string} [cell] - fixed width of grid cells
  * @param {string} [gutter=0.5em] - margin between grid cells
*/

import styled from 'styled-components'

import { media, scale } from 'style'

export const CAlign = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${ props => props.media ? media[props.media]`
    position: static;
    transform: none;
  ` : null }
`

export const VAlign = styled(CAlign)`
  left: initial;
  transform: translateY(-50%);
`

export const HAlign = styled(CAlign)`
  top: initial;
  transform: translateX(-50%);
`

export const View = styled.div`
  width: ${ props => props.width || View.default.width };
  max-width: ${ props => props.maxWidth || View.default.maxWidth };
  height: 100%;
  ${ props => props.paddedTop && scale.getScaledProperty('padding-top', 10) }
  ${ props => props.padded && scale.getScaledProperty('padding-right', 3) }
  ${ props => props.padded && scale.getScaledProperty('padding-left', 3) }
`

// TODO - use `space` utility for defaults - work out ems if necessary
// TODO - variable cell widths => `& > *:nth-child(n) { flex-basis: 10em; }`
// TODO - percentage cell widths => `> *:nth-child(n) { flex-basis: calc(100% - gutter); }` || columns: `calc(100% * 1 / 12)`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${ props => props.gutter || Grid.default.gutter };

  & > * {
    flex: 0 0 100%;
    margin: ${ props => props.gutter || Grid.default.gutter };
    ${ media.schooner`
      flex: ${ props => props.cell ? `1 0 ${props.cell}` : 1 };
    ` }
  }
`

View.default = {
  width: '100%',
  maxWidth: '1280px',
}

Grid.default = {
  gutter: '0.5em',
}
