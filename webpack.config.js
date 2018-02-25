var webpack = require('webpack');
module.exports = {
  entry:  {
	    App: './app/modules/App/App.js',
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
