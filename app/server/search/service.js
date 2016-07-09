import MapboxClient from 'mapbox/lib/services/geocoding'
import { GEOCODE_OPTIONS, MAPBOX_ACCESS_TOKEN } from './constants'

const mapbox = new MapboxClient(MAPBOX_ACCESS_TOKEN)

export const geocode = (place) => {

  return new Promise( (resolve, reject) => {

    mapbox.geocodeForward(place, GEOCODE_OPTIONS, (err, { features }) => {

      return err ? reject(err) : resolve(features)

    })

  })

}
