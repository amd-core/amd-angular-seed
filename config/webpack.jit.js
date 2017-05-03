module.exports = {
  module: {
    rules: [{
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      }
    ]
  }
};