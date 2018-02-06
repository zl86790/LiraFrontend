var webpack = require('webpack');
module.exports = {
  entry:  {
	    login: './app/modules/login/login.js'
  },
  output: {
      path: __dirname + '/build',
      filename: "Lira.js"
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
