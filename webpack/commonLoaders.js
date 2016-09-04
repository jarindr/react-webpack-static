module.exports = [
  {
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'react']
    }
  },
  {
    test: /\.placeholder\.(jpg|png)$/,
    loader: 'url?name=assets/images/[hash].[ext]&limit=4096'
  },
  {
    test: /\.(svg|png)(\?.*)?$/,
    exclude: /\.placeholder\.(jpg|png)$/,
    loader: 'url?name=assets/images/[hash].[ext]&limit=4096'
  },
  {
    test: /\.jpg$/,
    exclude: /\.placeholder\.(jpg|png)$/,
    loader: 'file?name=assets/images/[hash].[ext]'
  },
  {
    test: /\.eps$/,
    exclude: /\.placeholder\.(jpg|png)$/,
    loader: 'file?name=assets/images/[hash].[ext]'
  },
  {
    test: /\.(eot|woff2|woff|ttf|otf|)(\?.*)?$/,
    loader: 'file?name=assets/fonts/[hash].[ext]'
  }

]
