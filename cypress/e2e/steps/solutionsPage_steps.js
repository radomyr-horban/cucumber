import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import solutionsPage from '../../pages/solutionsPage'

//! Scenario (Filter)
Then(
  'The “See industries” and “See use cases” links are displayed on the page',
  () => {
    solutionsPage.elements.seeIndustriesLink().should('be.visible')
    solutionsPage.elements.seeUseCasesLink().should('be.visible')
  }
)

When('I click on the “See use cases” link', () => {
  solutionsPage.clickOnSeeUseCasesLink()
})

Then('The “USE CASES” section title is visible on the page', () => {
  solutionsPage.elements
    .useCasesSectionStrongText()
    .contains(`use cases`, {
      matchCase: false,
    })
    .should('be.visible')
})

Then('The “Filter by department” dropdown is displayed on the page', () => {
  solutionsPage.elements.filterDropdownBtn().should('be.visible')
})

When('I click on the “Filter by department” dropdown', () => {
  solutionsPage.clickOnFilterDropdownBtn()
})

Then('The names of all departments are displayed in the dropdown list', () => {
  cy.fixture('solutionsPage.fixture').then((data) => {
    cy.verifyListItemsWithTitlesArray(
      solutionsPage.elements.filterDropdownListOptions(),
      data.options
    )
  })
})
