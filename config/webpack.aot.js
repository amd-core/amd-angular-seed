const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const NgTools = require('@ngtools/webpack');

const CommonConfig = require('./webpack.common');
const ProdPlugins = require('./prod.plugins');

module.exports = WebpackMerge(CommonConfig, {
  entry: {
    main: './src/main.aot.ts'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        '@ngtools/webpack',
        {
          loader: 'tslint-loader',
          query: {
            emitErrors: true,
            failOnHint: true,
            typeCheck: true
          }
        }
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