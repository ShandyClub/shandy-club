import React, { Component } from 'react'
import deepEqual from 'deep-equal'

import { isBrowser } from '../util'
import { colours } from '../style'

// conditionally import Leaflet + plugins -> requires `window`
let L
if (isBrowser) {

  L = require('leaflet')
  require('leaflet.markercluster')

}

export default class Map extends Component {

  constructor() {

    super()

    this.onMapDragStart = this.onMapDragStart.bind(this)
    this.onMapDragEnd = this.onMapDragEnd.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)

    // init marker layer cache
    this.markerLayerCache = []

  }

  componentDidMount() {

    this.initMap()

  }

  componentDidUpdate(prevProps) {

    const { fitToBounds, markers, selectedResultIndex } = this.props
    const { markers: prevMarkers, selectedResultIndex: prevSelectedResultIndex } = prevProps

    // check if `selectedResultIndex` has changed
    if ( selectedResultIndex && selectedResultIndex !== prevSelectedResultIndex ) {

      // center map to selected result
      this.setMapCenter(markers[selectedResultIndex].coordinates, { animate: true })

      // close marker tooltips
      this.markerLayer.eachLayer( l => l.isTooltipOpen() && l.closeTooltip() )

      // open marker's tooltip
      this.markerLayerCache[selectedResultIndex].openTooltip()

    }

    // check if `markers` has changed
    if ( !deepEqual(markers, prevMarkers) ) {

      // clear pubs
      this.clearMarkers()

      // plot pubs
      this.plotMarkers(markers, this.generateMarkerIcon(), fitToBounds)

    }

  }

  initMap() {

    const { center: [ lng, lat ], fitToBounds, geolocation, markers, mapOptions, tileOptions, tileURL, zoomControlOptions } = this.props

    // override default center if available
    if (lat && lng) mapOptions.center = { lat, lng }

    // init Leaflet map
    this.map = L.map('map', mapOptions )

    // add map events
    this.map.on('dragstart', this.onMapDragStart)
    this.map.on('dragend', this.onMapDragEnd)

    // configure Leaflet
    L.tileLayer(tileURL, tileOptions).addTo(this.map)

    // add zoom control
    L.control.zoom(zoomControlOptions).addTo(this.map)

    // clear pubs
    this.clearMarkers()

    // plot geolocation
    this.plotGeolocation(geolocation, this.generateGeolocationIcon())

    // plot pubs
    this.plotMarkers(markers, this.generateMarkerIcon(), fitToBounds)

  }

  fitMapToBounds(bounds) {

    const { map } = this

    map.fitBounds(bounds)

  }

  setMapCenter([ lng, lat ], options={}) {

    const { map } = this

    map.panTo({ lat, lng }, options)

  }

  generateClusterIcon(cluster) {

    return L.divIcon({ html: `<span>${cluster.getChildCount()}</span>`, className: 'marker-cluster', iconSize: [ 30, 30 ] })

  }

  generateGeolocationIcon() {

    return L.divIcon({ className: 'leaflet-geolocation-icon', iconSize: [ 20, 20 ] })

  }

  generateMarkerIcon() {

    return L.divIcon({ className: 'leaflet-pub-icon', iconSize: [ 20, 20 ] })

  }

  plotGeolocation(geolocation, icon) {

    // no geolocation? abort!
    if (!geolocation.length) return

    return L.marker(geolocation, { icon }).addTo(this.map)

  }

  plotMarkers(markers, icon, fitToBounds) {

    // no markers? abort!
    if (!markers.length) return

    // reset marker layers cache
    this.markerLayerCache.length = 0

    // init layers
    this.markerLayer = L.markerClusterGroup({ iconCreateFunction: this.generateClusterIcon, polygonOptions: { color: colours.dark } })

    markers.map( ({ coordinates: [ lng, lat ], name }, index) => {

      // init tooltip
      let tooltip = new L.tooltip({ direction: 'bottom', offset: [ 0, 10 ] })
        .setLatLng([ lat, lng ])
        .setContent(name)

      // init marker
      let marker = new L.marker([ lat, lng ], { icon })
        .bindTooltip(tooltip)

      // marker events
      marker.on('click', () => this.onMarkerClick(index))

      // add marker to layer cache
      this.markerLayerCache.push(marker)

      // add marker to layer
      return this.markerLayer.addLayer(marker)

    } )

    // add marker layer to map
    this.markerLayer.addTo(this.map)

    // should map be fitted to bounds?
    if (fitToBounds) {

      // get layer bounds
      const layerBounds = this.markerLayer.getBounds()

      // center/zoom map to markerLayer bounds if required
      this.fitMapToBounds(layerBounds)

    }

  }

  clearMarkers() {

    this.markerLayer && this.markerLayer.clearLayers()

  }

  onMapDragStart() {

    const { setSelectedResult } = this.props

    // reset selectedResult to default
    setSelectedResult()

  }

  onMapDragEnd() {

    const { setPoint } = this.props
    const { lat, lng } = this.map.getCenter()

    setPoint([ lng, lat ])

  }

  onMarkerClick(index) {

    const { setSelectedResult } = this.props

    setSelectedResult(index)

  }

  render() {

    return (
      <div id='map'></div>
    )

  }

}
