/* eslint-disable import/no-extraneous-dependencies, import/no-commonjs */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // This is important to repro
  cache: {
    name: 'webapp',
    type: 'filesystem',
  },
  entry: path.join(__dirname, 'index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              path: 'dist',
              publicPath: '/dist/',
            },
          },
          'css-loader',
          'stylus-relative-loader',
        ],
      },
    ],
  },
  plugins: [
    // IMPORTANT
    new MiniCssExtractPlugin({
      filename: 'styles.[chunkhash].css',
    }),
  ],
};
