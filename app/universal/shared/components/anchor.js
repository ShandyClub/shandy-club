import styled from 'styled-components'
import { Link } from 'react-router'

import { colours, scale } from 'style'

export const Anchor = styled(Link)`
  color: ${colours.dark};
  background: linear-gradient(transparent 4px, ${ colours.shandy } 4px) no-repeat bottom;
  background-size: 100% ${ scale.getScaledValue(0) };
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-size: 100% ${ scale.getScaledValue(2) };
  }
`
