const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Workshop',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname,'dist')
    },
    port: 3000,
    open: true,
    hot: true,
  }
}