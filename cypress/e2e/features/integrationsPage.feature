Feature: Integrations page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: Filter functionality  
    When I click on the "Why Telnyx" link in the header
    Then The "Integrations" link is displayed in the opened dropdown menu 

    When I click on the "Integrations" link in the opened dropdown menu
    Then The "marketplace.telnyx.com/" text is displayed in the URL

    And The "Welcome to the Telnyx Integration Marketplace" heading is displayed on the "integrationsPage"

    And The following categories are displayed under the “Integrations” filter list on the left side
    # use table
    | Featured  |
    | Popular   |
    | Requested |

    And The following categories are displayed under the “Categories” filter list on the left side 
    # use table
    | All               |
    | Automation        |
    | Calling           |
    | Collaboration     |
    | CRM               |
    | Ecommerce         |
    | Forms             |
    | Messaging         |
    | Sales & Marketing |
    | Scheduling        |
    | Storage           |
    | Support           |
    | Systems Monitoring|
    | Zapier            |