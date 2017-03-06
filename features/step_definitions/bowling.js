const {defineSupportCode} = require('cucumber')
const assert = require('assert')

defineSupportCode(function(context) {
  Object.assign(this, context) /* global Given, When, Then */

  const BowlingGame = require('../../bowling_game.js')

  Given('that a new game has started', function () {
    this.game = new BowlingGame()
  })

  When('(the player )(then )knocks down {numberOfPins:int} pin(s) {times:int} time(s)', function (numberOfPins, times) {
    while (times-- > 0) {
      this.game.roll(numberOfPins)
    }
  })

  When('the player plays a gutter game', function () {
    for (let i = 0; i < 20; i++) {
      this.game.roll(0)
    }
  })

  When('the player rolls a spare', function () {
    this.game.roll(5)
    this.game.roll(5)
  })

  When('the player rolls a strike', function () {
    this.game.roll(10)
  })

 Then('the score should be {finalScore:int}', function (finalScore) {
   assert.equal(this.game.score(), finalScore)
 })

})
