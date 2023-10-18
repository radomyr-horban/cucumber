// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import telnyxVsTwilioPage from '../../pages/telnyxVsTwilioPage'

describe('Telnyx Vs TwilioPage page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('should allow a user to submit a form with valid data', () => {
    homePage.clickOnTelnyxVsTwilioLink()

    cy.url().should('include', '/the-better-twilio-alternative')
    telnyxVsTwilioPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'The top Twilio alternative')
    telnyxVsTwilioPage.elements.talkToExpertBtn().should('be.visible')

    //! Calculator Section
    telnyxVsTwilioPage.elements.savingsCalculatorHeading().should('be.visible')
    telnyxVsTwilioPage.elements.savingsCalculatorQuiz().should('be.visible')

    //! Quiz
    telnyxVsTwilioPage.elements.currentQuestionNumber().should('equal', '1')
    telnyxVsTwilioPage.clickOnNumberTypeOption()
    telnyxVsTwilioPage.elements.nextBtn().should('be.visible')
    telnyxVsTwilioPage.clickOnNextBtn()

    telnyxVsTwilioPage.elements.currentQuestionNumber().should('equal', '2')
    telnyxVsTwilioPage.clickOnSendMessagesOption()
    telnyxVsTwilioPage.elements.backBtn().should('be.visible')
    telnyxVsTwilioPage.clickOnNextBtn()

    telnyxVsTwilioPage.elements.currentQuestionNumber().should('equal', '3')
    telnyxVsTwilioPage.clickOnReceiveMessagesOption()
    telnyxVsTwilioPage.elements.backBtn().should('be.visible')
    telnyxVsTwilioPage.clickOnCalculateSavingsBtn()

    //! last slide
    telnyxVsTwilioPage.elements.currentQuestionNumber().should('equal', '4')
    telnyxVsTwilioPage.elements.backBtn().should('be.visible')

    telnyxVsTwilioPage.elements.quizResultHeading().should('be.visible')
    telnyxVsTwilioPage.elements.quizResultTwilio().should('be.visible')
    telnyxVsTwilioPage.elements.quizResultTELNYX().should('be.visible')
    telnyxVsTwilioPage.elements.quizResultSavingsPerMonth().should('be.visible')
    telnyxVsTwilioPage.elements.quizResultTalkToExpertBtn().should('be.visible')
  })
})
