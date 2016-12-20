'use strict';
let webpack = require('webpack'); // import webpack
let path = require('path'); // manipulate path names more easily

module.exports = {
  devtool: 'inline-source-map', // display line numbers for errors
  entry: [ // where webpack is going to look for our file
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' // what the output file will be called (we link to this in our index.html file)
  },
  resolve: { // where webpack looks for files
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel?presets[]=react,presets[]=es2015']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // for live reloading
    new webpack.NoErrorsPlugin() // webpack won't compile unless there are no errors
  ]
};
