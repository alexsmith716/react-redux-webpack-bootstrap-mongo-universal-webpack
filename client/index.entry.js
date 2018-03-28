
console.log('>>>>>>>>>>>>>>>> CLIENT >>>>> index.entry.js <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
require('../bluebird');


if (module.hot) {
  console.log('>>>>>>>>>>>>>>>> CLIENT >>>>> index.entry.js > HOT! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
} else {
  console.log('>>>>>>>>>>>>>>>> CLIENT >>>>> index.entry.js > NO HOT! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
}

require('./index');
