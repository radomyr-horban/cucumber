import { Then } from '@badeball/cypress-cucumber-preprocessor'

import telnyxVsTwilioPage from '../../pages/telnyxVsTwilioPage'

Then('The “SAVINGS CALCULATOR” quiz is displayed on the page', () => {
  telnyxVsTwilioPage.elements.savingsCalculatorQuiz().should('be.visible')
})

Then('The current question number is equal to "1"', () => {
  telnyxVsTwilioPage.elements.currentQuestionNumber().should('equal', '1')
})
Then(
  'The "Compare costs per month" quiz result heading is displayed on the page',
  () => {
    telnyxVsTwilioPage.elements.quizResultHeading().should('be.visible')
  }
)

Then('The “TWILIO” and “TELNYX” words are displayed on the page', () => {
  telnyxVsTwilioPage.elements.quizResultTwilio().should('be.visible')
  telnyxVsTwilioPage.elements.quizResultTELNYX().should('be.visible')
})

Then('The “SAVINGS PER MONTH” text is displayed on the page', () => {
  telnyxVsTwilioPage.elements.quizResultSavingsPerMonth().should('be.visible')
})
