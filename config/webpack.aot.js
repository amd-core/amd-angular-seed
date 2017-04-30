const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const NgTools = require('@ngtools/webpack');

const CommonConfig = require('./webpack.common');
const ProdPlugins = require('./prod.plugins');

module.exports = WebpackMerge(CommonConfig, {
  module: {
    rules: [{
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },
  plugins: [
    ...ProdPlugins,
    new NgTools.AotPlugin({
      tsConfigPath: './tsconfig.aot.json'
    })
  ]
});