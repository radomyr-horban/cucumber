Feature: IoT Sim Cards page

  Background:
    Given I am on home page
  
  @SmokeTest
  Scenario: The “Savings” calculator functionality 
    When I click on the "Products" link in the header
    Then The "IoT SIM Card" link is displayed in the opened dropdown menu 

    When I click on the "IoT SIM Card" link in the opened dropdown menu
    Then The "products/iot-sim-card" text is displayed in the URL
    And The "IoT SIM Cards" heading is displayed on the "IoTSimCardsPage"
    And The “Order A Sim Card” button is displayed on the page
    And The “View Global Coverage” button is displayed on the page
    #! Calculator 
    And The "Starting at $0.0125 per MB" section heading is displayed on the "IoTSimCardsPage"
    And The quiz is displayed on the page
    And The current question number is equal to "1"
   
    #! Quiz    
    When I answer the first question
    Then The "nextBtn" button is displayed in the question box on the "IoTSimCardsPage"
    When I click on the "nextBtn" button on the "IoTSimCardsPage"
    
    #! 2 
    Then The current question number is increased by one on the "IoTSimCardsPage"
    And The "backBtn" button is displayed in the question box on the "IoTSimCardsPage"
    When I answer the second question
    Then The "nextBtn" button is displayed in the question box on the "IoTSimCardsPage"
    When I click on the "nextBtn" button on the "IoTSimCardsPage"
    
    #! 3
    Then The current question number is increased by one on the "IoTSimCardsPage"
    And The "backBtn" button is displayed in the question box on the "IoTSimCardsPage"
    When I answer the third question
    Then The "nextBtn" button is displayed in the question box on the "IoTSimCardsPage"
    When I click on the "nextBtn" button on the "IoTSimCardsPage"
    
    #!4
    Then The current question number is increased by one on the "IoTSimCardsPage"
    And The "backBtn" button is displayed in the question box on the "IoTSimCardsPage"
    When I answer the forth question
    Then The "nextBtn" button is displayed in the question box on the "IoTSimCardsPage"
    When I click on the "nextBtn" button on the "IoTSimCardsPage"

    #!5 
    Then The current question number is increased by one on the "IoTSimCardsPage"
    And The “MONTHLY ESTIMATED COSTS” text is displayed in the last quiz slide
    And The "quizSignUpBtn" button is displayed in the question box on the "IoTSimCardsPage"
    And The "quizResultTalkToExpertBtn" button is displayed in the question box on the "IoTSimCardsPage"