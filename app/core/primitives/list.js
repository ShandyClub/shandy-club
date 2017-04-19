import styled from 'styled-components'
import Sip from 'sip.css'

import { colours } from '../style'

const List = styled.div`
  width: 100%;
  max-width: ${ props => props.maxWidth || 'auto' };
  max-height: ${ props => props.maxHeight || 'auto' };
  margin: 0 auto;
  overflow-y: scroll;

  ${ ({ sip }) => Sip({ ...List.default.sip, ...sip }) }

  & > * {
    border-bottom: 1px dotted ${ colours.dark };
    cursor: pointer;
  }
`

List.default = {
  sip: {
    pl: 5,
    pr: 5,
  },
}

export default List
