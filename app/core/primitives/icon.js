import React from 'react'
import styled from 'styled-components'
import Sip from 'sip.css'

import { colours } from '../style'

const MaterialIcon = ({ children, className, ...props }) => <i className={`material-icons ${className}`} { ...props }>{ children }</i>

const Icon = styled(MaterialIcon)`
  color: ${ colours.dark };

  ${ ({ sip }) => Sip({ ...Icon.default.sip, ...sip }) }
`

Icon.default = {
  sip: {
    va: 'm',
  },
}

export default Icon
