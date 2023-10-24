Feature: Release Notes page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Pagination functionality 
    When I click on the "Release Notes" link in the footer
    Then The "/release-notes" text is displayed in the URL
    And The "Release notes" heading is displayed on the "releaseNotesPage"

    When I click on the "next-page" button
    Then The "/page/2" text is displayed in the URL
    And Current page number is equal to "2"

    When I click on the "previous-page" button
    Then The "/page/1" text is displayed in the URL
    And Current page number is equal to "1"

  Scenario: Filter functionality  
    When I click on the "Release Notes" link in the footer
    Then The "/release-notes" text is displayed in the URL
    And The "Release notes" heading is displayed on the "releaseNotesPage"
    And The “Feature Request” link is displayed on the page
    And The “Follow us on Twitter” link is displayed on the page

    When I click on the “Filter by product” dropdown
    Then The list of “products” options is displayed in the dropdown list

    When I select the “API” option
    Then The "/tag/api" text is displayed in the URL
