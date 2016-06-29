import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import rootReducer from '../universal/shared/reducers'
import routes from '../universal/routes'

const app = express()

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, '../public')))

// send all requests to index.html so browserHistory works
app.use((req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
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
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
    <meta charset="utf-8">
    <title>Shandy Club</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" media="(device-height: 568px)" />
    <link rel="stylesheet" href="style.css" media="screen" charset="utf-8">
    <div id="root">${html}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script src="bundle.js"></script>
   `
}

const NODE_IP = '127.0.0.1'
const NODE_PORT = process.env.PORT || 8000

const server = app.listen(NODE_PORT, NODE_IP, () => {

  console.log(`🍺  Production server running at http://${server.address().address}:${server.address().port}`)

})
