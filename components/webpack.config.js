const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        components: './src/components.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public', 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};