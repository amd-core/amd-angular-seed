const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
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
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['file-loader?name=[path][name].[ext]']
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
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Webpack.DefinePlugin({
      ENV: JSON.stringify(EnvConfig.env),
      IS_PRODUCTION: JSON.stringify(EnvConfig.isProduction)
    })
  ]
};