const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Path = require('path');

const EnvConfig = require('./webpack.env');
const Paths = require('./paths');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    main: './src/main.ts'
  },

  output: {
    path: Paths.AppBuildRoot,
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].chunk.js'
  },

  devServer: {
    contentBase: Paths.AppBuildRoot,
    inline: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },

  resolve: {
    modules: [Path.join(__dirname, '..', '..', "node_modules")],
    mainFields: ["module", "browser", "main"],
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg|ico)$/,
      include: Paths.ImageRoot,
      use: [{
        loader: 'file-loader',
        query: {
          name: 'images/[name].[hash].[ext]'
        }
      }]
    }, {
      test: /\.(svg|woff|woff2|ttf|eot)$/,
      include: Paths.FontRoot,
      use: [{
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[hash].[ext]'
        }
      }]
    },
    {
      test: /\.scss$/,
      include: Paths.AppRoot,
      use: ['raw-loader', 'postcss-loader', 'sass-loader'],
    },
    {
      test: /\.scss$/,
      exclude: Paths.AppRoot,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    }
    ]
  },

  plugins: [
    new Webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      Paths.SourceRoot, {}
    ),
    new Webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills']
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Webpack.DefinePlugin({
      ENV: JSON.stringify(EnvConfig.env),
      IS_PRODUCTION: JSON.stringify(EnvConfig.isProduction)
    }),
    new CleanWebpackPlugin([Paths.AppBuildRoot], {
      root: Paths.ProjectRoot
    })
  ]
};