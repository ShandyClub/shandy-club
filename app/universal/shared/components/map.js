import React, { Component } from 'react'
import { isBrowser } from '../util'
import styles from 'css/components/map.css'

// conditionally import Leaflet -> requires `window`
let L
if (isBrowser) L = require('leaflet')

export default class Map extends Component {

  componentDidMount() {

    this.initIcon()
    this.initMap()

  }

  componentDidUpdate() {

    const { markers } = this.props

    // clear pubs
    this.clearMarkers()

    // TODO - really should check if markers != prevProps.markers
    this.plotMarkers(markers, this.markerIcon)

  }

  initIcon() {

    this.markerIcon = L.divIcon({ className: styles.icon, iconSize: [ 40, 40 ] })

  }

  initMap() {

    const { markers, mapOptions, tileOptions, tileURL } = this.props

    // init Leaflet
    this.map = L.map('map', mapOptions)

    // configure Leaflet
    L.tileLayer(tileURL, tileOptions).addTo(this.map)

    // clear pubs
    this.clearMarkers()

    // plot pubs
    this.plotMarkers(markers, this.markerIcon)

  }

  plotMarkers(markers, icon) {

    this.markersLayer = L.layerGroup()

    markers.map( ({ coordinates: [ lng, lat ] }) => this.markersLayer.addLayer( L.marker([ lat, lng ], { icon }) ) )

    this.markersLayer.addTo(this.map)

  }

  clearMarkers() {

    this.markersLayer && this.markersLayer.clearLayers()

  }

  render() {

    return (
      <div id='map' className={styles.base}></div>
    )

  }

}
