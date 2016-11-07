import styled from 'styled-components'

import { colours, scale } from 'style'

export const List = styled.div`
  ${ scale.getScaledProperty('max-height', 13) }
  height: ${ props => props.width || 'auto' };
  overflow-y: scroll;

  & > * {
    border-bottom: 1px dotted ${ colours.dark };
  }
`
