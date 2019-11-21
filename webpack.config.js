const path = require("path");

module.exports = {
  entry: "./src/init.jsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["transform-react-jsx"]
          }
        }
      },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"], exclude: /node_modules/ },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loaders: ["file-loader"]
      },
      {
        test: /\.wasm$/,
        type: "javascript/auto",
        loaders: ["file-loader"]
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
