import styled from 'styled-components'

import { colours, scale } from 'style'

export const Input = styled.input`
  width: ${ props => props.width || 'auto' };
  ${ scale.getScaledProperty('margin-left', 0) }
  ${ scale.getScaledProperty('margin-right', 0) }
  border-bottom: 2px solid ${ colours.shandy }
  padding-bottom: 2px;
  text-overflow: ellipsis;
  outline: none;
`
