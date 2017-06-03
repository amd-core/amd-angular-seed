const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const NgTools = require('@ngtools/webpack');

const CommonConfig = require('./common/webpack.common');
const ProdPlugins = require('./common/prod.plugins');

module.exports = WebpackMerge(CommonConfig, {
  entry: {
    main: './src/main.aot.ts'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        '@ngtools/webpack'
      ]
    }]
  },
  
  plugins: [
    ...ProdPlugins,
    new NgTools.AotPlugin({
      tsConfigPath: './tsconfig.aot.json'
    })
  ]
});