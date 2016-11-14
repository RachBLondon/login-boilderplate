module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname,
    filename: '/public/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
