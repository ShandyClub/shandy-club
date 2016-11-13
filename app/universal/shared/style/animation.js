import { keyframes } from 'styled-components'

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const pulse = keyframes`
  from {
    transform: scale(1);
    opacity: 0.5;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
`
