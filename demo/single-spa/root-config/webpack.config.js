const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'root-config.js'),
  output: {
    filename: 'root-config.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system'
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '..'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      inject: false
    })
  ],
  externals: ['single-spa']
};
