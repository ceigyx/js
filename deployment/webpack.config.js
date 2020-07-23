const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    SharePlace: './src/SharePlace.js',
    MyPlace: './src/MyPlace.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
  },
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
      chunks: ['SharePlace'],
      filename: '../../index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/views/my-place/index.ejs',
      scriptLoading: 'defer',
      inject: 'head',
      chunks: ['MyPlace'],
      filename: '../../my-place/index.html'
    }),
  ],
};
