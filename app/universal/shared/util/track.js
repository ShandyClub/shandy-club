/**
  * @desc Tracking utility - provides an interface to Mixpanel API
*/

import { MIXPANEL as TOKEN } from '../constants'
import { isBrowser, isDevelopment } from './'

// conditionally import Mixpanel -> requires `document`
let mixpanel
if (isBrowser) mixpanel = require('mixpanel-browser')

export const init = () => mixpanel.init(TOKEN, { debug: isDevelopment })

export const track = (action, payload) => {

  // not a browser? don't bother then
  if (!isBrowser) return

  // fire tracking event
  return mixpanel.track(action, { ...payload })

}
