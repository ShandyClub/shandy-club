import styled from 'styled-components'
import Sip from 'sip.css'

import { colours } from '../style'

const Button = styled.button`
  color: ${ props => props.color || colours.dark };
  cursor: pointer;
  outline: 0;

  ${ ({ sip }) => Sip({ ...Button.default.sip, ...sip }) }
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
  sip: {
    fs: 4,
  },
}

export default Button
