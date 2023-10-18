class telnyxVsTwilioPage {
  elements = {
    heading: () => cy.get('main h1'),
    talkToExpertBtn: () =>
      cy.get('a[href="/contact-us"]').contains('Talk to an expert').first(),

    //! Calculator Section
    savingsCalculatorHeading: () =>
      cy.get('section[id="savings-calculator"] h2'),

    savingsCalculatorQuiz: () =>
      cy.get('section[id="savings-calculator"] > div > div').last(),

    currentQuestionNumber: () =>
      cy.get('div[data-value]').invoke('attr', 'data-value'),

    //! Quiz
    numberTypeOption: () => cy.get('input[id="number-type-0"]'),
    sendMessagesOption: () => cy.get('input[id="send-messages-0"]'),
    receiveMessagesOption: () => cy.get('input[id="receive-messages-0"]'),

    nextBtn: () => cy.get('button').contains('Next'),
    backBtn: () => cy.get('button').contains('Back'),
    calculateSavingsBtn: () => cy.get('button').contains('Calculate savings'),

    //! Last slide
    quizResultHeading: () => cy.get('section[id="savings-calculator"] h3'),
    quizResultTwilio: () =>
      cy.get('section[id="savings-calculator"] strong').contains('Twilio'),
    quizResultTELNYX: () =>
      cy.get('section[id="savings-calculator"] strong').contains('Telnyx'),
    quizResultSavingsPerMonth: () =>
      cy
        .get('section[id="savings-calculator"] strong')
        .contains('SAVINGS per month'),

    quizResultTalkToExpertBtn: () =>
      cy.get('section[id="savings-calculator"] a[href="/contact-us"]'),
  }

  //! clickers
  clickOnNumberTypeOption() {
    this.elements.numberTypeOption().click()
  }
  clickOnSendMessagesOption() {
    this.elements.sendMessagesOption().click()
  }
  clickOnReceiveMessagesOption() {
    this.elements.receiveMessagesOption().click()
  }
  clickOnNextBtn() {
    this.elements.nextBtn().click()
  }
  clickOnCalculateSavingsBtn() {
    this.elements.calculateSavingsBtn().click()
  }
}

module.exports = new telnyxVsTwilioPage()
