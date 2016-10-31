import styled from 'styled-components'

import { colours, space } from '../style'

export const Button = styled.button`
  color: ${ props => props.color || colours.dark };
  ${ space.fs(3) }
`
