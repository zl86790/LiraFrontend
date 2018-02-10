var webpack = require('webpack');
module.exports = {
  entry:  {
	    Login: './app/modules/Login/Login.js',
	    Header: './app/modules/Header/Header.js',
	    Dashboard: './app/modules/Dashboard/Dashboard.js',
  },
  output: {
      path: __dirname + '/build',
      filename: '[name].js'
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};
