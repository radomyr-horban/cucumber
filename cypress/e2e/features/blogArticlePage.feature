Feature: Blog article page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Blog article page 
    When I click on the "Resources" link in the header
    Then The "Blog" link is displayed in the opened dropdown menu

    When I click on the "Blog" link in the opened dropdown menu
    Then The "/resources" text is displayed in the URL
    And The "Browse all articles, guides, and news" heading is displayed on the "blogPage"
    And The "Search" input is displayed on the page
    And The "View all articles" section heading is displayed on the "blogPage"
    And The pagination is displayed at the end of the page
    And The article category, title and author are displayed in the article card

    When I click on the first article card
    Then The “Back to blog” link is displayed on the top left corner of the page
    And The category and last update date is displayed above the article title
    And The article title is displayed on the page
    And The article author name is displayed below the article title
    And The “SHARE ON SOCIAL” text is displayed under the article