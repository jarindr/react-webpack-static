const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonLoaders = require('./webpack/commonLoaders')
const autoprefixer = require('autoprefixer')
const createStylesheetLoaders = require('./webpack/createStylesheetLoaders')

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    port: 9000
  },

  module: {
    loaders: [
      ...commonLoaders,
      ...createStylesheetLoaders(createStylesheetLoaders.modes.development)
    ]
  },

  postcss () {
    return [autoprefixer]
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
