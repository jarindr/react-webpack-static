
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (mode) => [
  {
    test: /\.css$/,
    loader: mode.createLoader('css-loader!postcss-loader')
  },
  {
    test: /\.styl$/,
    loader: mode.createLoader('css-loader?modules!postcss-loader!stylus-loader'),
    exclude: /\.global\.styl$/
  },
  {
    test: /\.global\.styl$/,
    loader: mode.createLoader('css-loader!postcss-loader!stylus-loader')
  }
]

module.exports.modes = {
  development: {
    createLoader: (loader) => 'style-loader!' + loader
  },
  production: {
    createLoader: (loader) => ExtractTextPlugin.extract(loader)
  }
}
