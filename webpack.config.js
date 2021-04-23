const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


  module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
  },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new HtmlWebpackPlugin(

      ),
    ],
    
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.less$/,
          loader: [   
            "style-loader", 
            "css-loader",
            "less-loader"
        ],
        },
        {
          test: /\.css$/i,
          use: [          
              "style-loader", "css-loader"
          ],
        },
      ],
    },
  }

