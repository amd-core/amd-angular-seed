module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        'ts-loader',
        'angular2-template-loader',
        {
          loader: 'tslint-loader',
          query: {
            emitErrors: true,
            failOnHint: true,
            typeCheck: true
          }
        }
      ]
    }]
  }
};