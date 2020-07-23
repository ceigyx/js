const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'share-place': './src/SharePlace.js',
    'my-place': './src/MyPlace.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3 } },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/views/index.ejs',
      scriptLoading: 'defer',
      inject: 'head',
      chunks: ['share-place'],
      filename: '../../index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/views/my-place/index.ejs',
      scriptLoading: 'defer',
      inject: 'head',
      chunks: ['my-place'],
      filename: '../../my-place/index.html',
    }),
  ],
};
