"use strict";
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.tsx"
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/src")
  },
  module: {
    rules: [
      {
        test: /\.(.*)?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.webpack.json",
          transpileOnly: true
        }
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist")
  }
};
