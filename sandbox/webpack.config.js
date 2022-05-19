var webpack = require("webpack");
var path = require("path");
var sourcePath = path.join(__dirname, "./");
var outPath = path.join(__dirname, "../public");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const config = require('./config.js')

module.exports = {
  context: sourcePath,
  entry: {
    app: "./index.tsx"
  },
  output: {
    path: outPath,
    filename: "bundle[hash].js",
    chunkFilename: "[chunkhash].js",
    publicPath: "/"
  },
  target: "web",
  mode: "development",
  resolve: {
    plugins: [new TsconfigPathsPlugin({/* options: see below */})],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    mainFields: ["module", "browser", "main"],
    alias: {
      app: path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      { test: /\.(png|svg)$/, use: "url-loader?limit=10000" },
      { test: /\.(jpg|gif)$/, use: "file-loader" },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    }),
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: "./assets/index.html"
    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: "minimal"
  }
};
