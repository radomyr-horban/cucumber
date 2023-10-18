// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import microsoftTeamsPage from '../../pages/microsoftTeamsPage'
import thankYouPage from '../../pages/thankYouPage'

describe('Microsoft Teams page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  xit('should allow a user to submit a form with valid data', () => {
    homePage.clickOnProductsLinkLink()
    homePage.clickOnMicrosoftTeamsLink()

    cy.url().should('include', '/products/enterprise-integrations-ms-teams')
    microsoftTeamsPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Microsoft Teams')
    microsoftTeamsPage.elements.heroOverviewText().should('be.visible')
    microsoftTeamsPage.elements.talkToExpertBtn().should('be.visible')
    microsoftTeamsPage.elements.getStartedLink().should('be.visible')

    microsoftTeamsPage.elements.formSectionHeading().should('be.visible')
    microsoftTeamsPage.elements.formSectionDescription().should('be.visible')
    microsoftTeamsPage.elements.formBox().should('be.visible')

    const userData = generateUserData()
    microsoftTeamsPage.fillForm(userData)

    cy.url().should('include', '/thank-you?formId')

    thankYouPage.elements.heading().should('be.visible')
    thankYouPage.elements.heroOverviewText().should('be.visible')
  })

  it('should NOT allow a user to submit a form with invalid data', () => {
    homePage.clickOnProductsLinkLink()
    homePage.clickOnMicrosoftTeamsLink()

    cy.url().should('include', '/products/enterprise-integrations-ms-teams')
    microsoftTeamsPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Microsoft Teams')
    microsoftTeamsPage.elements.heroOverviewText().should('be.visible')
    microsoftTeamsPage.elements.talkToExpertBtn().should('be.visible')
    microsoftTeamsPage.elements.getStartedLink().should('be.visible')

    microsoftTeamsPage.elements.formSectionHeading().should('be.visible')
    microsoftTeamsPage.elements.formSectionDescription().should('be.visible')
    microsoftTeamsPage.elements.formBox().should('be.visible')

    //! new
    microsoftTeamsPage.clickOnSubmitBtn()
    microsoftTeamsPage.isErrorAlertDisplayed(
      microsoftTeamsPage.elements.firstNameInput()
    )

    microsoftTeamsPage.setFirstNameInput('Tom')
    microsoftTeamsPage.clickOnSubmitBtn()
    microsoftTeamsPage.isErrorAlertDisplayed(
      microsoftTeamsPage.elements.lastNameInput()
    )

    microsoftTeamsPage.setLastNameInput('Holland')
    microsoftTeamsPage.clickOnSubmitBtn()
    microsoftTeamsPage.isErrorAlertDisplayed(
      microsoftTeamsPage.elements.emailInput()
    )

    microsoftTeamsPage.setEmailInput('tom.holland')
    microsoftTeamsPage.selectOperator('0-50')
    microsoftTeamsPage.clickOnSubmitBtn()
    microsoftTeamsPage.isErrorAlertDisplayed(
      microsoftTeamsPage.elements.emailInput()
    )

    microsoftTeamsPage.setCompanyWebsiteInput('tom-holland')
    microsoftTeamsPage.selectOperator('0-50')
    microsoftTeamsPage.setEmailInput('tom@holland')
    microsoftTeamsPage.clickOnSubmitBtn()
    microsoftTeamsPage.isErrorAlertDisplayed(
      microsoftTeamsPage.elements.emailInput()
    )
  })
})
