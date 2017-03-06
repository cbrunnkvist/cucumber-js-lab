Feature: Ten pin bowling score calculator
  As a developer implementing a game
  I want to record the rolls and number of pins knocked down
  So that I can get the final score

  Background:
    Given that a new game has started

  Scenario: Gutter game
    When the player plays a gutter game
    Then the score should be 0

  Scenario: A game of 1 pin rolls
    When the player knocks down 1 pin 20 times
    Then the score should be 20

  Scenario: A spare roll game
    When the player rolls a spare
    And the player knocks down 3 pins 1 time
    And the player knocks down 0 pins 17 times
    Then the score should be 16

  Scenario: A strike game
    When the player rolls a strike
    And the player knocks down 4 pins 2 times
    And the player knocks down 0 pins 16 times
    Then the score should be 26

  Scenario: A perfect game
    When the player knocks down 10 pins 10 times
    And the player knocks down 10 pins 2 times
    Then the score should be 300
