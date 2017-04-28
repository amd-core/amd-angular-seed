const WebpackMerge = require('webpack-merge');

const paths = require('./paths');
const CommonConfig = require('./webpack.common');

module.exports = WebpackMerge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: paths.BuildRoot,
    inline: true,
    historyApiFallback: true
  }
});