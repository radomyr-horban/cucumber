Feature: Support Center page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Search functionality  
    When I click on the "Resources" link in the header
    Then The "Support Center" link is displayed in the opened dropdown menu 

    When I click on the "Support Center" link in the opened dropdown menu
    Then The "support" text is displayed in the URL
    And The "Support Center" heading is displayed on the "supportCenterPage"
    And The input with the “Search for articles” placeholder is displayed on the page

    When I click on the input field with the “Search for articles” placeholder
    Then The input field is focused

    When I type "api" in the search field
    Then The "api" is displayed in the search field
    
    When I hit "Enter"
    Then The "api" text is displayed in the URL
    And The searched word is displayed inside the input field
    And The searched word is displayed in the “Search results for:” text line
    And The searched word is displayed in the results items description

    When I click on the “cross” icon inside the input field
    Then The "api" text is NOT displayed in the URL
