'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

require('es6-promise').polyfill();

module.exports = {

  entry: './src/main.js',

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']}
    ]
  },

  postcss: [autoprefixer({browsers: ['last 2 versions']})],

  plugins: [],

  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};