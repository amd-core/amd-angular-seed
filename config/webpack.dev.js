const path = require('path');

const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CommonConfig = require('./webpack.common');

module.exports = WebpackMerge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, '..', 'build'),
    inline: true,
    historyApiFallback: true
  }
});