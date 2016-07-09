// set undefined env vars
if(!process.env.MAPBOX_API) require('../../../config/env')

export const name = 'search'

export const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_API

export const GEOCODE_OPTIONS = {
  types: 'region,postcode,place,locality,neighborhood,address',
  country: 'gb',
  // weight results closer to London
  proximity: { latitude: 51.528308, longitude: -0.3817765 },
  // set bounding box to Greater London
  bbox: [ -0.489, 51.28, 0.236, 51.686 ]
}
