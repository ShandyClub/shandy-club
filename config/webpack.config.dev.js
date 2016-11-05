const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app/client'),
  dist: path.join(__dirname, '../public'),
  universal: path.join(__dirname, '../app/universal'),
  img: path.join(__dirname, '../static/img'),
  components: 'shared/components',
  style: 'shared/style',
}

module.exports = {

  devtool: 'eval',

  entry: [ 'babel-polyfill', PATHS.src ],

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    root: PATHS.universal,
    alias: {
      components: PATHS.components,
      style: PATHS.style,
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new CleanPlugin([ 'index.html', 'bundle.js', 'bundle.js.map' ], PATHS.dist),
    new CopyPlugin([
      { from: './app/client/index.html', to: 'index.html' },
      { from: PATHS.img }
    ]),
    new HtmlWebpackPlugin({
      template: 'app/client/index.html',
      favicon: 'static/img/favicon.png'
    })
  ],

  devServer: {
    contentBase: PATHS.dist,
    port: 3000,
    inline: true,
    stats: 'errors-only',
    historyApiFallback: true
  },

  eslint: {
    configFile: './config/.eslintrc.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel?cacheDirectory', 'eslint' ]
      }
    ]
  }

}
