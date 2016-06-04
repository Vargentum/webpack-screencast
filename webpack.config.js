var NODE_ENV = process.env.NODE_ENV || 'development'
var webpack = require('webpack')

var common_config = {
  entry: "./home",
  output: {
    filename: "build.js",
    library: 'home'
  },
  plugins: [
    new webpack.EnvironmentPlugin('NODE_ENV', 'USER') //way 1
    // way 2
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(NODE_ENV),
    //   LANG: '"ru"'
    // })
  ]
}

var dev_config = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: 'source-map'
}

var prod_config = {}

module.exports = Object.assign(
  common_config, NODE_ENV === 'development' ? dev_config : prod_config
)