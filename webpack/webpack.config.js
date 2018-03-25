var path = require('path');
var webpack = require('webpack');

var tether = require('tether');

var rootPath = path.resolve(__dirname, '..');
// var assetsPath = path.resolve(rootPath, 'public', 'build', 'client');
// var assetsPath = path.resolve(rootPath, 'public', 'build', 'assets');

// optimization: {
//   splitChunks: {
//     chunks: "all",
//     minSize: 0,
//   },
//   occurrenceOrder: true
// },
// optimization: {
//   splitChunks: {
//     cacheGroups: {
//       commons: {
//         test: /[\\/]node_modules[\\/]/,
//         name: 'vendor',
//      },
//     },
//   },
// },

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
      'popper.js',
      'bootstrap',
    ],
  },

  output: {
    path: path.resolve(__dirname, '../public/assets'),
    // the target directory for all output files - absolute path
    publicPath: '/assets/',
    // the url to the output directory resolved relative to the HTML page
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    // chunkFilename: '[name].[chunkhash].js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
    occurrenceOrder: true
  },

  module: {
    // Works around Webpack bug when using `Array.from()` in Babel (`core-js`)
    // https://github.com/webpack/webpack/issues/5135
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
        include: [ path.resolve(rootPath, 'client/assets/scss') ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            }
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        exclude: [ path.resolve(rootPath, 'client/assets/scss') ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
          },
        ]
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
        test: '/popper.js/',
        use: [{
          loader: 'expose-loader',
          options: 'popper',
        },{
          loader: 'expose-loader',
          options: 'Popper',
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

  //resolve: {
  //  modules: [
  //    path.resolve(rootPath, 'client'),
  //    path.resolve('node_modules')
  //  ],
  //},

  resolve: {
    modules: ['client', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss', '.css', '.json',],
  },

  plugins: []
}
