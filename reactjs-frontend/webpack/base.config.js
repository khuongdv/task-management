/**
 * Common config for any environment
 * @author DongDo
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  root: path.join(__dirname, '..'),
  nodeModules: path.join(__dirname, '../node_modules'),
  build: path.join(__dirname, '../build')
};

module.exports = {
  context: PATHS.src,
  entry: './index',
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: [PATHS.root, PATHS.src, PATHS.nodeModules]
  },
  resolveLoader: {
    root: PATHS.nodeModules
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World',
      template: './index.html'
    })
  ]
}