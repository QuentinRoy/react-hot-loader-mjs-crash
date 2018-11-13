const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = relPath => path.resolve(__dirname, relPath);

module.exports =  {
    entry: {
      experiment: ['./index.js']
    },
    context: resolve('src'),
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: [
            resolve('node_modules/babel-loader'),
            resolve('node_modules/@babel'),
            resolve('node_modules/core-js')
          ],
          use: 'babel-loader'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: '.mjs crash of webpack-hot-loader'
      }), 
    ]
  };
