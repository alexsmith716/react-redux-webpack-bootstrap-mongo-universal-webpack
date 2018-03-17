// Not using ES6 `import` syntax here
// to avoid `require()`ing `babel-register`
// which would parse the whole server-side bundle by default.

require('dotenv').config();

// https://github.com/babel/babel/issues/5731
require('babel-polyfill');
require('babel-register');

// use `bluebird` for Promises
require('../bluebird');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

require('./index');