import styled from 'styled-components'
import Atomic from '../style/atomic'

import { colours } from '../style'

export const Button = styled.button`
  color: ${ props => props.color || colours.dark };
  cursor: pointer;
  outline: 0;

  ${ ({ atomic }) => Atomic({ ...Button.default.atomic, ...atomic }) }
`

export const ButtonIcon = styled(Button)`
  border: 1px solid ${colours.dark};
  background: ${colours.white};
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    border: inherit;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -1;
  }
`

Button.default = {
  atomic: {
    fs: 4,
  },
}
