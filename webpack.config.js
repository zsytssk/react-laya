"use strict";
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    path: __dirname + "\\dist",
    filename: "bundle.js",
    library: "index",
    libraryTarget: "umd"
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
