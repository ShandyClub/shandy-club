import React from 'react'
import { render } from 'react-dom'

import { init as initAnalytics } from 'util/track'
import Root from 'containers/Root'

import 'style/global'

// app setup
initAnalytics()

// app render
render(<Root />, document.getElementById('Root'))
