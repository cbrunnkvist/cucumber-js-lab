@ignored
Feature: Refund item
  Sales assistants should be able to refund customers' purchases.
  This is required by the law, and is also essential in order to
  keep customers happy.

  Background:
    Given the following products exist:
    | ITEM    | COST      |
    | oven    | 16000 THB |
    | mixer   | 2750 THB  |
    | SangSom | 200 THB   |

  Scenario: Rejection of strange stuff
    When Jeff returns an unknown item
    Then he should be refunded "0 THB"
    And he should be told that the item is not recognized

  Scenario Outline: Jeff returns a faulty <ITEM>
    Given Jeff has bought <ITEM>
    And He has <PROOF_OF_PURCHASE>
    When He returns the <ITEM>
    Then Jeff should be refunded <REFUND>
    Examples:
      | ITEM    | PROOF_OF_PURCHASE | REFUND    |
      | oven    | store receipt     | 16000 THB |
      | mixer   | mailorder receipt | 2500 THB  |
      | SangSom | no receipt        | 0 THB     |
