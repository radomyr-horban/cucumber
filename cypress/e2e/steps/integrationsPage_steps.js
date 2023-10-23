import { When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'

import integrationsPage from '../../pages/integrationsPage'

//! Scenario (Filter)
Before(function () {
  cy.fixture('integrationsPage.fixture.json').as('integrationData')
})

Then(
  'The following categories are displayed under the “Integrations” filter list on the left side',
  function () {
    cy.verifyListItemsTitles(
      integrationsPage.elements.integrationsSectionListItems(),
      this.integrationData.Integrations
    )
  }
)
Then(
  'The following categories are displayed under the “Categories” filter list on the left side',
  function () {
    cy.verifyListItemsTitles(
      integrationsPage.elements.categoriesSectionListItems(),
      this.integrationData.Categories
    )
  }
)
