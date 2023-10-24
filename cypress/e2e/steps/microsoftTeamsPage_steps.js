import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import { generateUserData } from '../../helpers/generateUserData.helper'

import microsoftTeamsPage from '../../pages/microsoftTeamsPage'
import thankYouPage from '../../pages/thankYouPage'

//! Scenario (Positive)
// Then('The description text is displayed under the heading', () => {
//   microsoftTeamsPage.elements.heroOverviewText().should('be.visible')
// })
// todo
// Then('The “Talk to an expert” button is displayed on the page', () => {
//   microsoftTeamsPage.elements.talkToExpertBtn().should('be.visible')
// })

Then('The “Get started” link is displayed below the button', () => {
  microsoftTeamsPage.elements.getStartedLink().should('be.visible')
})
Then(
  'The “Interested in Operator Connect?” form is displayed on the page',
  () => {
    microsoftTeamsPage.elements.formBox().should('be.visible')
  }
)

// When('Fill in the form with valid data', (pageName) => {
//   const userData = generateUserData()
//   microsoftTeamsPage.fillForm(userData)
// })
Then(
  'The “We`ve received your request and one of our experts will be in touch shortly.” message is displayed on the page',
  () => {
    thankYouPage.elements.heroOverviewText().should('be.visible')
  }
)

//! Scenario (Negative)
When('I click on the “APPLY NOW” button', () => {
  microsoftTeamsPage.clickOnSubmitBtn()
})
// Then(
//   'An error message is displayed under the {string} input field',
//   (inputName, pageName) => {
//     microsoftTeamsPage.isErrorAlertDisplayed(inputName)
//   }
// )

When('I set the {string} input field with {string}', (inputName, value) => {
  microsoftTeamsPage.setInput(inputName, value)
})

When('I select the operator input field', () => {
  microsoftTeamsPage.selectOperator('0-50')
})
