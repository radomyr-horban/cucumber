Feature: Board functionality

  Scenario: Create a board
    Given I am on blog page
    When I type and submit in the board name
    Then I should be redirected to the board detail
