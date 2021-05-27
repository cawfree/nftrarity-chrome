const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'background.js'),
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [],
  target: 'node',
};