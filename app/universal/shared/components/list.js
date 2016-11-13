import styled from 'styled-components'
import Atomic from 'style/atomic'

import { colours } from 'style'

export const List = styled.div`
  width: 100%;
  max-width: ${ props => props.maxWidth || 'auto' };
  max-height: ${ props => props.maxHeight || 'auto' };
  margin: 0 auto;
  overflow-y: scroll;

  ${ ({ atomic }) => Atomic({ ...List.default.atomic, ...atomic }) }

  & > * {
    border-bottom: 1px dotted ${ colours.dark };
    cursor: pointer;
  }
`

List.default = {
  atomic: {
    pl: 5,
    pr: 5,
  },
}
