const Webpack = require('webpack');
const NgTools = require('@ngtools/webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NodeExternals = require('webpack-node-externals');

const Paths = require('./common/paths');

module.exports = {
  target: 'node',
  entry: {
    server: ['./src/server/app.server.ts', './src/server/server.aot.ts']
  },
  output: {
    path: Paths.BuildRoot,
    filename: '[name].js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  externals: [NodeExternals()],
  module: {
    rules: [{
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.ts$/,
        use: [
          '@ngtools/webpack'
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        include: Paths.ImageRoot,
        use: [{
          loader: 'file-loader',
          query: {
            name: 'images/[name].[hash].[ext]',
            emitFile: false
          }
        }]
      }, {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        include: Paths.FontRoot,
        use: [{
          loader: 'file-loader',
          query: {
            name: 'fonts/[name].[hash].[ext]',
            emitFile: false
          }
        }]
      }
    ]
  },
  plugins: [
    new Webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      Paths.SourceRoot, {}
    ),
    new Webpack.NoEmitOnErrorsPlugin(),
    new NgTools.AotPlugin({
      tsConfigPath: './tsconfig.server.json'
    }),
    new CleanWebpackPlugin([Paths.BuildRoot], {
      root: Paths.ProjectRoot,
      exclude: Paths.AppBuildRoot
    })
  ]
};