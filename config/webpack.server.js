const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const NgTools = require('@ngtools/webpack');

const Paths = require('./paths');

module.exports = {
  target: 'node',
  entry: {
    server: ['./src/server/app.server.ts', './src/server/server.aot.ts']
  },
  output: {
    path: Paths.BuildRoot,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.ts$/,
        use: ['@ngtools/webpack']
      }
    ]
  },
  plugins: [
    new Webpack.NoEmitOnErrorsPlugin(),
    new NgTools.AotPlugin({
      tsConfigPath: './tsconfig.server.json'
    })
  ]
};
