import React, { Component } from 'react'
import styles from 'css/components/map.css'

export default class Map extends Component {

  componentDidMount() {

    const mapboxgl = window.mapboxgl
    const { options, token } = this.props

    // configure Mapbox
    mapboxgl.accessToken = token

    // init MapBox
    const map = new mapboxgl.Map({
      container: 'map',
      ...options,
    })

    // add MapBox controls
    const nav = new mapboxgl.Navigation({ position: 'top-left' })
    map.addControl(nav)
    const geo = new mapboxgl.Geolocate({ position: 'bottom-left' })
    map.addControl(geo)

  }

  render() {

    return (
      <div id='map' className={styles.base}>

      </div>
    )

  }

}
