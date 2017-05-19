const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Paths = require('./common/paths');
const CommonConfig = require('./common/webpack.common');
const JitConfig = require('./common/webpack.jit');
const ProdPlugins = require('./common/prod.plugins');

module.exports = WebpackMerge(CommonConfig, JitConfig, {
  plugins: ProdPlugins
});