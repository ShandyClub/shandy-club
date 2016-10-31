const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app/client'),
  dist: path.join(__dirname, '../public'),
  css: path.join(__dirname, '../app/client/css'),
  img: path.join(__dirname, '../static/img')
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
    alias: {
      css: PATHS.css,
      img: PATHS.img
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new CleanPlugin(['index.html', 'bundle.js', 'bundle.js.map', 'style.css', 'style.css.map'], PATHS.dist),
    new CopyPlugin([
      { from: './app/client/index.html', to: 'index.html' }
    ]),
    new HtmlWebpackPlugin({
      template: 'app/client/index.html',
      favicon: 'static/img/favicon.png'
    })
  ],

  devServer: {
    contentBase: PATHS.dist,
    port: 3000,
    // hot: true,
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
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
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

  postcss: [ require('postcss-cssnext') ]

}
