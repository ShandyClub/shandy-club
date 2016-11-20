import React from 'react'
import { render } from 'react-dom'

import { isDevelopment } from '../universal/shared/util'
import { init as initAnalytics } from '../universal/shared/util/track'
import Root from '../universal/shared/containers/Root'

import '../universal/shared/style/global'

// app setup
if (!isDevelopment) initAnalytics()

// app render
render(<Root />, document.getElementById('Root'))
