const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app/client'),
  dist: path.join(__dirname, '../public'),
  css: path.join(__dirname, '../app/client/css'),
  img: path.join(__dirname, '../static/img')
}

module.exports = {
  devtool: 'source-map',
  entry: ['regenerator-runtime/runtime', PATHS.src],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      css: PATHS.css,
      img: PATHS.img
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
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new CopyPlugin([
      { from: 'package.json', to: 'package.json' }
    ]),
    new HtmlWebpackPlugin({
      template: 'app/client/index.html',
      favicon: 'static/img/favicon.png'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1!postcss-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: [
    require('postcss-cssnext')
  ]
}
