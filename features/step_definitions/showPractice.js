var showPractices = function() {
  this.World = require('../support/world.js').World;
  this.Given(/^I surf to '\/practices\/pairprogramming\.html'$/, function (callback) {
  this.browser.get('http://dissident-trainings.de/index.html', callback);
});

this.Then(/^I should see a level (\d+) heading 'Pairprogramming'$/, function (arg1, callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Then(/^a paragraph of text$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Then(/^a unordered list of links to external websites$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.When(/^I should see a list of allies$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Then(/^the list of allies should contain 'Test Driven Development'$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});
};

module.exports = showPractices;
