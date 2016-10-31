import styled from 'styled-components'

export const Image = styled.div`
  width: ${ props => props.width };
  height: ${ props => props.height };
  background: url( ${ props => props.src } ) no-repeat center;
  background-size: ${ props => props.backgroundSize || Image.default.backgroundSize };
`

Image.default = {
  backgroundSize: '100% auto',
}
