import MapboxClient from 'mapbox/lib/services/geocoding'
import { MAPBOX_ACCESS_TOKEN } from '../shared/constants'

const client = new MapboxClient(MAPBOX_ACCESS_TOKEN)

export const geocode = (place) => {

  console.log(client, place)

  return true

}
