import styled from 'styled-components'
import Atomic from '../style/atomic'

import { colours, scale } from '../style'

export const Anchor = styled.a`
  margin: ${ props => props.center ? '0 auto' : '0' };
  color: ${ colours.dark };
  background: linear-gradient(transparent 4px, ${ colours.shandy } 4px) no-repeat bottom;
  background-size: 100% ${ scale.getScaledValue(1) };
  cursor: pointer;
  transition: 0.2s;

  ${ ({ atomic }) => Atomic(atomic) }

  &:hover {
    background-size: 100% ${ scale.getScaledValue(3) };
  }
`
