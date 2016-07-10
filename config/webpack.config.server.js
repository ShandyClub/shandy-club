const fs = require('fs')
const path = require('path')

const PATHS = {
  server: path.resolve(__dirname, '../app/server'),
  dist: path.resolve(__dirname, '../public'),
  modules: path.resolve(__dirname, '../node_modules')
}

module.exports = {

  entry: ['babel-polyfill', PATHS.server],

  output: {
    path: PATHS.dist,
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(PATHS.modules).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }

}
