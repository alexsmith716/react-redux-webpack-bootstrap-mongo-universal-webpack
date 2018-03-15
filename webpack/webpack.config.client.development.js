import webpack from 'webpack';
import base_configuration from './webpack.config.client';
import application_configuration from '../configuration';

const configuration = base_configuration({ development: true, cssBundle: true });

// https://webpack.js.org/guides/development/#source-maps
// The default `source-map` `devtool` gives better
// source maps in Chrome (as per user reports in 2017).
// configuration.devtool = 'cheap-eval-source-map'

console.log('>>>>>> webpack.config.client.development.js > configuration.entry: ', configuration.entry);
console.log('>>>>>> webpack.config.client.development.js > configuration.entry.main.length: ', configuration.entry.main.length);
console.log('>>>>>> webpack.config.client.development.js > configuration.entry.main[0]: ', configuration.entry.main[0]);

configuration.plugins.push(
  // Environment variables
  new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      NODE_ENV  : JSON.stringify('development'),
      BABEL_ENV : JSON.stringify('development/client')
    },
    REDUX_DEVTOOLS : false,
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
  }),

  // Webpack Hot Reload
  new webpack.HotModuleReplacementPlugin(),

  // Prints more readable module names in the browser console on HMR updates
  new webpack.NamedModulesPlugin(),

  // // Extracts common javascript into a separate file
  // new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].js')
);

// Enable webpack development server

// >>>> configuration.entry.main.length:  6
// >>>> configuration.entry.main[0]:  eventsource-polyfill

if (configuration.entry.main.length !== 3 && configuration.entry.main[0] !== 'babel-polyfill') {
  throw new Error('Unexpected `main` webpack entry point detected')
}

configuration.entry.main = [
  `webpack-hot-middleware/client?path=http://${application_configuration.webpack.devserver.host}:${application_configuration.webpack.devserver.port}/__webpack_hmr`,
  'babel-polyfill',
  'react-hot-loader/patch',
  configuration.entry.main[2]
]

// network path for static files: fetch all statics from webpack development server
configuration.output.publicPath = `http://${application_configuration.webpack.devserver.host}:${application_configuration.webpack.devserver.port}${configuration.output.publicPath}`

console.log('>>>>>> webpack.config.client.development.js > CONFIGURATION !!!!!!: ', configuration);

export default configuration;
