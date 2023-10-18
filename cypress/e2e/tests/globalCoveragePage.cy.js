// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import globalCoveragePage from '../../pages/globalCoveragePage'
import thankYouPage from '../../pages/thankYouPage'

describe('Global coverage page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  xit('11. should allow a user to submit a form with valid data', () => {
    homePage.clickOnWhyTelnyxLink()
    homePage.clickOnGlobalCoverageLink()

    cy.url().should('include', '/global-coverage')
    globalCoveragePage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Global coverage')
    globalCoveragePage.elements.heroOverviewText().should('be.visible')

    globalCoveragePage.elements.viewFullCoverageLink().should('be.visible')
    globalCoveragePage.elements.fullCoverageForm().should('be.visible')

    const userData = generateUserData()
    globalCoveragePage.fillForm(userData)

    cy.url().should('include', '/thank-you?formId')

    thankYouPage.elements.heading().should('be.visible')
    thankYouPage.elements.heroOverviewText().should('be.visible')
  })

  it('12. should NOT allow a user to submit a form with invalid data', () => {
    homePage.clickOnWhyTelnyxLink()
    homePage.clickOnGlobalCoverageLink()

    cy.url().should('include', '/global-coverage')
    globalCoveragePage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Global coverage')
    globalCoveragePage.elements.heroOverviewText().should('be.visible')
    globalCoveragePage.elements.viewFullCoverageLink().should('be.visible')
    globalCoveragePage.elements.fullCoverageForm().should('be.visible')

    //! new
    globalCoveragePage.clickOnSubmitBtn()
    globalCoveragePage.isErrorAlertDisplayed(
      globalCoveragePage.elements.firstNameInput()
    )

    globalCoveragePage.setFirstNameInput('Tom')
    globalCoveragePage.clickOnSubmitBtn()
    globalCoveragePage.isErrorAlertDisplayed(
      globalCoveragePage.elements.lastNameInput()
    )

    globalCoveragePage.setLastNameInput('Holland')
    globalCoveragePage.clickOnSubmitBtn()
    globalCoveragePage.isErrorAlertDisplayed(
      globalCoveragePage.elements.emailInput()
    )

    globalCoveragePage.setemailInput('tom.holland')
    globalCoveragePage.clickOnSubmitBtn()
    globalCoveragePage.isErrorAlertDisplayed(
      globalCoveragePage.elements.emailInput()
    )

    globalCoveragePage.setemailInput('tom@holland')
    globalCoveragePage.clickOnSubmitBtn()
    globalCoveragePage.isErrorAlertDisplayed(
      globalCoveragePage.elements.emailInput()
    )
  })
})
