const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(less|scss)$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(jpg|gif|bmp|png|svg)$/, use: 'url-loader?limit=30000&name=[hash:8]-[name].[ext]' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(eot|svg|woff|woff2|ttf)$/, use: 'url-loader'}
    ]

  }
}