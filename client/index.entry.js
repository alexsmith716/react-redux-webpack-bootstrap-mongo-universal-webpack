// require('../bluebird');

if (module.hot) {
  console.log('>>>>>>>>>>>>>>>> CLIENT >>>>> index.entry.js > MODULE.HOT! <<<<<<<<<<<<<<<<<');
} else {
  console.log('>>>>>>>>>>>>>>>> CLIENT >>>>> index.entry.js > NO MODULE.HOT! <<<<<<<<<<<<<<');
}

require('./index');
