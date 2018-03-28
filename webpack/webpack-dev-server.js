
// "babel-node ./webpack/webpack-dev-server.js"
// straight through webpack to webpack.config.js
// "presets": [env]
// "plugins": ["transform-object-rest-spread", "transform-class-properties", "transform-promise-to-bluebird"]

import express from 'express';
import webpack from 'webpack';

import webpack_dev_middleware from 'webpack-dev-middleware';
import webpack_hot_middleware from 'webpack-hot-middleware';

import configuration from './webpack.config.client.development';
import application_configuration from '../configuration';

console.log('>>>>>>>>>>>>>>>> webpack-dev-server.js <<<<<<<<<<<<<<<<<<')

const compiler = webpack(configuration);
const devserver = new express();

devserver.use(webpack_dev_middleware(compiler, {
  quiet       : true, // don’t output anything to the console
  noInfo      : true, // suppress boring information
  hot         : false, // adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice
  inline      : true, // also adds the webpack/hot/dev-server entry

  // You can use it in two modes:
  // watch mode (default): The compiler recompiles on file change.
  // lazy mode: The compiler compiles on every request to the entry point.
  lazy        : false,

  // network path for static files: fetch all statics from webpack development server
  publicPath  : configuration.output.publicPath,

  headers     : { 'Access-Control-Allow-Origin': '*' },
  stats       : { colors: true }
}));

devserver.use(webpack_hot_middleware(compiler));

const server = devserver.listen(application_configuration.webpack.devserver.port, (error) => {
  if (error) {
    console.error(error.stack || error)
    throw error
  }
  console.log('>>>>>>>>>>>>>>>> webpack-dev-server.js > Express server Connected: ', server.address());
});

server.on('listening', () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('>>>>>>>>>>>>>>>> webpack-dev-server.js > Express server Listening on: ', bind);
});
