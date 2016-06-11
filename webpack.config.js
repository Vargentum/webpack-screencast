var NODE_ENV = process.env.NODE_ENV || 'development'
var webpack = require('webpack')

var common_config = {
  context: __dirname + '/frontend',
  entry: {
    app: './app'
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
    }),
    new webpack.ProvidePlugin({
      map: 'lodash/collection/map'
    })
  ],
  resolve: {
    extensions: ['.js', ''],
    modulesDirectories: ['node_modules']
  },
  resolveLoader: {
    extensions: ['.js', ''],
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        include: __dirname + '/frontend',
        loader: 'babel',
        query: {
          presets: ['es2015']
          // Disabled in reason of Error generating: 
          // Module build failed: ReferenceError: Unknown plugin "transform-runtime" specified in "base" at 0, attempted to resolve relative to "/Users/administrator/node_modules/lodash/collection"
          // plugins: ['transform-runtime'] 
        }
      }, {
        test: /old\.js$/,
        loader: 'imports?workSettings=>{delay:1000}!exports?Work'        
      }
    ],
  },
  externals: {
    lodash: '_'
  },
  resolve: {
    root: __dirname + '/vendor',
    alias: {
      old: 'old/dist/old'
    }
  }
}

var dev_config = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  }
  // devtool: 'eval'
}

var prod_config = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ]
}

module.exports = Object.assign(
  common_config, NODE_ENV === 'development' ? dev_config : prod_config
)