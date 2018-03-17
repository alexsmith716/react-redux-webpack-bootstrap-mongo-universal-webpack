var path = require('path');
var webpack = require('webpack');

var tether = require('tether');

var rootPath = path.resolve(__dirname, '..');
// var assetsPath = path.resolve(rootPath, 'public', 'build', 'client');
// var assetsPath = path.resolve(rootPath, 'public', 'build', 'assets');

/*
optimization: {
  splitChunks: {
    chunks: "all",
    minSize: 0,
  },
  occurrenceOrder: true
},
optimization: {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
     },
    },
  },
},
*/
//       './client/assets/scss/global.scss',

module.exports = {

  context: rootPath,

  entry: {
    main: [
      'babel-polyfill',
      './client/index.entry.js',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux',
      'tether',
      'jquery',
      'bootstrap',
    ],
  },

  output: {
    path: path.resolve(rootPath, 'build/assets'),
    publicPath: '/assets/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
    occurrenceOrder: true
  },

  module: {
    strictThisContextOnImports: true,

    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/,],
        use: [
          { 
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use:
        [{
          loader: 'style-loader'
        },
        {
          loader : 'css-loader',
          options:
          {
            importLoaders : 2,
            sourceMap     : true
          }
        },
        {
          loader : 'postcss-loader',
          options:
          {
            sourceMap : true
          }
        },
        {
          loader : 'sass-loader',
          options:
          {
            outputStyle       : 'expanded',
            sourceMap         : true,
            sourceMapContents : true
          }
        }]
      },
      {
        test: /\.(css)$/,
        use:
        [{
          loader: 'style-loader'
        },
        {
          loader : 'css-loader',
          options:
          {
            importLoaders : 2,
            sourceMap     : true
          }
        },
        {
          loader : 'postcss-loader'
        }]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        }],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
      },
      {
        test: /\.json$/,
        use: [{
          loader: 'json-loader',
        }]
      },
      {
        test: '/jquery/',
        use: [{
          loader: 'expose-loader',
          options: 'jQuery',
        },{
          loader: 'expose-loader',
          options: '$',
        }]
      },
      {
        test: '/tether/',
        use: [{
          loader: 'expose-loader',
          options: 'Tether',
        }]
      },
    ]
  },

  resolve: {
    modules: [
      path.resolve(rootPath, 'client'),
      path.resolve('node_modules')
    ],
  },

  plugins: []
}
