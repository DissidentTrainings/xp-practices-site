var showPractices = function () {
  this.World = require('../support/world.js').World;
  this.Given(/^I surf to "([^"]*)"$/, function (page, callback) {
    var browser = this.browser;
    this.browser.visit('http://localhost:8080/' + page, callback);

    // Write code here that turns the phrase above into concrete actions
  });
};

module.exports = showPractices;
