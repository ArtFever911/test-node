const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const rootPath = path.join(__dirname, '../');
require('dotenv').config();

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'eval-source-map',
  entry: path.join(rootPath, './client/app.js'),
  output: {
    path: path.join(rootPath, './client/public/js'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, './client/src/index.html'),
      filename: path.join(rootPath, './client/public/index.html')
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(rootPath, './client/public'),
    publicPath: '/js/',
    filename: 'bundle.js',
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    },
    hot: true,
    port: process.env.DEV_PORT
  }
}