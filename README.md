# react-routerV4-redux-webpack-bootstrap-mongo-universal-webpack

### Overview:
<p>Testing react-router v4, redux, webpack, bootstrap, mongo and more.</p>

<p>Replaced `universal-webpack` in place of `webpack-isomorphic-tools`. `universal-webpack` promises to generate 'client-side and server-side configuration for Webpack therefore enabling seamless client-side/server-side Webpack builds'. This repo follows on building of 'react-routerV4-redux-webpack-bootstrap-mongo'.</p>

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

`Built at: 4/6/2018 2:37:09 PM
                                      Asset      Size               Chunks             Chunk Names
       c29770d03d2e95e3ea5899d57c6cfeab.jpg    90 KiB                       [emitted]  
       93f5dd1f70faac3b2ef5d85434516e0a.jpg  37.1 KiB                       [emitted]  
       912ec66d7572ff821749319396470bde.svg   434 KiB                       [emitted]  
                    fontawesome-webfont.ttf   162 KiB                       [emitted]  
                  fontawesome-webfont.woff2  75.4 KiB                       [emitted]  
                   fontawesome-webfont.woff  95.7 KiB                       [emitted]  
       f21bd753d4fb320a83427aa7374ca2e4.jpg  12.7 KiB                       [emitted]  
                    fontawesome-webfont.eot   162 KiB                       [emitted]  
              main-dab74fbeb173ef450b31.css   523 KiB                 main  [emitted]  main
               main-359fdf0b2b53b596c076.js   239 KiB                 main  [emitted]  main
             vendor-359fdf0b2b53b596c076.js  13.2 KiB               vendor  [emitted]  vendor
       vendors-main-ac0571d749397113c493.js  4.15 MiB         vendors-main  [emitted]  vendors-main
vendors-main-vendor-f963aa88f29c8c90df8a.js  1.87 MiB  vendors-main-vendor  [emitted]  vendors-main-vendor
     vendors-vendor-33fe37223f09244bae08.js  1.63 MiB       vendors-vendor  [emitted]  vendors-vendor
Entrypoint main = vendors-main-vendor-f963aa88f29c8c90df8a.js vendors-main-ac0571d749397113c493.js main-dab74fbeb173ef450b31.css main-359fdf0b2b53b596c076.js
Entrypoint vendor = vendors-main-vendor-f963aa88f29c8c90df8a.js vendors-vendor-33fe37223f09244bae08.js vendor-359fdf0b2b53b596c076.js
[./client/assets/scss/bootstrap/theme.scss] 39 bytes {main} [built]
[./client/index.entry.js] 282 bytes {main} [built]
[./node_modules/babel-polyfill/lib/index.js] 833 bytes {vendors-main} [built]
[./node_modules/bootstrap/dist/js/bootstrap.js] 112 KiB {vendors-vendor} [built]
[./node_modules/jquery/dist/jquery.js] 265 KiB {vendors-vendor} [built]
[./node_modules/popper.js/dist/esm/popper.js] 82 KiB {vendors-vendor} [built]
[./node_modules/react-dom/index.js] 1.33 KiB {vendors-main-vendor} [built]
[./node_modules/react-redux/es/index.js] 230 bytes {vendors-main-vendor} [built]
[./node_modules/react-router-dom/es/index.js] 925 bytes {vendors-vendor} [built]
[./node_modules/react-router/es/index.js] 637 bytes {vendors-vendor} [built]
[./node_modules/react/index.js] 190 bytes {vendors-main-vendor} [built]
[./node_modules/redux/es/index.js] 1.05 KiB {vendors-main-vendor} [built]
[./node_modules/tether/dist/js/tether.js] 55.1 KiB {vendors-vendor} [built]
   [0] multi ./client/assets/scss/bootstrap/theme.scss babel-polyfill ./client/index.entry.js 52 bytes {main} [built]
   [5] multi react react-dom react-redux react-router react-router-dom redux tether jquery popper.js bootstrap 136 bytes {vendor} [built]
    + 1202 hidden modules
Child mini-css-extract-plugin node_modules/css-loader/index.js??ref--5-1!node_modules/resolve-url-loader/index.js!node_modules/sass-loader/lib/loader.js!client/assets/scss/bootstrap/theme.scss:
                                   Asset      Size  Chunks             Chunk Names
                 fontawesome-webfont.eot   162 KiB          [emitted]  
    912ec66d7572ff821749319396470bde.svg   434 KiB          [emitted]  
                 fontawesome-webfont.ttf   162 KiB          [emitted]  
               fontawesome-webfont.woff2  75.4 KiB          [emitted]  
                fontawesome-webfont.woff  95.7 KiB          [emitted]  
    Entrypoint mini-css-extract-plugin = *
    [./node_modules/css-loader/index.js??ref--5-1!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./client/assets/scss/bootstrap/theme.scss] ./node_modules/css-loader??ref--5-1!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js!./client/assets/scss/bootstrap/theme.scss 199 KiB {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/lib/css-base.js] 2.21 KiB {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/lib/url/escape.js] 448 bytes {mini-css-extract-plugin} [built]
    [./node_modules/font-awesome/fonts/fontawesome-webfont.eot] 69 bytes {mini-css-extract-plugin} [built]
    [./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0] 69 bytes {mini-css-extract-plugin} [built]
    [./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0] 82 bytes {mini-css-extract-plugin} [built]
    [./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0] 69 bytes {mini-css-extract-plugin} [built]
    [./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0] 71 bytes {mini-css-extract-plugin} [built]
    [./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0] 70 bytes {mini-css-extract-plugin} [built]
Child mini-css-extract-plugin node_modules/css-loader/index.js??ref--6-1!node_modules/postcss-loader/lib/index.js!node_modules/sass-loader/lib/loader.js!node_modules/sass-resources-loader/lib/loader.js??ref--6-4!client/components/GuestHomepage/GuestHomepage.scss:
                                   Asset      Size  Chunks             Chunk Names
    93f5dd1f70faac3b2ef5d85434516e0a.jpg  37.1 KiB          [emitted]  
    Entrypoint mini-css-extract-plugin = *
    [./client/components/GuestHomepage/img/splashImage-2048x719.jpg] 82 bytes {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/index.js??ref--6-1!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./client/components/GuestHomepage/GuestHomepage.scss] ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./client/components/GuestHomepage/GuestHomepage.scss 2.19 KiB {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/lib/css-base.js] 2.21 KiB {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/lib/url/escape.js] 448 bytes {mini-css-extract-plugin} [built]
Child mini-css-extract-plugin node_modules/css-loader/index.js??ref--6-1!node_modules/postcss-loader/lib/index.js!node_modules/sass-loader/lib/loader.js!node_modules/sass-resources-loader/lib/loader.js??ref--6-4!client/containers/App/styles/AppScss.scss:
    Entrypoint mini-css-extract-plugin = *
    [./node_modules/css-loader/index.js??ref--6-1!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./client/containers/App/styles/AppScss.scss] ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./client/containers/App/styles/AppScss.scss 785 bytes {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/lib/css-base.js] 2.21 KiB {mini-css-extract-plugin} [built]
Child mini-css-extract-plugin node_modules/css-loader/index.js??ref--7-1!node_modules/postcss-loader/lib/index.js!client/containers/App/styles/AppCss.css:
    Entrypoint mini-css-extract-plugin = *
    [./node_modules/css-loader/index.js??ref--7-1!./node_modules/postcss-loader/lib/index.js!./client/containers/App/styles/AppCss.css] ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/lib!./client/containers/App/styles/AppCss.css 487 bytes {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/lib/css-base.js] 2.21 KiB {mini-css-extract-plugin} [built]`

#############################################################################

`:root {
  font-size: 16px;
}
1px = .0625rem
16px = 1rem
54px = 3.375rem
50px = 3.125rem`

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
