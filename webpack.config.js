var LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
module.exports = {
  entry: "./components/common/app.js",
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
    // plugins: [
    //   new LiveReloadPlugin('http://localhost:35729/livereload.js')
    // ]
  },

  watch: true
}

