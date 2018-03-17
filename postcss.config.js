var autoprefixer = require('autoprefixer')
var cssCustomProperties = require('postcss-custom-properties')
var postcssCalc = require('postcss-calc')

module.exports =
{
  plugins:
  [
    autoprefixer(),
    cssCustomProperties(),
    postcssCalc()
  ]
}
/*
module.exports = {
  use: [
    'postcss-import',
    'postcss-url',
    'postcss-cssnext',
    'postcss-browser-reporter',
    'postcss-reporter',
  ]
};
*/