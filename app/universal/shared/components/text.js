import styled from 'styled-components'
import Atomic from '../style/atomic'

import { colours, typography } from '../style'

export const Text = styled.p`
  ${ props => typography.ff(props.fontStack || 'primary') }
  max-height: ${ props => props.maxHeight || Text.default.maxHeight };
  color: ${ props => props.color && colours[props.color] || Text.default.color };
  letter-spacing: ${ props => props.letterSpacing || Text.default.letterSpacing };

  ${ ({ atomic }) => Atomic({ ...Text.default.atomic, ...atomic }) }
`

Text.default = {
  color: colours.dark,
  letterSpacing: 'normal',
  maxHeight: 'auto',
  atomic: {
    fs: 4,
    mt: 4,
    mb: 4,
    ta: 'l',
  },
}
