const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = require('./paths');

module.exports = {
  target: 'web',
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  output: {
    path: paths.BuildRoot,
    filename: '[name].js',
    sourceMapFilename: '[name].map.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
        test: /\.ts$/,
        loaders: [
          'ts-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loaders: [
          'file-loader?name=assets/[name].[hash].[ext]'
        ]
      },
      {
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
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new Webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      paths.SourceRoot, {}
    ),
    new Webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};