/**
 * Config for development environment
 * @author DongDo
 */
var webpack = require('webpack');
var baseConfig = require('./base.config.js');
var merge = require('webpack-merge');

var configuration = merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    /**
     * Set host/port for developement server
     */
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '8526'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
});

module.exports = configuration;