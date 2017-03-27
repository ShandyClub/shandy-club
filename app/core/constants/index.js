export const STATE_KEY = '@ShandyClub:state'

// Mixpanel API token
export const MIXPANEL = '99dabd72beffc3ac088fb66d84ffba5e'

// Leaflet
export const MAP_OPTIONS = {
  center: [ 51.507463, -0.127694 ],
  maxBounds: [[ 51.28, -0.489 ], [ 51.686, 0.236 ]],
  zoom: 11,
  zoomControl: false,
}

export const MAP_TILE_URL = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}'

export const MAP_TILE_OPTIONS = {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'shandyclub.1hme714m',
  accessToken: 'pk.eyJ1Ijoic2hhbmR5Y2x1YiIsImEiOiJjaXRyNW1pcjQwMDA5MnlyeXcxNDIwem9xIn0.7eka1aSf6KStTHqTZ8h7Fg',
}
