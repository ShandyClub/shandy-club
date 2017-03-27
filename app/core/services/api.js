/**
  * @desc API service - provides an interface to common API methods
*/

import 'whatwg-fetch'

export const get = route => fetch(route)

export const post = (route, data) => fetch(route, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})

export const put = (route, data) => fetch(route, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
