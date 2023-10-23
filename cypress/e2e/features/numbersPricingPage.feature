Feature: Numbers Pricing page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Filter functionality  
    When I click on the "Pricing" link in the header
    Then The "Global Numbers" link is displayed in the opened dropdown menu 

    When I click on the "Global Numbers" link in the opened dropdown menu
    Then The "/pricing/numbers" text is displayed in the URL

    And The "Numbers pricing" heading is displayed on the "numbersPricingPage"
    And The “Pay as you go” and “Volume-based pricing” boxes are displayed on the page

    When I click on the “Pay as you go” box
    Then The "#pay-as-you-go" text is displayed in the URL
    And  The dropdown lists for choosing a country and currency are displayed on the page
    And The default values of dropdown lists are “United States” and “USD”
    And The “Number pricing” table caption is displayed below the section with dropdown lists
    And The `$` sign is displayed in the “Number pricing” section

    When I click on the “Country” dropdown list
    Then The list of “countries” options is displayed in the dropdown list

    When I select the “Canada” option
    Then The "/ca" text is displayed in the URL
    And The "Numbers pricing for Canada" heading is displayed on the "numbersPricingPage"
    And The selected value of “Country” dropdown list is “Canada”

    When I click on the “Currency” dropdown list
    Then The list of “currencies” options is displayed in the dropdown list

    When I select the “EUR” option
    Then The selected value of “Currency” dropdown list is “EUR”
    And The `€` sign is displayed in the “Number pricing” section




    

    
 
    

  
 