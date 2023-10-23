Feature: Solutions page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Filter functionality  
    When I click on the "Solutions" link in the header
    Then The "/solutions" text is displayed in the URL
    And The "Solutions for scaling your business" heading is displayed on the "solutionsPage"
    And The description text is displayed under the heading on the "solutionsPage"
    And The “See industries” and “See use cases” links are displayed on the page

    When I click on the “See use cases” link
    Then The “USE CASES” section title is visible on the page
    Then The "#use-cases" text is displayed in the URL
    
    #!
    Then The "Maintain control with custom, feature-rich tooling." section heading is displayed on the "solutionsPage"
    Then The “Filter by department” dropdown is displayed on the page

    When I click on the “Filter by department” dropdown
    Then The names of all departments are displayed in the dropdown list

    
 
    

  
 