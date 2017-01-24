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

const MAP_OFFSET_X = 100
const MAP_OFFSET_Y = 0

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

    const { map } = this

    // check if `selectedResultIndex` has changed
    if ( selectedResultIndex !== null && selectedResultIndex !== prevSelectedResultIndex ) {

      // offset map center to account for side panel
      const offset = [ MAP_OFFSET_X, MAP_OFFSET_Y ]

      // center map to selected result
      this.setMapCenter(markers[selectedResultIndex].coordinates, { animate: true }, offset)

      // get previous selected marker
      const prevSelectedMarker = this.markerLayerCache[prevSelectedResultIndex]

      // reset previous selected marker icon
      if (prevSelectedMarker) prevSelectedMarker.setIcon(this.generateMarkerIcon())

      // get selected marker
      const selectedMarker = this.markerLayerCache[selectedResultIndex]

      // set selected marker icon
      if (selectedMarker) selectedMarker.setIcon(this.generateSelectedMarkerIcon())

    }

    // check if `selectedResultIndex` has changed to `null`
    if ( selectedResultIndex === null && selectedResultIndex !== prevSelectedResultIndex ) {

      const { isDragging } = map

      const center = map.getCenter()

      // as long as user is not dragging the map, reset map center to remove side panel offset
      if (!isDragging) this.setMapCenter([ center.lng, center.lat ], { animate: true }, [ -MAP_OFFSET_X, MAP_OFFSET_Y ])

      // get previous selected marker
      const prevSelectedMarker = this.markerLayerCache[prevSelectedResultIndex]

      // reset previous selected marker icon
      if (prevSelectedMarker) prevSelectedMarker.setIcon(this.generateMarkerIcon())

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

    const { center: [ lng, lat ], fitToBounds, geolocation, markers, mapOptions, tileOptions, tileURL } = this.props

    // override default center if available
    if (lat && lng) mapOptions.center = { lat, lng }

    // init Leaflet map
    this.map = L.map('map', mapOptions )

    // add map events
    this.map.on('dragstart', this.onMapDragStart)
    this.map.on('dragend', this.onMapDragEnd)

    // configure Leaflet
    L.tileLayer(tileURL, tileOptions).addTo(this.map)

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

  setMapCenter([ lng, lat ], options={}, offset=null) {

    const { map } = this

    let center = { lat, lng }

    if (offset) center = map.unproject( map.project(center).add(offset) )

    map.panTo(center, options)

  }

  setMapIsDragging(isDragging) {

    return this.map.isDragging = isDragging

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

  generateSelectedMarkerIcon() {

    return L.divIcon({ className: 'leaflet-pub-icon leaflet-pub-icon--selected', iconSize: [ 20, 20 ] })

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

    markers.map( ({ id, coordinates: [ lng, lat ], name }, index) => {

      // init tooltip
      let tooltip = new L.tooltip({ direction: 'bottom', offset: [ 0, 10 ], permanent: true })
        .setLatLng([ lat, lng ])
        .setContent(name)

      // init marker
      let marker = new L.marker([ lat, lng ], { icon })
        .bindTooltip(tooltip)

      // marker events
      marker.on('click', () => this.onMarkerClick(index, id))

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

    // drag ahoy!
    this.setMapIsDragging(true)

    // reset selectedResult to default
    setSelectedResult()

  }

  onMapDragEnd() {

    const { setPoint } = this.props
    const { lat, lng } = this.map.getCenter()

    // drag over!
    this.setMapIsDragging(false)

    setPoint([ lng, lat ])

  }

  onMarkerClick(selectedResultIndex, pubId) {

    const { setSelectedResult } = this.props

    setSelectedResult(selectedResultIndex, pubId)

  }

  render() {

    return (
      <div id='map'></div>
    )

  }

}
