import styled from 'styled-components'
import Sip from 'sip.css'

import { colours } from '../style'

const Error = styled.div`
  color: ${ colours.error };
  font-style: italic;
  border: 2px dotted ${ colours.error };
  border-radius: 4px;

  ${ ({ sip }) => Sip({ ...Error.default.sip, ...sip }) }

  &:before {
    content: '😫';
    margin-right: 10px;
    font-style: normal;
  }
`


Error.default = {
  sip: {
    fs: 4,
    m: 4,
    p: 4,
  },
}

export default Error
