var showPractices = function () {
  this.World = require('../support/world.js').World;
  this.Given(/^I surf to "([^"]*)"$/, function (arg1, callback) {
    var browser = this.browser;
    browser.get('http://localhost:8080' + arg1).title();
    callback();
    // Write code here that turns the phrase above into concrete actions
  });
};

module.exports = showPractices;
