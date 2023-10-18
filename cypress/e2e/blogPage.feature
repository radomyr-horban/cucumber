Feature: Blog page functionality

  Scenario: Sort articles
    Given I am on blog page
    When I click sort button
    Then I should be see sorted articles
