import React, { Component } from 'react'
import { isBrowser } from '../util'
import styles from 'css/components/map.css'

// conditionally import Leaflet -> requires `window`
let L
if (isBrowser) L = require('leaflet')

export default class Map extends Component {

  componentDidMount() {

    this.initMap()

  }

  componentDidUpdate() {

    const { markers } = this.props

    // TODO - really should check if markers != prevProps.markers
    this.plotMarkers(markers)

  }

  initMap() {

    const { markers, mapOptions, tileOptions, tileURL } = this.props

    // init Leaflet
    this.map = L.map('map', mapOptions)

    // configure Leaflet
    L.tileLayer(tileURL, tileOptions).addTo(this.map)

    // plot pubs
    this.plotMarkers(markers)

  }

  plotMarkers(markers) {

    markers.map( ({ coordinates: [ lng, lat ] }) => L.marker([ lat, lng ]).addTo(this.map) )

  }

  render() {

    return (
      <div id='map' className={styles.base}></div>
    )

  }

}
