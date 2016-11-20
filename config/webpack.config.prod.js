const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app/client'),
  dist: path.join(__dirname, '../public'),
  img: path.join(__dirname, '../static/img'),
}

module.exports = {

  devtool: 'source-map',

  entry: [ 'regenerator-runtime/runtime', PATHS.src ],

  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new CleanPlugin([ './public' ], process.cwd()),
    new CopyPlugin([
      { from: 'package.json', to: 'package.json' },
      { from: 'static/img/favicon.png', to: 'favicon.png' },
      { from: PATHS.img }
    ])
  ],

  eslint: {
    configFile: './config/.eslintrc.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel', 'eslint' ]
      }
    ]
  }

}
