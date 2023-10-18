// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import IoTSimCardsPage from '../../pages/IoTSimCardsPage'

describe('IoT Sim Cards page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('should allow a user to submit a form with valid data', () => {
    homePage.clickOnProductsLinkLink()
    homePage.clickOnIoTSimCardsLink()

    cy.url().should('include', '/iot-sim-card')
    IoTSimCardsPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'IoT SIM Cards')
    IoTSimCardsPage.elements.orderSimCardBtn().should('be.visible')
    IoTSimCardsPage.elements.viewGlobalCoverageBtn().should('be.visible')

    //! Calculator Section
    IoTSimCardsPage.elements.calculatorSectionHeading().should('be.visible')
    IoTSimCardsPage.elements.calculatorSectionQuiz().should('be.visible')

    //! Quiz
    IoTSimCardsPage.elements.currentQuestionNumber().should('equal', '1')
    IoTSimCardsPage.clickOnNumberOfSimCardsInput()
    IoTSimCardsPage.setNumberOfSimCardsInput('2')
    IoTSimCardsPage.elements.nextBtn().should('be.visible')
    IoTSimCardsPage.clickOnNextBtn()

    IoTSimCardsPage.elements.currentQuestionNumber().should('equal', '2')
    IoTSimCardsPage.elements.backBtn().should('be.visible')
    IoTSimCardsPage.clickOnUsePublicIPOption()
    IoTSimCardsPage.elements.nextBtn().should('be.visible')
    IoTSimCardsPage.clickOnNextBtn()

    IoTSimCardsPage.elements.currentQuestionNumber().should('equal', '3')
    IoTSimCardsPage.elements.backBtn().should('be.visible')
    IoTSimCardsPage.clickOnDataUsageInput()
    IoTSimCardsPage.setDataUsageInput('2')
    IoTSimCardsPage.elements.nextBtn().should('be.visible')
    IoTSimCardsPage.clickOnNextBtn()

    IoTSimCardsPage.elements.currentQuestionNumber().should('equal', '4')
    IoTSimCardsPage.elements.backBtn().should('be.visible')
    IoTSimCardsPage.clickOnSelectCountryInput()
    IoTSimCardsPage.setCountryOption('Ukraine')
    IoTSimCardsPage.elements.nextBtn().should('be.visible')
    IoTSimCardsPage.clickOnNextBtn()

    //! last slide
    IoTSimCardsPage.elements.currentQuestionNumber().should('equal', '5')
    IoTSimCardsPage.elements.quizResultHeading().should('be.visible')
    IoTSimCardsPage.elements.quizResultSubheading().should('be.visible')
    IoTSimCardsPage.elements.quizSignUpBtn().should('be.visible')
    IoTSimCardsPage.elements.quizResultTalkToExpertBtn().should('be.visible')
  })
})
