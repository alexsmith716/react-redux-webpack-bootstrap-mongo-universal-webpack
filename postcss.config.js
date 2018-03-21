// var autoprefixer = require('autoprefixer')
// var cssCustomProperties = require('postcss-custom-properties')
// var postcssCalc = require('postcss-calc')
// 
// module.exports = {
//   plugins: [
//     autoprefixer(),
//     cssCustomProperties(),
//     postcssCalc()
//   ]
// }

module.exports = {
  use: [
    'autoprefixer',
    'postcss-import',
    'postcss-url',
    'postcss-cssnext',
    'postcss-browser-reporter',
    'postcss-reporter',
  ]
};
