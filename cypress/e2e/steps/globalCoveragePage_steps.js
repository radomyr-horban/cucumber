import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import globalCoveragePage from '../../pages/globalCoveragePage'

//! Scenario (Negative)
When('I click on the “Submit” button', () => {
  globalCoveragePage.clickOnSubmitBtn()
})

Then('The “View full coverage” link is displayed below the button', () => {
  globalCoveragePage.elements.viewFullCoverageLink().should('be.visible')
})
Then('The “Download full coverage” form is displayed on the page', () => {
  globalCoveragePage.elements.fullCoverageForm().should('be.visible')
})
