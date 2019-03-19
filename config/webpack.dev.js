const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path')

const config = merge(baseConfig, {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
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
  plugins: [],
  devServer: {
    port: 8080,
    contentBase: '/',
    publicPath: '/',
    hot: true,
    historyApiFallback: true
  }
})

module.exports = config
