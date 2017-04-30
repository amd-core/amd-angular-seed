const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Paths = require('./paths');
const CommonConfig = require('./webpack.common');
const JitConfig = require('./webpack.jit');
const ProdPlugins = require('./prod.plugins');

module.exports = WebpackMerge(CommonConfig, JitConfig, {
  plugins: ProdPlugins
});