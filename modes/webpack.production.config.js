const path = require('path')

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },
  mode: "production"
}