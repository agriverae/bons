const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.min.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /.test.tsx/],
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          "css-loader",
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./assets/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
