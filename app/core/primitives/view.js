import styled from 'styled-components'
import Sip from 'sip.css'

const View = styled.div`
  width: ${ props => props.width || View.default.width };
  max-width: ${ props => props.maxWidth || View.default.maxWidth };
  height: 100%;
  margin: 0 auto;

  ${ ({ sip }) => Sip({ ...View.default.sip, ...sip }) }
`

View.default = {
  width: '100%',
  maxWidth: '1280px',
  sip: {
    p: 0,
  },
}

export default View
