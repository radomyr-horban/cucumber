import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import releaseNotesPage from '../../pages/releaseNotesPage'

//! Scenario (Pagination)
Then('Current page number is equal to {string}', (pageNumber) => {
  releaseNotesPage.elements.currentPageNumber().should('contain', pageNumber)
})

When('I click on the "next-page" button', () => {
  releaseNotesPage.clickOnNextPageBtn()
})

When('I click on the "previous-page" button', () => {
  releaseNotesPage.clickOnPreviousPageBtn()
})

//! Scenario (Filter)
Then('The “Feature Request” link is displayed on the page', () => {
  releaseNotesPage.elements.featureRequestLink().should('be.visible')
})

Then('The “Follow us on Twitter” link is displayed on the page', () => {
  releaseNotesPage.elements.followUsOnTwitterLink().should('be.visible')
})

When('I click on the “Filter by product” dropdown', () => {
  releaseNotesPage.clickOnFilterDropdown()
})

Then('The list of “products” options is displayed in the dropdown list', () => {
  cy.fixture('releaseNotesPage.fixture').then((data) => {
    cy.verifyListItemsWithTitlesArray(
      releaseNotesPage.elements.filterDropdownListOptions(),
      data.productOptions
    )
  })
})

When('I select the “API” option', () => {
  releaseNotesPage.selectProductOption('API')
})
