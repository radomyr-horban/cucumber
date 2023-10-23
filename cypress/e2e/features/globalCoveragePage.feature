Feature: Global Coverage page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Submitting the “Download full coverage” form with valid data
    When I click on the "Why Telnyx" link in the header
    Then The "Global coverage" link is displayed in the opened dropdown menu

    When I click on the "Global coverage" link in the opened dropdown menu
    Then The "/global-coverage" text is displayed in the URL
    And The "Global coverage" heading is displayed on the "globalCoveragePage"

    And The description text is displayed under the heading on the "globalCoveragePage"
    And The “View full coverage” link is displayed below the button
    And The “Download full coverage” form is displayed on the page

    When I fill in the form with valid data on the "globalCoveragePage"
    Then The "/thank-you?formId" text is displayed in the URL
    And The "Thank you" heading is displayed on the "globalCoveragePage"

  Scenario: Submitting the “Download full coverage” form with invalid data
    When I click on the "Why Telnyx" link in the header
    Then The "Global coverage" link is displayed in the opened dropdown menu

    When I click on the "Global coverage" link in the opened dropdown menu
    Then The "/global-coverage" text is displayed in the URL
    And The "Global coverage" heading is displayed on the "globalCoveragePage"

    And The description text is displayed under the heading on the "globalCoveragePage"
    And The “View full coverage” link is displayed below the button
    And The “Download full coverage” form is displayed on the page

    # !
    When I click on the “Submit” button
    Then An error message is displayed under the "firstNameInput" input field on the "globalCoveragePage"
   
    When I set the "firstNameInput" input field with "Tom"
    And I click on the “Submit” button
    Then An error message is displayed under the "lastNameInput" input field on the "globalCoveragePage"

    When I set the "lastNameInput" input field with "Holland"
    And I click on the “Submit” button
    Then An error message is displayed under the "emailInput" input field on the "globalCoveragePage"

    When I set the "emailInput" input field with "tom.holland"
    And I click on the “Submit” button
    Then An error message is displayed under the "emailInput" input field on the "globalCoveragePage"

    When I set the "emailInput" input field with "tom@holland"
    And I click on the “Submit” button
    Then An error message is displayed under the "emailInput" input field on the "globalCoveragePage"
 