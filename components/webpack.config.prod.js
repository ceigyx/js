const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js',
        components: './src/components.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public', 'assets', 'scripts'),
        publicPath: 'public/assets/scripts/'
    },
    devtool: 'cheap-source-map',
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};