var NODE_ENV = process.env.NODE_ENV || 'development'
var webpack = require('webpack')

var common_config = {
  context: __dirname + '/frontend',
  entry: {
    home: './home',
    about: './about'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
    }),
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
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']  
        }
      }
    ]
  }
}

var dev_config = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: 'eval'
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