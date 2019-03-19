const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const appConfig = require('./appConfig')

const config = merge(baseConfig, {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: appConfig.prod.homepage,
    filename: 'js/[name].[contenthash:8].js'
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: "css-loader",
            // options: {
            //   importLoaders: 1,
            //   modules: true,
            //   localIdentName: "[name]__[local]___[hash:base64:5]"
            // }
          },
          'postcss-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css"
    }),
    new CleanWebpackPlugin()
  ]
})

module.exports = config
