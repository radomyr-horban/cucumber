Feature: Blog page

  Background:
    Given I am on home page
    # Given I navigate to the Website
  
  @SmokeTest
  # Scenario: Sorting functionality
  #   Given I am on the Blog page
  #   When I click on filterDropdown
  #   Then I should see filterDropdownList
  #   And I should see
  
  @SmokeTest
  Scenario: Pagination functionality
    When I click on the “Resources” link in the header
    Then The “Blog” link is displayed in the opened dropdown menu

    When I click on the “Blog” link in the opened dropdown menu
    Then 1. The "/resources" text is displayed in the URL
    And 2. The “Blog” heading is displayed on the page
    And 3. The “Browse our latest articles and updates” text is displayed on the page
    # Then 4. The “Filter by” dropdown element is displayed on the page.




    # When I scroll to the end or articles list.
    Then The pagination is displayed below the articles list







    When I click on the arrow-right icon 
    Then 1. The page URL is updated with the "/page/2" text
    And 2. The “Blog Page 2” heading is displayed on the page 
    And 3. The “Browse our latest articles and updates (2)” heading is displayed on the page 


