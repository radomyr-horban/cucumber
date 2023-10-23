Feature: Microsoft Teams page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Submitting the form with valid data 
    When I click on the "Products" link in the header
    Then The "Microsoft Teams" link is displayed in the opened dropdown menu

    When I click on the "Microsoft Teams" link in the opened dropdown menu
    Then The "/products/enterprise-integrations-ms-teams" text is displayed in the URL
    And The "Microsoft Teams" heading is displayed on the "microsoftTeamsPage"
    And The description text is displayed under the heading
    And The “Talk to an expert” button is displayed on the page
    And The “Get started” link is displayed below the button

    And The "Interested in learning more about Operator Connect?" section heading is displayed on the "microsoftTeamsPage"
    And The description text is displayed under the heading
    And The “Interested in Operator Connect?” form is displayed on the page

    When Fill in the form with valid data
    Then The "Thank you" heading is displayed on the "thankYouPage"
    And The “We`ve received your request and one of our experts will be in touch shortly.” message is displayed on the page 
    And The "/thank-you?formId" text is displayed in the URL

  Scenario: Submitting the form with invalid data 
    When I click on the "Products" link in the header
    Then The "Microsoft Teams" link is displayed in the opened dropdown menu

    When I click on the "Microsoft Teams" link in the opened dropdown menu
    Then The "/products/enterprise-integrations-ms-teams" text is displayed in the URL
    And The "Microsoft Teams" heading is displayed on the "microsoftTeamsPage"
    And The description text is displayed under the heading
    And The “Talk to an expert” button is displayed on the page
    And The “Get started” link is displayed below the button

    And The "Interested in learning more about Operator Connect?" section heading is displayed on the "microsoftTeamsPage"
    And The description text is displayed under the heading
    And The “Interested in Operator Connect?” form is displayed on the page

    When I click on the “APPLY NOW” button
    Then An error message is displayed under the "firstNameInput" input field

    When I set the "firstNameInput" input field with "Tom"
    When I click on the “APPLY NOW” button
    Then An error message is displayed under the "lastNameInput" input field
   
    When I set the "lastNameInput" input field with "Holland"
    When I click on the “APPLY NOW” button
    Then An error message is displayed under the "emailInput" input field
    
    When I set the "emailInput" input field with "tom.holland"
    And I select the operator input field
    When I click on the “APPLY NOW” button
    Then An error message is displayed under the "emailInput" input field

    When I set the "companyWebsiteInput" input field with "tom-holland"
    When I set the "emailInput" input field with "tom@holland"
    And I select the operator input field
    When I click on the “APPLY NOW” button
    Then An error message is displayed under the "emailInput" input field

   

  
   

