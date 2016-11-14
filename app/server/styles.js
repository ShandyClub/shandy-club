const styles = `
  <style type="text/css">
    @keyframes iVXCSc {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }

    }
    @keyframes kkQPNV {
      from {
        transform: scale(1);
        opacity: 0.5;
      }
      to {
        transform: scale(3);
        opacity: 0;
      }

    }.bWrtJF {
      color: #47444F;
      background: linear-gradient(transparent 4px, #F58C40 4px) no-repeat bottom;
      background-size: 100% 8px;
      -webkit-cursor: pointer;
      cursor: pointer;
      -webkit-transition: 0.2s;
      transition: 0.2s;
     }
    .bWrtJF:hover {
      background-size: 100% 12px;
    }.bcYVJF {
      width: 50px;
      height: 50px;
      background: url( shandy-club.png ) no-repeat center;
      background-size: 100% auto;
      margin: 0 auto;

      display: block;
     }.gBKoKb {
      width: 100px;
      border-bottom: 2px solid #F58C40;
      padding-bottom: 2px;
      text-overflow: ellipsis;
      outline: none;

      display: inline-block; margin-left: 8px; margin-right: 8px;
     }.bpkSAU {
      width: 100%;
      max-width: none;
      height: 100%;
      margin: 0 auto;

      padding: 0px; padding-top: 144px;
     }.gxknPv {
      width: auto;
      height: auto;
      background-color: transparent;
    }

    .hLAxwV {
      font-family: Lato, helvetica, sans-serif;
      color: #47444F;
      letter-spacing: 3px;
      font-size: 32px; margin-top: 16px; margin-bottom: 16px; text-align: center; text-transform: uppercase;
    }

    .lixavm {
      font-family: 'Open Sans', helvetica, sans-serif;
      color: #47444F;
      letter-spacing: normal;
      font-size: 18px; margin-top: 16px; margin-bottom: 16px; text-align: center;
    }

    html, body, #Root, #App {
      height: 100%;
      min-height: 100%;
    }

    body {
      font-family: 'Open Sans', helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.625;
      color: #47444F;
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
      border: 3px solid #FFFBF3;
      border-radius: 50%;
      background: #27A5F9;
    }

    .leaflet-geolocation-icon:after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: block;
      background: #27A5F9;
      animation: kkQPNV 1s ease-in-out infinite;
    }

    .leaflet-pub-icon {
      border-radius: 50%;
      background: #FFFBF3;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .leaflet-pub-icon:after {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #F58C40;
      flex: none;
    }

    .leaflet-tooltip {
      font-family: 'Open Sans', helvetica, sans-serif;
      border: none;
      border-radius: 2px;
      background-color: #FFFBF3;
    }

    .leaflet-tooltip:before {
      border-bottom-color: #FFFBF3;
    }

    .marker-cluster {
      width: 30px;
      height: 30px;
      margin-left: 5px;
      margin-top: 5px;
      border-radius: 50%;
      text-align: center;
      background-color: rgba(71, 68, 79, 0.6);
    }

    .marker-cluster:after {
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

    .marker-cluster span {
      color: #FFFBF3;
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
      color: #FFFBF3;
      background: #47444F;
    }
    ::selection {
      color: #FFFBF3;
      background: #47444F;
    }
  </style>
`

export default styles
