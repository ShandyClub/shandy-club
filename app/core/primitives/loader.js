import styled from 'styled-components'
import Sip from 'sip.css'

import { animation, colours } from '../style'

const Loader = styled.div`
  width: 0;
  height: 0;
  border-width: 0 10px 17.3px 10px;
  border-style: solid;
  border-color: transparent transparent ${ colours.shandy } transparent;
  position: absolute;
  transform-origin: center center;
  animation: ${ animation.rotate360 } 0.5s linear infinite;

  ${ ({ sip }) => Sip({ ...Loader.default.sip, ...sip }) }
`

Loader.default = {
  backgroundSize: '100% auto',
  sip: {
    r: 6,
    t: 6,
  },
}

export default Loader
