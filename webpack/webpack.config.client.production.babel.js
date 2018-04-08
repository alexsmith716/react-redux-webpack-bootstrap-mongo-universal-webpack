import path from 'path'
import webpack from 'webpack'

import { clientConfiguration } from 'universal-webpack'
import settings from './universal-webpack-settings';
import base_configuration from './webpack.config';

// With `development: false` all CSS will be extracted into a file
// named '[name]-[contenthash].css' using `mini-css-extract-plugin`.
const configuration = clientConfiguration(base_configuration, settings, { development: false, useMiniCssExtractPlugin: true });

configuration.devtool = 'source-map';

configuration.plugins.push(

  new webpack.DefinePlugin({
    // Just so that it doesn't throw "_development_tools_ is not defined"
    REDUX_DEVTOOLS: false
  }),

);

export default configuration;
