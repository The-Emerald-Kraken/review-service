const path = require('path');

const SRC_FILE = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: SRC_FILE,
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
    ],
  },
};
