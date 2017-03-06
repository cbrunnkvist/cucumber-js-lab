'use strict'

module.exports = class BowlingGame {
  constructor() {
    this._score = 0
    this._rolls = []
    this._currentRoll = 0
  }

  roll(pins) {
    this._rolls[this._currentRoll++] = pins
  }

  score() {
    let frameIndex = 0

    for (let frame = 0; frame < 10; frame++) {
      if (this._isStrike(frameIndex)) {
        this._score += this._tenPlusSumOfNextTwoRolls(frameIndex)
        frameIndex += 1
      } else if (this._isSpare(frameIndex)) {
        this._score += this._tenPlusSumOfNextRoll(frameIndex)
        frameIndex += 2
      } else {
        this._score += this._rolls[frameIndex] + this._rolls[frameIndex+1]
        frameIndex += 2
      }
    }
    return this._score
  }

  _isSpare(frameIndex) {
    return (this._rolls[frameIndex] + this._rolls[frameIndex+1]) === 10
  }

  _isStrike(frameIndex) {
    return (this._rolls[frameIndex]) === 10
  }

  _tenPlusSumOfNextTwoRolls(frameIndex) {
    return 10 + this._rolls[frameIndex+1] + this._rolls[frameIndex+2]
  }

  _tenPlusSumOfNextRoll(frameIndex) {
    return 10 + this._rolls[frameIndex+2]
  }
}
