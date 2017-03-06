const {defineSupportCode} = require('cucumber')

defineSupportCode(function(context) {
  Object.assign(this, context) /* global Given, When, Then */

  // Given('the following products exist:', function (table) {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });
})
