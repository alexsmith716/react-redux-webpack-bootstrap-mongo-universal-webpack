// Not using ES6 `import` syntax here
// to avoid `require()`ing `babel-register`
// which would parse the whole server-side bundle by default.

require('dotenv').config();

// https://github.com/babel/babel/issues/5731
require('babel-polyfill');
require('babel-register');

//require('babel-register')({
//  plugins: [
//    'add-module-exports',
//    'transform-es2015-modules-commonjs',
//  ],
//});

// require('es6-promise').polyfill();

console.log('>>>>>>>>>>>>>>>> SERVER >>>>> index.entry.js <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
require('../bluebird');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
// global.__DEVELOPMENT__ = true;
// console.log('>>>>>>>>>>>>>>>> index.entry.js > global.__DEVELOPMENT__: ', global.__DEVELOPMENT__);

require('./index');