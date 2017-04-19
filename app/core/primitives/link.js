import styled from 'styled-components'
import Sip from 'sip.css'
import Link from 'next/link'

import { colours } from '../style'

const StyledLink = styled(Link)`
  margin: ${ props => props.center ? '0 auto' : '0' };
  color: ${ colours.dark };
  background: linear-gradient(transparent 4px, ${ colours.shandy } 4px) no-repeat bottom;
  background-size: 100% 8px };
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;

  ${ ({ sip }) => Sip({ ...StyledLink.default.sip, ...sip }) }

  &:hover {
    background-size: 100% 12px;
  }
`

StyledLink.default = {
  sip: {

  },
}

export default StyledLink
