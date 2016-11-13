import styled from 'styled-components'
import Atomic from 'style/atomic'

export const Section = styled.section`
  ${ ({ atomic }) => Atomic({ ...atomic }) }
`
