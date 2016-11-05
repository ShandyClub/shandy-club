import styled from 'styled-components'

import { scale, space, typography } from '../style'

export const Text = styled.p`
  ${ space.m(3) }
  ${ space.fs(3) }
  ${ typography.ff() }
`

export const TitleText = styled.h1`
  ${ scale.getScaledProperty('margin-top', 3) }
  ${ scale.getScaledProperty('margin-bottom', 3) }
  ${ space.fs(6) }
  ${ typography.ff('secondary') }
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
`
