'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './src/main.js',

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
    ]
  },

  plugins: [],

  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};