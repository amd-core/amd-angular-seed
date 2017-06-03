const WebpackMerge = require('webpack-merge');
const AotConfig = require('./webpack.aot');

module.exports = WebpackMerge(AotConfig, {
  output: {
    publicPath: 'public/'
  }
});
