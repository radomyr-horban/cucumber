class globalCoveragePage {
  elements = {
    heading: () => cy.get('main h1'),
    heroOverviewText: () => cy.get('main > section > div > div > p'),
    viewFullCoverageLink: () => cy.get('a[href="#our-global-coverage"]'),
    fullCoverageForm: () => cy.get('form[id="mktoForm_2555"]'),

    //! Form
    firstNameInput: () => cy.get('input[id="FirstName"]'),
    lastNameInput: () => cy.get('input[id="LastName"]'),
    emailInput: () => cy.get('input[id="Email"]'),
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

  //! click
  clickOnFirstNameInput() {
    this.elements.firstNameInput().click()
  }
  clickOnLastNameInput() {
    this.elements.lastNameInput().click()
  }
  clickOnemailInput() {
    this.elements.emailInput().click()
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
  setemailInput(value) {
    this.elements.emailInput().type(value)
  }

  fillForm(userData) {
    this.clickOnFirstNameInput()
    this.setFirstNameInput(userData.firstName)

    this.clickOnLastNameInput()
    this.setLastNameInput(userData.lastName)

    this.clickOnemailInput()
    this.setemailInput(userData.email)

    this.clickOnSubmitBtn()
  }
}

module.exports = new globalCoveragePage()
