import styled from 'styled-components'
import Atomic from 'style/atomic'

export const Image = styled.div`
  width: ${ props => props.width };
  height: ${ props => props.height };
  background: url( ${ props => props.src } ) no-repeat center;
  background-size: ${ props => props.backgroundSize || Image.default.backgroundSize };
  margin: ${ props => props.center ? '0 auto' : '0' };

  ${ ({ atomic }) => Atomic({ ...Image.default.atomic, ...atomic }) }
`

Image.default = {
  backgroundSize: '100% auto',
  atomic: {
    d: 'b',
  },
}
