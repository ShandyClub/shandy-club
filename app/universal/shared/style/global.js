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

  .leaflet-marker-icon {
    border: none;
    border-radius: 50%;
    background: ${ colours.light };
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: ${ colours.shandy };
      flex: none;
    }
  }

  .leaflet-tooltip {
    ${ typography.ff() }
    border: none;
    border-radius: 2px;
    background-color: ${ colours.light };

    &:before {
      border-bottom-color: ${ colours.light };
    }
  }

  .marker-cluster {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
    border-radius: 50%;
    text-align: center;
    background-color: rgba(71, 68, 79, 0.6);

    &:after {
      content: '';
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(71, 68, 79, 0.3);
    }
  }

  .marker-cluster span {
    color: ${ colours.light };
    line-height: 30px;
    position: relative;
    z-index: 1;
  }

  #map {
    width: 100%;
    height: 100%;
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
