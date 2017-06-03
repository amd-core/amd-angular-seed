const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Paths = require('./common/paths');
const CommonConfig = require('./common/webpack.common');
const JitConfig = require('./common/webpack.jit');

module.exports = WebpackMerge(CommonConfig, JitConfig, {
  devtool: 'cheap-module-eval-source-map'
});