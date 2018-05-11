# react-routerV4-redux-webpack-bootstrap-mongo-universal-webpack

### Overview:
Testing react-router v4, redux, webpack, bootstrap, mongo and more.

Replaced `universal-webpack` in place of `webpack-isomorphic-tools`. `universal-webpack` promises to generate 'client-side and server-side configuration for Webpack therefore enabling seamless client-side/server-side Webpack builds'. This repo follows on building of 'react-routerV4-redux-webpack-bootstrap-mongo'.

###  "extract-text-webpack-plugin": "4.0.0-beta.0",

`universal-webpack`:

  * library generates client-side and server-side configuration for Webpack
  * enables seamless client-side/server-side Webpack builds
  * The server() configuration takes the client-side Webpack configuration and tunes it a bit for server-side usage

"client-side":

  * 



### Using Bootstrap-Loader ('extract-text-webpack-plugin' NOT 'mini-css-extract-plugin') so now can enable HMR.

### Have to go over (at least most common) Babel plugins !


### nodemon.json config file:

nodemon will restart node applications when a `.js` JavaScript file changes
nodemon supports local and global configuration files
A config file can take any of the command line arguments

Order of Override (IMPORTANT):

   1) command line arguments (package.json)
   2) local config
   3) global config

"ignore": [".git","node_modules/"]: "ignore" changes to specific files, directories or file patterns
"env": {"NODE_ENV": "development"}:  activate in "env" "development"

config options:        https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md
nodemon --help config: https://github.com/remy/nodemon/blob/master/doc/cli/config.txt


#############################################################################


babel-plugin-css-modules-transform:

Extract css class names from required css module files, so we can render it on server. 

This Babel plugin finds all requires for css module files and replace them with a hash
  where keys are class names and values are generated css class names.

This plugin is based on the fantastic css-modules-require-hook.

When using this plugin with a preprocessor ('node-sass'), you'll need to configure it.

Do not run this plugin as part of webpack frontend configuration. 
This plugin is intended only for backend compilation.


#############################################################################

#### Handling CSS Modules (sass):

https://github.com/css-modules/css-modules
https://webpack.js.org/guides/
https://webpack.js.org/guides/code-splitting/
https://webpack.js.org/configuration/entry-context/
https://webpack.js.org/guides/asset-management/#loading-css
https://github.com/webpack-contrib/css-loader
https://github.com/css-modules/postcss-modules



##### App.scss
##### (applied to css properties on global css classes)
##### (switches to global scope in local scss file)
##### (declares the stuff in parenthesis in the global scope >>> (.form-control-feedback))

`:global(.form-control-feedback) {
  text-align: inherit;
}`

##### Used:
`<span className="glyphicon glyphicon-remove form-control-feedback" />`

##### Bootstrap > forms.scss
##### Feedback icon (requires .glyphicon classes)

`.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2; // Ensure icon is above input groups
  display: block;
  width: $input-height-base;
  height: $input-height-base;
  line-height: $input-height-base;
  text-align: center;
  pointer-events: none;
}`

#############################################################################

`{
  "javascript":{
    "main":"http://localhost:3001/assets/main-6de1c5c26518678068a5.js",
    "vendor":"http://localhost:3001/assets/vendor-6de1c5c26518678068a5.js",
    "vendors-main":"http://localhost:3001/assets/vendors-main-ac0571d749397113c493.js",
    "vendors-main-vendor":"http://localhost:3001/assets/vendors-main-vendor-f963aa88f29c8c90df8a.js",
    "vendors-vendor":"http://localhost:3001/assets/vendors-vendor-33fe37223f09244bae08.js"
  },
  "styles":{
    "main":"http://localhost:3001/assets/main-0857154ec013824ba62f.css"
  }
}`

#############################################################################

`:root { font-size: 16px; }`

* 1px = .0625rem
* 16px = 1rem
* 54px = 3.375rem
* 50px = 3.125rem

#############################################################################

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

#############################################################################
