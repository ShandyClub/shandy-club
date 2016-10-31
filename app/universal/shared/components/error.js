import styled from 'styled-components'

import { colours, space } from '../style'

export const Error = styled.p`
  color: ${ colours.light };
  background: ${ colours.error };
  ${ space.m(3) }
  ${ space.fs(3) }
`
