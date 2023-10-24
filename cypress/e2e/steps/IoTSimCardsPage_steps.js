import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import IoTSimCardsPage from '../../pages/IoTSimCardsPage'

Then('The “Order A Sim Card” button is displayed on the page', () => {
  IoTSimCardsPage.elements.orderSimCardBtn().should('be.visible')
})

Then('The “View Global Coverage” button is displayed on the page', () => {
  IoTSimCardsPage.elements.viewGlobalCoverageBtn().should('be.visible')
})

Then(
  'The “MONTHLY ESTIMATED COSTS” text is displayed in the last quiz slide',
  () => {
    IoTSimCardsPage.elements.quizResultSubheading().should('be.visible')
  }
)

Then('The quiz is displayed on the page', () => {
  IoTSimCardsPage.elements.calculatorSectionQuiz().should('be.visible')
})

When('I answer the first question', () => {
  IoTSimCardsPage.setNumberOfSimCardsInput('2')
})
When('I answer the second question', () => {
  IoTSimCardsPage.clickOnUsePublicIPOption()
})
When('I answer the third question', () => {
  IoTSimCardsPage.setDataUsageInput('2')
})
When('I answer the forth question', () => {
  IoTSimCardsPage.clickOnSelectCountryInput()
  IoTSimCardsPage.setCountryOption('Ukraine')
})
