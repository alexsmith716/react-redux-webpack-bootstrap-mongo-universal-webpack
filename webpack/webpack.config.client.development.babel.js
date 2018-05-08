import webpack from 'webpack';
import base_configuration from './webpack.config';
import application_configuration from '../configuration';
import { clientConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings';

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WEBPACK.CONFIG.CLIENT.DEVELOPMENT.BABEL.JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

// With `development: false` all CSS will be extracted into a file
// named '[name]-[contenthash].css' using `mini-css-extract-plugin`.
const configuration = clientConfiguration(base_configuration, settings, { development: true });

// https://github.com/webpack-contrib/webpack-serve/issues/81#issuecomment-378469110
// export default const configuration = ...
module.exports = configuration;

// `webpack-serve` can't set the correct `mode` by itself.
// https://github.com/webpack-contrib/webpack-serve/issues/94
configuration.mode = 'development';

const path = require('path');
const project_folder = path.resolve(__dirname, '..');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// https://webpack.js.org/guides/development/#source-maps
// configuration.devtool = 'cheap-eval-source-map'
// configuration.devtool = 'source-map';
configuration.devtool = 'inline-source-map';


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// PLUGINS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

configuration.plugins.push(

  new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      NODE_ENV  : JSON.stringify('development'),
    },
    REDUX_DEVTOOLS : true,
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
  }),

  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    Popper: ['popper.js', 'default'],
    Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
    Button: "exports-loader?Button!bootstrap/js/dist/button",
    Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
    Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
    Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
    Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
    Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
    Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    Util: "exports-loader?Util!bootstrap/js/dist/util",
  }),

  // // Webpack Hot Reload
  // new webpack.HotModuleReplacementPlugin(),

  new webpack.NamedModulesPlugin(),

  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: '../client-development.html',
    // analyzerMode: 'server',
    // analyzerPort: 8888,
    // defaultSizes: 'parsed',
    openAnalyzer: false,
    generateStatsFile: false
  }),

);

// network path for static files: fetch all statics from webpack development server
configuration.output.publicPath = `http://${application_configuration.webpack.devserver.host}:${application_configuration.webpack.devserver.port}${configuration.output.publicPath}`;

console.log('>>>>>> webpack.config.client.development.babel.js > configuration.output.publicPath: ', configuration.output.publicPath);

// `webpack-serve` settings.
configuration.serve = {
  port : application_configuration.webpack.devserver.port,
  dev  : {
    // https://github.com/webpack-contrib/webpack-serve/issues/95
    publicPath : configuration.output.publicPath,
    headers : { 'Access-Control-Allow-Origin': '*' }
  }
}
