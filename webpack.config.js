const path = require('path')

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader", "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        type: "asset/resource"
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.txt$/,
        use: "raw-loader"
      }
    ]
  }
}