module.exports = {
  entry: {
    'app': './assets/app/main.ts'
  },
  output: {
    path: './public/js/app',
    publicPath: "/js/app/",
    filename: 'bundle.js'
  },

  module: {
  loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  }
};