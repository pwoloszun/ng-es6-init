module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url'}
    ]
  }
};
