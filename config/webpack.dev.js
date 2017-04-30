const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Paths = require('./paths');
const CommonConfig = require('./webpack.common');
const JitConfig = require('./webpack.jit');

module.exports = WebpackMerge(CommonConfig, JitConfig, {
  devtool: 'cheap-module-eval-source-map'
});