const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  // context: path.resolve(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Tutorial',
      favicon: 'public/fav.ico',
    }),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
      {
        loader: 'eslint-loader',
        options: {
          enforce: 'pre',
        },
      }],
    }],
  },
};
