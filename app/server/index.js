import express from 'express'
import path from 'path'
import httpProxy from 'http-proxy'
import bodyParser from 'body-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import rootReducer from '../universal/shared/reducers'
import routes from '../universal/routes'
import ApiRoutes from './routes'
import database from './database'

// setup express
const app = express()
const PORT = process.env.PORT || 8000

const isApiRoute = path => path.match(/^\/api/)
const isDevelopment = process.env.NODE_ENV === 'development'

// construct static assets path
const staticPath = isDevelopment ? path.join(__dirname, '../../public') : './'

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

  match({ routes, location: req.url }, (err, redirect, props) => {

    if (err) return res.status(500).send(err.message)

    else if (redirect) return res.redirect(redirect.pathname + redirect.search)

    else if (props) {

      // Create a new Redux store instance
      const store = createStore(rootReducer)

      // Render the component to a string
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>
      )

      // Grab the initial state from our Redux store
      const initialState = store.getState()

      // Send the rendered page back to the client
      res.send(renderPage(html, initialState))

    }

    else return res.status(404).send('Not Found')

  })

})

function renderPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
    <meta charset="utf-8">
    <title>Shandy Club</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" media="(device-height: 568px)" />
    <link rel="stylesheet" href="/style.css" media="screen" charset="utf-8">
    <div id="root">${html}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script src="/bundle.js"></script>
   `
}

const server = app.listen(PORT, () => {

  console.log(`🍺  Production server running on port ${server.address().port}`)

})
