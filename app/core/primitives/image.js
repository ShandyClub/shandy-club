import styled from 'styled-components'
import Sip from 'sip.css'

const Image = styled.div`
  width: ${ props => props.width };
  height: ${ props => props.height };
  background: url( ${ props => props.src } ) no-repeat center;
  background-size: ${ props => props.backgroundSize || Image.default.backgroundSize };
  margin: ${ props => props.center ? '0 auto' : '0' };

  ${ ({ sip }) => Sip({ ...Image.default.sip, ...sip }) }
`

Image.default = {
  backgroundSize: '100% auto',
  sip: {
    d: 'b',
  },
}

export default Image
