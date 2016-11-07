import styled from 'styled-components'

import { animation, colours, scale } from 'style'

export const Loader = styled.div`
  ${ scale.getScaledProperty('top', 5) }
  ${ scale.getScaledProperty('right', 5) }
  width: 0;
  height: 0;
  border-width: 0 10px 17.3px 10px;
  border-style: solid;
  border-color: transparent transparent ${ colours.shandy } transparent;
  position: absolute;
  transform-origin: center center;
  animation: ${ animation.rotate360 } 0.5s linear infinite;
`
