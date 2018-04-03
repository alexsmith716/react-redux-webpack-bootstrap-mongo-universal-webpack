
require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
var tether = require('tether');

var rootPath = path.resolve(__dirname, '..');
// var assetsPath = path.resolve(rootPath, 'public', 'assets');

// optimization: {
//   splitChunks: {
//     chunks: "all",
//     minSize: 0,
//   },
//   occurrenceOrder: true
// },
// optimization: {
//   minimize: isDist,
//   runtimeChunk: false,
//   splitChunks: {
//     automaticNameDelimiter: "-",
//     cacheGroups: {
//       styles: {
//         name: 'bundle',
//         test: /\.(css|scss)$/,
//         chunks: 'all',
//         enforce: true
//       },
//       vendor: {
//         chunks: 'initial',
//         name: 'vendor',
//         priority: -10,
//         test: /node_modules/        
//       }
//     }
//   }
// },
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
    //filename: '[name]-[contenthash].js',
    //chunkFilename: '[name]-[contenthash].js',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    //filename: "[name].chunkhash.js",
    //chunkFilename: "[name].chunkhash.js"
    //filename: '[name].bundle.js',
    //hunkFilename: '[name].chunk.js',
  },

  optimization: {
    splitChunks: {
      automaticNameDelimiter: "-",
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
        exclude: /node_modules/,
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

  resolve: {
    modules: ['client', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss', '.css', '.json',],
  },

  plugins: []
}
