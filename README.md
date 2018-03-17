# react-routerV4-redux-webpack-bootstrap-mongo-universal-webpack

### Overview:
<p>Testing react-router v4, redux, webpack, bootstrap, mongo and more.</p>

<p>Replaced `universal-webpack` in place of `webpack-isomorphic-tools`. `universal-webpack` promises to generate 'client-side and server-side configuration for Webpack therefore enabling seamless client-side/server-side Webpack builds'. This repo follows on building of 'react-routerV4-redux-webpack-bootstrap-mongo'.</p>

#################################################################################################

1) npm-run-all ++++++++++++++++++++++++++++++++++++++++++++++++++++++

  Prepare:

    universal-webpack-settings.json                       (./webpack/)

  Development:

    Build:

      2) npm-run-all --parallel +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
          webpack-dev-server.js                           (./webpack/)
          webpack.config.server.development.babel.js      (./webpack/)

    Services:
    
      2) npm-run-all --parallel +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
          index.entry.js                                  (./api-server)
          index.entry.js                                  (./rendering-service)
          index.entry.js                                  (./proxy-server)

#################################################################################################

webpack.config.server.development.babel.js >>>> setting 