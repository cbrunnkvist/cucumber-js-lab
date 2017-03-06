'use strict'
const FRAMES_PER_GAME = 10

module.exports = class BowlingGame {
  constructor() {
    this._rolls = []
    this._currentRoll = 0
  }

  roll(pins) {
    this._rolls[this._currentRoll++] = pins
  }

  score() {
    const isSpare = () => this._rolls[frameIndex] + this._rolls[frameIndex+1] === 10
    const isStrike = () => this._rolls[frameIndex] === 10
    const tenPlusSumOfNextRoll = () => 10 + this._rolls[frameIndex+2]
    const tenPlusSumOfNextTwoRolls = () => 10 + this._rolls[frameIndex+1] + this._rolls[frameIndex+2]
    const sumOfRollsInFrame = () => this._rolls[frameIndex] + this._rolls[frameIndex+1]

    let score = 0
    let frameIndex = 0

    for (let frame = 0; frame < FRAMES_PER_GAME; frame++) {
      if (isStrike()) {
        score += tenPlusSumOfNextTwoRolls()
        frameIndex += 1
      } else if (isSpare()) {
        score += tenPlusSumOfNextRoll()
        frameIndex += 2
      } else {
        score += sumOfRollsInFrame()
        frameIndex += 2
      }
    }

    return score
  }
}
