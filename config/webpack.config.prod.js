const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app/client'),
  dist: path.join(__dirname, '../public'),
  img: path.join(__dirname, '../static/img'),
  components: path.join(__dirname, '../app/universal/shared/components'),
  style: path.join(__dirname, '../app/universal/shared/style'),
}

module.exports = {

  devtool: 'source-map',

  entry: [ 'regenerator-runtime/runtime', PATHS.src ],

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      img: PATHS.img,
      components: PATHS.components,
      style: PATHS.style,
    }
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
      { from: 'static/img/favicon.png', to: 'favicon.png' }
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }

}
