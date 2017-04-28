const path = require('path');

const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ProjectRoot = path.join(__dirname, '..');
const SourceRoot = path.join(ProjectRoot, 'src');
const BuildRoot = path.join(ProjectRoot, 'build');

module.exports = {
  target: 'web',
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  output: {
    path: BuildRoot,
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
        include: SourceRoot,
        loader: 'raw-loader!sass-loader'
      },
      {
        test: /\.sass$/,
        exclude: SourceRoot,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new Webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      SourceRoot, {}
    ),
    new Webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};