import webpack from 'webpack';
import baseConfiguration from './webpack.config.server';

import settings from '../configuration'

const configuration = Object.assign({}, baseConfiguration);

const publicPath = configuration.output.publicPath;

configuration.mode = 'development',

// Get all statics from webpack development server
configuration.output.publicPath = `http://${settings.webpack.devserver.host}:${settings.webpack.devserver.port}${configuration.output.publicPath}`;

console.log('>>>>>> webpack.config.server.development.babel.js > configuration.output.publicPath: ', configuration.output.publicPath);

configuration.plugins = configuration.plugins.concat(
    new webpack.IgnorePlugin(/\/iconv-loader$/),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(false),
        NODE_ENV  : JSON.stringify('development'),
        BABEL_ENV : JSON.stringify('development/server')
      },
      REDUX_DEVTOOLS : false,
      __CLIENT__: false,
      __SERVER__: true,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: false,
    }),
);

export default configuration;
