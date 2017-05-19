const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      html5: true,
      caseSensitive: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      decodeEntities: true,
      keepClosingSlash: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }
  }),
  new Webpack.NoEmitOnErrorsPlugin(),
  new Webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false
    },
    comments: false
  })
];
