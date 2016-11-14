import { injectGlobal } from 'styled-components'

import { animation, colours, scale, typography } from '../style'

injectGlobal`
  html, body, #Root, #App {
    height: 100%;
    min-height: 100%;
  }

  body {
    ${ typography.ff() }
    font-size: ${ scale.getScaledValue(4) };
    line-height: 1.625;
    color: ${ colours.dark };
    -webkit-font-smoothing: antialiased;
  }

  .slide-left-enter, .slide-left-appear {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-left-enter.slide-left-enter-active, .slide-left-appear.slide-left-appear-active {
    transform: translateX(0);
    opacity: 1;
    transition: transform 500ms cubic-bezier(1,0,.31,1), opacity 300ms ease-in;
  }

  .slide-left-leave {
    transform: translateX(0);
    opacity: 1;
  }

  .slide-left-leave.slide-left-leave-active {
    transform: translateX(100%);
    opacity: 0;
    transition: all 300ms cubic-bezier(1,0,.31,1);
  }

  .leaflet-cluster-anim .leaflet-marker-icon,
  .leaflet-cluster-anim .leaflet-marker-shadow {
    transition: transform 0.3s ease-out, opacity 0.3s ease-in;
  }

  .leaflet-geolocation-icon {
    border: 3px solid ${ colours.light };
    border-radius: 50%;
    background: ${ colours.accent };

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: block;
      background: ${ colours.accent };
      animation: ${ animation.pulse } 1s ease-in-out infinite;
    }
  }

  .leaflet-pub-icon {
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

    &--selected {
      &:after {
        background: ${ colours.dark };
      }
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
    z-index: 0;
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
