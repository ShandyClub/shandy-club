import './css/app.css'

import React from 'react'
import { render } from 'react-dom'
import { init as initAnalytics } from '../universal/shared/util/track'
import Root from '../universal/shared/containers/Root'

// app setup
initAnalytics()

// app render
render(<Root />, document.getElementById('root'))
