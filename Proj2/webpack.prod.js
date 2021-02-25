const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
              esModule: false,        // Important option attribute when using ESModules through Typescript
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