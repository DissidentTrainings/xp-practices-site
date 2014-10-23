var wd = require('wd');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var browser = wd.promiseChainRemote();


// log status output from web driver
browser.on('status', function (info) {
  // console.log('\x1b[36m%s\x1b[0m', info);
});

// log commands from web driver
browser.on('command', function (meth, path, data) {
  // console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
});

var World = function World(callback) {
  this.browser = browser;

  this.browser
    .init({
      browserName: 'chrome'
    }, callback);
};
exports.World = World;
