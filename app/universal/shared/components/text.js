import styled from 'styled-components'

import { colours, space } from '../style'

export const Text = styled.p`
  color: ${ colours.dark };
  ${ space.m(3) }
  ${ space.fs(3) }
`

export const TitleText = styled.h1`
  color: ${ colours.dark };
  ${ space.fs(6) }
`
