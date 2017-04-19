import styled from 'styled-components'
import Sip from 'sip.css'

import { colours } from '../style'

const Input = styled.input`
  width: ${ props => props.width || 'auto' };
  border-bottom: 2px solid ${ colours.dark };
  border-radius: 0;
  text-overflow: ellipsis;
  outline: none;

  ${ ({ sip }) => Sip({ ...Input.default.sip, ...sip }) }
`

Input.default = {
  sip: {
    d: 'ib',
  },
}

export default Input
