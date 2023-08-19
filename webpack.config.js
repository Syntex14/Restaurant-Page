
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js', 
    menu: './src/menu.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Development</title>
          </head>
          <body>
            <div id="content"></div>
          </body>
        </html>
      `,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }, 
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
  },
};
