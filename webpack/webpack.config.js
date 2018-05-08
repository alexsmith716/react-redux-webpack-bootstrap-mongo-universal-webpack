const webpack = require('webpack');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const rootPath = path.resolve(__dirname, '..');

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WEBPACK.CONFIG.JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

module.exports = {

  context: rootPath,

  entry: {
    main: [
      'bootstrap-loader',
      './client/index.entry.js',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux'
    ],
  },

  output: {
    path: path.resolve(__dirname, '../public/assets'),
    // the target directory for all output files - absolute path
    publicPath: '/assets/',
    // the url to the output directory resolved relative to the HTML page
    filename: '[name]-[hash].js',
    // filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    // filename: '[name].[hash].js',
    // chunkFilename: '[name].[hash].js',
  },

  optimization: {
    splitChunks: {
      automaticNameDelimiter: "-",
      chunks: 'all',
      minSize: 0,
    },
    // runtimeChunk: true,
    // occurrenceOrder: true,
  },

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },

  module: {

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
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              // importLoaders: 3,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../client/assets/scss/mixins/mixins.scss'),
              ],
            },
          },
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [{
          loader: 'url-loader',
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
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json',],
  },
  plugins: []
}
