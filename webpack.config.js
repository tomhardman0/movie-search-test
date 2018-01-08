const path = require('path');
const webpack = require('webpack');
const environment = process.env.NODE_ENV || 'development';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = {
  development: [
    new ExtractTextPlugin({
      filename: 'dist/index.css',
      allChunks: true
    })
  ],
  production: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

module.exports = [{
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    plugins: plugins[environment],
    watch: environment === 'development'
},{
  entry: ['./src/main.scss'],
  output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      filename: 'index.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
}];
