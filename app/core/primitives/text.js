import styled from 'styled-components'
import Sip from 'sip.css'

import { colours, typography } from '../style'

const Text = styled.p`
  ${ props => typography.ff(props.fontStack || 'primary') }
  max-height: ${ props => props.maxHeight || Text.default.maxHeight };
  color: ${ props => props.color && colours[props.color] || Text.default.color };
  letter-spacing: ${ props => props.letterSpacing || Text.default.letterSpacing };

  ${ ({ sip }) => Sip({ ...Text.default.sip, ...sip }) }
`

Text.default = {
  color: colours.dark,
  letterSpacing: 'normal',
  maxHeight: 'auto',
  sip: {
    fs: 4,
    mt: 4,
    mb: 4,
    ta: 'l',
  },
}

export default Text
