var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var dir_build = path.resolve(__dirname, '../public');
var dir_js = path.resolve(__dirname, '../source/js');
var dir_css = path.resolve(__dirname, '../source/css');

module.exports = {
  devtool: 'source-map',
  entry: ['./source/js/app'],
  output: {
    path: dir_build,
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
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: dir_js,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: dir_css,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1!postcss-loader')
      }
    ]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-cssnext')
  ]
};
