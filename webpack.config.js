const path = require('path');
const SRC_DIR = path.resolve(__dirname, './src');
const OUT_DIR = path.resolve(__dirname, './public');

module.exports = {
  mode: 'production',
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  }
};
