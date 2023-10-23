class IoTSimCardsPage {
  elements = {
    heading: () => cy.get('main h1'),
    orderSimCardBtn: () => cy.get('a[href="https://telnyx.com/sign-up"]'),
    viewGlobalCoverageBtn: () =>
      cy.get(
        'a[href="https://www.telnyx.com/iot-global-coverage#table-iot-global-coverage"]'
      ),

    //! Pricing Section
    sectionHeading: () => cy.get('section[id="iot-sim-card-calculator"] h2'),
    calculatorSectionQuiz: () =>
      cy.get('section[id="iot-sim-card-calculator"] > div > div').last(),
    currentQuestionNumber: () =>
      cy.get('div[data-value]').invoke('attr', 'data-value'),

    //! Pricing Quiz
    numberOfSimCardsInput: () =>
      cy.get('input[id="iot-sim-savings-calculator__number-of-sim-cards"]'),
    usePublicIPOption: () =>
      cy.get('input[id="iot-sim-savings-calculator__public-ip__-yes"]'),
    dataUsageInput: () =>
      cy.get('input[id="iot-sim-savings-calculator__number-of-mb-per-month"]'),
    selectCountryInput: () => cy.get('button[role="combobox"]'),
    nextBtn: () => cy.get('button').contains('Next'),
    backBtn: () => cy.get('button').contains('Back'),
    calculateSavingsBtn: () => cy.get('button').contains('Calculate savings'),

    //! Last slide
    quizResultHeading: () =>
      cy.get('section[id="iot-sim-card-calculator"] p:nth-child(1)'),
    quizResultSubheading: () =>
      cy
        .get('section[id="iot-sim-card-calculator"] strong')
        .contains('Monthly estimated costs'),
    quizSignUpBtn: () =>
      cy.get('section[id="iot-sim-card-calculator"] a[href="/sign-up"]'),
    quizResultTalkToExpertBtn: () =>
      cy.get('section[id="iot-sim-card-calculator"] a[href="/contact-us"]'),
  }

  //! clickers
  clickOnNumberOfSimCardsInput() {
    this.elements.numberOfSimCardsInput().click()
  }
  clickOnUsePublicIPOption() {
    this.elements.usePublicIPOption().click()
  }
  clickOnDataUsageInput() {
    this.elements.dataUsageInput().click()
  }
  clickOnSelectCountryInput() {
    this.elements.selectCountryInput().should('be.visible')
    this.elements.selectCountryInput().click()
  }
  clickOnNextBtn() {
    this.elements.nextBtn().click()
  }

  //! setters
  setNumberOfSimCardsInput(value) {
    this.elements.numberOfSimCardsInput().type(value)
  }
  setDataUsageInput(value) {
    this.elements.dataUsageInput().type(value)
  }
  setCountryOption(value) {
    cy.get('button[role="combobox"]+div div[role="option"]')
      .contains(`${value}`)
      .click()
  }
}

module.exports = new IoTSimCardsPage()
