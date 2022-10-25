// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const stylesHandler = "style-loader";

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dev')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 9000,
    open: true,
    host: "localhost",
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App',
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env","@babel/preset-react"] },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'img/[name].[ext]'}
          },
          'image-webpack-loader'
        ]
      },
    ],
  },
};