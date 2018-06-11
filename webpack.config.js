const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/App.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: 'assets'
  },
  mode: 'development',
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8000
  }
};