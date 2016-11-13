import styled from 'styled-components'
import Atomic from 'style/atomic'

import { colours } from '../style'

export const Button = styled.button`
  color: ${ props => props.color || colours.dark };

  ${ ({ atomic }) => Atomic({ ...Button.default.atomic, ...atomic }) }
`


Button.default = {
  atomic: {
    fs: 4,
  },
}
