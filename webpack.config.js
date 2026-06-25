const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point
  output: {
    filename: "bundle.js", // Output bundle
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean dist folder before build
  },
  mode: "development", // or 'production'
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // For CSS imports
      },
    ],
  },
};
