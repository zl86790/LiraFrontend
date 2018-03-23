var webpack = require('webpack');
module.exports = {
  entry:  {
	    App: './public/app/modules/App/App.js',
  },
  devServer:{
	    historyApiFallback:true
  },
  output: {
      path: __dirname + '/public/build',
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
