class microsoftTeamsPage {
  elements = {
    heading: () => cy.get('main h1'),
    heroOverviewText: () =>
      cy
        .get('main > section > div > div > div > p')
        .contains('Get cost-effective PSTN calling'),

    //! sections
    talkToExpertBtn: () =>
      cy.get('a[href="/contact-us"]>span').contains('Talk to an expert'),

    getStartedLink: () =>
      cy.get('a[href="/sign-up"]>span').contains('Get started'),

    sectionHeading: () =>
      cy
        .get('section > div > h2')
        .contains('Interested in learning more about Operator Connect?'),

    formSectionDescription: () =>
      cy
        .get('section > div > div > p')
        .contains(
          `With Telnyx as your underlying telephony provider, you'll enjoy a seamless set-up process, high-quality voice and cost-effective calling within Teams.`
        ),

    formBox: () =>
      cy.get('div[title="Interested in Operator Connect? (Bottom)"]'),

    //! Form
    firstNameInput: () => cy.get('input[id="FirstName"]'),
    lastNameInput: () => cy.get('input[id="LastName"]'),
    emailInput: () => cy.get('input[id="Email"]'),
    companyWebsiteInput: () => cy.get('input[id="Website"]'),
    operatorSelect: () => cy.get('select[id="Form_Operator_Connect_Seats__c"]'),
    submitBtn: () => cy.get('button[type="submit"]'),

    //! Error
    errorAlert: () => cy.get('div.mktoError'),
  }

  isErrorAlertDisplayed(inputField) {
    const inputId = inputField.invoke('attr', 'id')

    return inputId.then((id) => {
      return cy.get(`input[id="${id}"]+div.mktoError`).should('be.visible')
    })
  }

  //! clickers
  clickOnFirstNameInput() {
    this.elements.firstNameInput().click()
  }

  clickOnLastNameInput() {
    this.elements.lastNameInput().click()
  }

  clickOnEmailInput() {
    this.elements.emailInput().click()
  }

  clickOnCompanyWebsiteInput() {
    this.elements.companyWebsiteInput().click()
  }

  clickOnSubmitBtn() {
    this.elements.submitBtn().click()
  }

  //! setters
  setFirstNameInput(value) {
    this.elements.firstNameInput().type(value)
  }

  setLastNameInput(value) {
    this.elements.lastNameInput().type(value)
  }

  setEmailInput(value) {
    this.elements.emailInput().clear()
    this.elements.emailInput().type(value) //! remove old results
  }

  setCompanyWebsiteInput(value) {
    this.elements.companyWebsiteInput().type(value)
  }

  selectOperator(value) {
    this.elements.operatorSelect().select(value)
  }

  fillForm(userData) {
    this.clickOnFirstNameInput()
    this.setFirstNameInput(userData.firstName)

    this.clickOnLastNameInput()
    this.setLastNameInput(userData.lastName)

    this.clickOnEmailInput()
    this.setEmailInput(userData.email)

    this.clickOnCompanyWebsiteInput()
    this.setCompanyWebsiteInput(userData.website)

    this.selectOperator('0-50')

    this.clickOnSubmitBtn()
  }
}

module.exports = new microsoftTeamsPage()
