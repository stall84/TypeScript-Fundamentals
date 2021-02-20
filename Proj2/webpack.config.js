const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/icons/[name].[ext]'
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};