const styles = `
  <style type="text/css">@keyframes iVXCSc {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }

    }@keyframes kkQPNV {
    from {
      transform: scale(1);
      opacity: 0.5;
    }
    to {
      transform: scale(3);
      opacity: 0;
    }

    }.hRiTpT {
    color: #2F2F2C;
    -webkit-cursor: pointer;
    cursor: pointer;
    outline: 0;

    font-size: 16px; font-weight: 700; padding: 8px;

    border: 1px solid #2F2F2C;
    background: #FFFFFF;
    position: relative;
    }
    .hRiTpT:after {
    content: '';
    width: 100%;
    height: 100%;
    border: inherit;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -1;
    }.bcYVJF {
    width: 50px;
    height: 50px;
    background: url( shandy-club.png ) no-repeat center;
    background-size: 100% auto;
    margin: 0 auto;

    display: block;
    }.eQYgxT {
    width: 30px;
    height: 30px;
    background: url( compass.svg ) no-repeat center;
    background-size: 100% auto;
    margin: 0;

    display: inline-block; margin-right: 8px; vertical-align: middle;
    }.kwrSoa {
    width: 158px;
    border-bottom: 2px solid #2F2F2C;
    text-overflow: ellipsis;
    outline: none;

    display: inline-block; margin-left: 8px; margin-right: 8px; padding-top: 8px; padding-bottom: 8px;
    }.ggULXJ {
    width: 100%;
    max-width: none;
    height: 100%;
    margin: 0 auto;

    padding: 0px; padding-top: 96px;
    }.dNVKtY {
    width: auto;
    max-width: auto;
    min-width: auto;
    height: auto;
    margin: auto;
    background-color: transparent;


    }.edxjVd {
    font-family: Lato, helvetica, sans-serif;
    max-height: auto;
    color: #2F2F2C;
    letter-spacing: 3px;

    font-size: 32px; margin-top: 16px; margin-bottom: 16px; text-align: center; text-transform: uppercase;
    }.ciKqbq {
    font-family: 'Karla', helvetica, sans-serif;
    max-height: auto;
    color: #2F2F2C;
    letter-spacing: normal;

    font-size: 16px; margin-top: 16px; margin-bottom: 16px; text-align: center; font-weight: 700;
    }.gAyvQQ {
    font-family: 'Karla', helvetica, sans-serif;
    max-height: auto;
    color: #2F2F2C;
    letter-spacing: normal;

    font-size: 16px; margin-top: 32px; margin-bottom: 32px; text-align: center;
    }.fdvRTF {
    font-family: 'Karla', helvetica, sans-serif;
    max-height: auto;
    color: #2F2F2C;
    letter-spacing: normal;

    font-size: 16px; margin-top: 16px; margin-bottom: 16px; text-align: center;
    }
    html, body, #Root, #App {
      height: 100%;
      min-height: 100%;
    }

    body {
      font-family: 'Karla', helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.625;
      color: #2F2F2C;
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
      border: 3px solid #FEFEF2;
      border-radius: 50%;
      background: #6CCBF1;
    }

    .leaflet-geolocation-icon:after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: block;
      background: #6CCBF1;
      animation: kkQPNV 1s ease-in-out infinite;
    }

    .leaflet-pub-icon {
      border-radius: 50%;
      background: #FEFEF2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .leaflet-pub-icon:after {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #F79E5A;
      flex: none;
    }

    .leaflet-pub-icon--selected:after {
      background: #2F2F2C;
    }

    .leaflet-tooltip {
      font-family: 'Karla', helvetica, sans-serif;
      border: none;
      border-radius: 2px;
      background-color: #FEFEF2;
    }

    .leaflet-tooltip:before {
      border-bottom-color: #FEFEF2;
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
      color: #FEFEF2;
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
      color: #FEFEF2;
      background: #2F2F2C;
    }
    ::selection {
      color: #FEFEF2;
      background: #2F2F2C;
    }
  </style>
`

export default styles
