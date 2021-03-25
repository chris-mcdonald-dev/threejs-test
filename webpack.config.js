const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
    plugins: [
    new HtmlWebpackPlugin({
        title: "Webpack Output",
        template: './src/index.html'
    }),
    new NodemonPlugin(),
    new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
    },
};