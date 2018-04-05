import webpack from 'webpack';
import base_configuration from './webpack.config.client';
import application_configuration from '../configuration';

// Until `mini-css-extract-loader` supports Hot Module Reload.
// // const configuration = base_configuration({ development: true })
// const configuration = base_configuration({ development: true, cssBundle: true });

// With `development: false` all CSS will be extracted into a file
// named '[name]-[contenthash].css' using `extract-text-webpack-plugin`
// or `mini-css-extract-plugin`.
// (this behaviour can be disabled with `cssBundle: false`)
// (the filename can be customized with `cssBundle: "filename.css"`)

// The third argument – options object – may be passed to client() configuration function. 
// If options.development is set to false, then it will apply extract-text-webpack-plugin to 
// CSS styles automatically, i.e. it will extract all CSS styles into one big bundle file: 
// this is considered the "best practice" for production deployment 
// and using this option is more convenient then adding 
// extract-text-webpack-plugin to production webpack configuration manually.

// If upgrading a project from Webpack <= 3 to Webpack >= 4 (or starting fresh with Webpack >= 4) 
// then extract-text-webpack-plugin should be replaced with mini-css-extract-plugin. 
// In this case also pass options.useMiniCssExtractPlugin option set to true.

// If both development and cssBundle options are set to true, 
// then universal-webpack will enhance the client side Webpack configuration to 
// also output all styles into a single CSS bundle (while retaining style-loader) 
// which is later added to the webpage's <head/> as a <link rel="stylesheet"/> tag on the server side, 
// therefore making that "flash of unstyled content" disappear.

const configuration = base_configuration({ development: true, cssBundle: true, useMiniCssExtractPlugin: true })

const path = require('path');
const project_folder = path.resolve(__dirname, '..');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// configuration.devtool = 'cheap-eval-source-map'
// configuration.devtool = 'source-map';
configuration.devtool = 'inline-source-map';

// console.log('>>>>>> webpack.config.client.development.js > configuration.entry: ', configuration.entry);
// console.log('>>>>>> webpack.config.client.development.js > configuration.entry.main.length: ', configuration.entry.main.length);
// console.log('>>>>>> webpack.config.client.development.js > configuration.entry.main[0]: ', configuration.entry.main[0]);
// console.log('>>>>>> webpack.config.client.development.js > configuration.entry.main[1]: ', configuration.entry.main[1]);
// console.log('>>>>>> webpack.config.client.development.js > configuration.entry.main[2]: ', configuration.entry.main[2]);

configuration.plugins.push(
  // Environment variables
  new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      NODE_ENV  : JSON.stringify('development'),
      // BABEL_ENV : JSON.stringify('development/client')
    },
    REDUX_DEVTOOLS : true,
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
  }),

  // new MiniCssExtractPlugin({
  //   filename: '[name].css',
  //   chunkFilename: '[id].css',
  // }),

  // Webpack Hot Reload
  // https://github.com/webpack-contrib/mini-css-extract-plugin#configuration
  // TODO: HMR support
  // new webpack.HotModuleReplacementPlugin(),

  // Prints more readable module names in the browser console on HMR updates
  new webpack.NamedModulesPlugin(),

  new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerPort: 8888,
    defaultSizes: 'parsed',
    openAnalyzer: false,
    generateStatsFile: false
  }),

);

if (configuration.entry.main.length !== 2 && configuration.entry.main[0] !== 'babel-polyfill') {
  throw new Error('>>>>>>>>>>>>>>>>> ERROR!! > Unexpected `main` webpack entry point detected')
}

configuration.entry.main = [
  // `webpack-hot-middleware/client?path=http://${application_configuration.webpack.devserver.host}:${application_configuration.webpack.devserver.port}/__webpack_hmr`,
  // path.resolve(project_folder, 'client/assets/scss/mixins/index.scss'),
  path.resolve(project_folder, 'client/assets/scss/bootstrap/theme.scss'),
  'babel-polyfill',
  configuration.entry.main[1]
]

// network path for static files: fetch all statics from webpack development server
configuration.output.publicPath = `http://${application_configuration.webpack.devserver.host}:${application_configuration.webpack.devserver.port}${configuration.output.publicPath}`

// configuration.optimization.splitChunks.cacheGroups.styles.name = 'styles';
// configuration.optimization.splitChunks.cacheGroups.styles.test = /\.css$/;
// configuration.optimization.splitChunks.cacheGroups.styles.chunks = 'all';
// configuration.optimization.splitChunks.cacheGroups.styles.enforce = true;
// configuration.optimization.splitChunks.chunks = 'all';
// configuration.optimization.splitChunks.minSize = 0;
// configuration.optimization.occurrenceOrder = true;

// console.log('>>>>>> webpack.config.client.development.js > CONFIGURATION !!!!!!: ', configuration);

console.log('>>>>>> webpack.config.client.development.js > configuration.output.publicPath: ', configuration.output.publicPath);

export default configuration;
