import styled from 'styled-components'
import Atomic from '../style/atomic'

import { colours } from '../style'

export const Section = styled.section`
  width: ${ props => props.width || Section.default.width };
  height: ${ props => props.height || Section.default.height };
  background-color: ${ props => props.backgroundColor && colours[props.backgroundColor] || Section.default.backgroundColor };

  ${ ({ atomic }) => Atomic({ ...atomic }) }
`

Section.default = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'transparent',
}
