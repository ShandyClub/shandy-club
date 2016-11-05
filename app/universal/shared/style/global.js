import { injectGlobal } from 'styled-components'

import { colours, space, typography } from '../style'

injectGlobal`
  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  body {
    ${ typography.ff() }
    ${ space.fs(3) }
    line-height: 1.625;
    color: ${ colours.dark };
    -webkit-font-smoothing: antialiased;
  }

  .leaflet-cluster-anim .leaflet-marker-icon,
  .leaflet-cluster-anim .leaflet-marker-shadow {
    transition: transform 0.3s ease-out, opacity 0.3s ease-in;
  }

  .leaflet-cluster-spider-leg {
    color: red;
  }

  ::-moz-selection {
    color: ${ colours.light };
    background: ${ colours.dark };
  }
  ::selection {
    color: ${ colours.light };
    background: ${ colours.dark };
  }
`
