const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = require('./paths');
const CommonConfig = require('./webpack.common.js');

module.exports = WebpackMerge(CommonConfig, {
  devtool: 'source-map',

  output: {
    path: paths.BuildRoot,
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    rules: [{
        test: /\.scss$/,
        include: paths.AppRoot,
        use: [{
            loader: 'raw-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMaps: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: paths.AppRoot,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              query: {
                modules: false,
                sourceMaps: false,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              query: {
                sourceMaps: false
              }
            }
          ]
        })
      }
    ],
  },

  plugins: [
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      },
      comments: false
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new Webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: true
      }
    })
  ]
});