Feature: Blog page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Sorting functionality
    When I click on the "Resources" link in the header
    Then The "Blog" link is displayed in the opened dropdown menu

    When I click on the "Blog" link in the opened dropdown menu
    Then The "/resources" text is displayed in the URL
    And The "Browse all articles, guides, and news" heading is displayed on the "blogPage"
    And The "Search" input is displayed on the page
    And The "View all articles" section heading is displayed on the "blogPage"
    And The pagination is displayed at the end of the page

    When Click on “Voice” button in the “Filter by product:” section
    Then The "topic/voice" text is displayed in the URL

    When Click on “Partnerships” button in the “Filter by content type:” section
    Then The "category=partnerships" text is displayed in the URL

  Scenario: Pagination functionality
    When I click on the "Resources" link in the header
    Then The "Blog" link is displayed in the opened dropdown menu

    When I click on the "Blog" link in the opened dropdown menu
    Then The "/resources" text is displayed in the URL
    And The "Browse all articles, guides, and news" heading is displayed on the "blogPage"
    And The "Search" input is displayed on the page
    And The "View all articles" section heading is displayed on the "blogPage"
    And The pagination is displayed at the end of the page
 
    When I click on the "nextPageBtn" 
    Then The "/page/2" text is displayed in the URL
    And The "View all articles (2)" section heading is displayed on the "blogPage"