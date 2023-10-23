import { When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'

import supportCenterPage from '../../pages/supportCenterPage'

Before(function () {
  cy.fixture('supportCenterPage.fixture').as('supportCenterData')
})

Then(
  'The input with the “Search for articles” placeholder is displayed on the page',
  function () {
    supportCenterPage.elements
      .searchInput()
      .should('be.visible')
      .and('be.empty')
      .and('have.attr', 'placeholder', 'Search for articles...')
  }
)

When(
  'I click on the input field with the “Search for articles” placeholder',
  function () {
    supportCenterPage.clickOnSearchInput()
  }
)
Then('The input field is focused', function () {
  supportCenterPage.elements.searchInput().should('be.focused')
})

When('I type "api" in the search field', function () {
  supportCenterPage.setSearchInput(`${this.supportCenterData.searchWord}`)
})
Then('The "api" is displayed in the search field', function () {
  supportCenterPage.elements
    .searchInput()
    .should('have.value', `${this.supportCenterData.searchWord}`)
})

When('I hit "Enter"', function () {
  supportCenterPage.elements.searchInput().type('{enter}')
})
Then('The searched word is displayed inside the input field', function () {
  supportCenterPage.elements
    .searchInput()
    .should('have.value', `${this.supportCenterData.searchWord}`)
})
Then(
  'The searched word is displayed in the “Search results for:” text line',
  function () {
    supportCenterPage.elements
      .searchResultsText()
      .should('contain', `${this.supportCenterData.searchWord}`)
  }
)
Then(
  'The searched word is displayed in the results items description',
  function () {
    supportCenterPage.elements
      .searchResultCards()
      .first()
      .contains(`${this.supportCenterData.searchWord}`, {
        matchCase: false,
      })
  }
)

When('I click on the “cross” icon inside the input field', function () {
  supportCenterPage.clickOnSearchClearBtn()
})
Then('The "api" text is NOT displayed in the URL', function () {
  cy.url().should('not.contain', `${this.supportCenterData.searchWord}`)
})
