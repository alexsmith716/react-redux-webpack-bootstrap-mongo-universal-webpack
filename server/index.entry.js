require('../server.babel'); // babel registration (runtime transpilation for node)
require('dotenv').config();

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

require('./index');
