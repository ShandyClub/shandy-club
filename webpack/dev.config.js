const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../client'),
  dist: path.join(__dirname, '../public')
}

module.exports = {
  devtool: 'eval',
  entry: [PATHS.src],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  plugins: [
    new CleanPlugin(['index.html', 'bundle.js', 'bundle.js.map', 'server.bundle.js', 'style.css', 'style.css.map'], PATHS.dist),
    new CopyPlugin([
      { from: './client/index.html', to: 'index.html' }
    ])
  ],
  devServer: {
    contentBase: PATHS.dist,
    port: 3000,
    // hot: true,
    inline: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  postcss: [
    require('postcss-cssnext')
  ]
};
