var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

var dir_build = path.resolve(__dirname, '../public');
var dir_js = path.resolve(__dirname, '../source/js');
var dir_css = path.resolve(__dirname, '../source/css');

module.exports = {
  devtool: 'eval',
  entry: ['./source/js/app'],
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  plugins: [
    new CleanPlugin(['bundle.js', 'bundle.js.map', 'style.css', 'style.css.map'], dir_build)
  ],
  devServer: {
    contentBase: dir_build,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: dir_js,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: dir_css,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-cssnext')
  ]
};
