const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = require('./paths');
const CommonConfig = require('./webpack.common');

module.exports = WebpackMerge(CommonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: paths.BuildRoot,
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
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
              sourceMaps: true
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
                sourceMaps: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              query: {
                sourceMaps: true
              }
            }
          ]
        })
      }
    ],
  },

  devServer: {
    contentBase: paths.BuildRoot,
    inline: true,
    historyApiFallback: true,
    stats: 'minimal'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});