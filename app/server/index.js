import 'regenerator-runtime/runtime'
import express from 'express'
import path from 'path'
import httpProxy from 'http-proxy'
import bodyParser from 'body-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import configureStore from '../universal/shared/store/configureStore'
import rootSaga from '../universal/shared/sagas'
import routes from '../universal/routes'
import ApiRoutes from './routes'
import './database'

// setup express
const app = express()
const PORT = process.env.PORT || 8000

const isApiRoute = path => path.match(/^\/api/)
const isDevelopment = process.env.NODE_ENV === 'development'

// construct static assets path
const staticPath = isDevelopment ? path.join(__dirname, '../../public') : './'

// layout method
// TODO - abstract this template
const renderPage = (html, initialState) => `
  <!DOCTYPE html>
  <html>
  <meta charset="utf-8">
  <title>Shandy Club</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" media="(device-height: 568px)" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
  <link rel="stylesheet" href="/style.css" media="screen" charset="utf-8">
  <link rel="shortcut icon" href="/favicon.png">
  <div id="root">${html}</div>
  <script>window.__INITIAL_STATE__ = ${initialState}</script>
  <script src="/bundle.js"></script>
 `

// serve static assets
app.use(express.static(staticPath))

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// API routes
app.use('/api', ApiRoutes)

// development env
if (isDevelopment) {

  // proxy non-API requests to webpack-dev-server
  const proxy = httpProxy.createProxyServer()

  app.all('/*', function (req, res, next) {

    if (isApiRoute(req.path)) return next()

    proxy.web(req, res, {
      target: 'http://localhost:3000'
    })

  })

}

// send all non-API requests to index.html so browserHistory works
app.use((req, res, next) => {

  if (isApiRoute(req.path)) return next()

  // create Redux store
  const store = configureStore()

  match({ routes, location: req.url }, (err, redirect, props) => {

    if (err) return res.status(500).send(err.message)

    else if (redirect) return res.redirect(redirect.pathname + redirect.search)

    else if (props) {

      // start sagas
      store.runSaga(rootSaga).done.then( () => {

        // Render the component to a string
        const html = renderToString(
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        )

        // Grab the initial state from our Redux store
        const initialState = JSON.stringify(store.getState())

        // Send the rendered page back to the client
        res.send(renderPage(html, initialState))

      }).catch( e => res.status(500).send(e.message) )

      // terminate sagas
      store.close()

    }

    else return res.status(404).send('Not Found')

  })

})

/* eslint-disable no-unused-vars */
// error handling
app.use( (err, req, res, next) => {

  console.error(err.stack)

  res.status(500).send(err.message)

})
/* eslint-enable no-unused-vars */

const server = app.listen(PORT, () => {

  console.log(`🍺  Production server running on port ${server.address().port}`)

})
