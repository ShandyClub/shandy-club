import React, { Component } from 'react'
import { isBrowser } from '../util'
import styles from 'css/components/map.css'
import { MAP_TOOLTIP_ZOOM_LEVEL } from '../constants'

// conditionally import Leaflet + plugins -> requires `window`
let L
if (isBrowser) {

  L = require('leaflet')
  require('leaflet.markercluster')

}

export default class Map extends Component {

  constructor() {

    super()

    this.onMapDragEnd = this.onMapDragEnd.bind(this)
    this.onMapZoomEnd = this.onMapZoomEnd.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)

  }

  componentDidMount() {

    this.initMap()

  }

  componentDidUpdate() {

    const { markers } = this.props

    // clear pubs
    this.clearMarkers()

    // TODO - really should check if markers != prevProps.markers
    this.plotMarkers(markers, this.generateMarkerIcon())

  }

  initMap() {

    const { markers, mapOptions, tileOptions, tileURL } = this.props

    // init Leaflet map
    this.map = L.map('map', mapOptions)

    // add map events
    this.map.on('dragend', this.onMapDragEnd)
    this.map.on('zoomend', this.onMapZoomEnd)

    // configure Leaflet
    L.tileLayer(tileURL, tileOptions).addTo(this.map)

    // clear pubs
    this.clearMarkers()

    // plot pubs
    this.plotMarkers(markers, this.generateMarkerIcon())

  }

  fitMapToBounds(bounds) {

    const { map } = this

    map.fitBounds(bounds)

  }

  generateClusterIcon(cluster) {

    return L.divIcon({ html: `<span>${cluster.getChildCount()}</span>`, className: styles.cluster, iconSize: [ 30, 30 ] })

  }

  generateMarkerIcon() {

    return L.divIcon({ className: styles.icon, iconSize: [ 40, 40 ] })

  }

  plotMarkers(markers, icon) {

    // no markers? abort!
    if (!markers.length) return

    // init layers
    this.tooltipLayer = L.layerGroup()
    this.markerLayer = L.markerClusterGroup({ iconCreateFunction: this.generateClusterIcon })

    markers.map( ({ coordinates: [ lng, lat ], name }, index) => {

      // init tooltip
      let tooltip = new L.tooltip({ direction: 'bottom', offset: [ 0, 20 ], permanent: true })
        .setLatLng([ lat, lng ])
        .setContent(name)

      // add tooltip to layer
      this.tooltipLayer.addLayer(tooltip)

      // init marker
      let marker = new L.marker([ lat, lng ], { icon })
        .bindPopup(name)

      // marker events
      marker.on('click', () => this.onMarkerClick(index))

      // add marker to layer
      return this.markerLayer.addLayer(marker)

    } )

    // add layer to map
    this.markerLayer.addTo(this.map)

    // get layer bounds
    const layerBounds = this.markerLayer.getBounds()

    // center/zoom map to markerLayer bounds
    this.fitMapToBounds(layerBounds)

  }

  clearMarkers() {

    this.markerLayer && this.markerLayer.clearLayers()
    this.tooltipLayer && this.tooltipLayer.clearLayers()

  }

  toggleTooltips() {

    const zoomLevel = this.map.getZoom()
    const tooltipLayer = this.tooltipLayer
    const isLayerOnMap = this.map.hasLayer(tooltipLayer)
    const isTooltipZoomLevel = zoomLevel >= MAP_TOOLTIP_ZOOM_LEVEL

    if (isTooltipZoomLevel && !isLayerOnMap) return tooltipLayer.addTo(this.map)
    else if (!isTooltipZoomLevel && isLayerOnMap) return tooltipLayer.removeFrom(this.map)

  }

  onMapDragEnd() {

    const { setPoint } = this.props
    const { lat, lng } = this.map.getCenter()

    setPoint([ lng, lat ])

  }

  onMapZoomEnd() {

    this.toggleTooltips()

  }

  onMarkerClick(index) {

    const { setSelectedResult } = this.props

    setSelectedResult(index)

  }

  render() {

    return (
      <div id='map' className={styles.base}></div>
    )

  }

}
