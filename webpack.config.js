const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src/app_html.js",
  output: {
    filename: "editor.js",
    path: path.resolve(__dirname, "dist"),
  },
  performance: {
    hints: false,
  },
  plugins: [
    // Remove the unused JS file.
    // new CleanWebpackPlugin({
    //   protectWebpackAssets: false,
    //   cleanAfterEveryBuildPatterns: ["*.js"],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  watch: false,
};
