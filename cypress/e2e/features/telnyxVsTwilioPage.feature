Feature: Telnyx vs Twilio page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: The “Savings” calculator functionality 
    When I click on the "Telnyx vs. Twilio" link in the footer
    Then The "/the-better-twilio-alternative" text is displayed in the URL
    And The "The top Twilio alternative" heading is displayed on the "telnyxVsTwilioPage"
    And The “Talk to an Expert” button is displayed on the "telnyxVsTwilioPage"

    #! Calculator 
    Then The "How much will you save switching from Twilio?" section heading is displayed on the "telnyxVsTwilioPage"
    And The “SAVINGS CALCULATOR” quiz is displayed on the page
    And The current question number is equal to "1"
   
    When I select the first option in the "numberTypeOption" question on the "telnyxVsTwilioPage"
    And The "nextBtn" button is displayed in the question box on the "telnyxVsTwilioPage"

    When I click on the "nextBtn" button on the "telnyxVsTwilioPage"
    Then The current question number is increased by one on the "telnyxVsTwilioPage"
    And The "backBtn" button is displayed in the question box on the "telnyxVsTwilioPage"

    When I select the first option in the "sendMessagesOption" question on the "telnyxVsTwilioPage" 
    And The "nextBtn" button is displayed in the question box on the "telnyxVsTwilioPage"
    And I click on the "nextBtn" button on the "telnyxVsTwilioPage"
    Then The current question number is increased by one on the "telnyxVsTwilioPage"
    And The "backBtn" button is displayed in the question box on the "telnyxVsTwilioPage"

    When I select the first option in the "receiveMessagesOption" question on the "telnyxVsTwilioPage" 
    And The "calculateSavingsBtn" button is displayed in the question box on the "telnyxVsTwilioPage"
    When I click on the "calculateSavingsBtn" button on the "telnyxVsTwilioPage"

    Then The current question number is increased by one on the "telnyxVsTwilioPage"
    And The "Compare costs per month" quiz result heading is displayed on the page
    And The “TWILIO” and “TELNYX” words are displayed on the page
    And The “SAVINGS PER MONTH” text is displayed on the page
    And The "talkToExpertBtn" button is displayed in the question box on the "telnyxVsTwilioPage"