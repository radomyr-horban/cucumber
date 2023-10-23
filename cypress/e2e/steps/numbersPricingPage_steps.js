import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import numbersPricingPage from '../../pages/numbersPricingPage'

//! Scenario (Filter)
Then(
  'The “Pay as you go” and “Volume-based pricing” boxes are displayed on the page',
  () => {
    numbersPricingPage.elements.volumeBasedPricingBoxLink().should('be.visible')
    numbersPricingPage.elements.numberPricingTableCaption().should('be.visible')
  }
)

When('I click on the “Pay as you go” box', () => {
  numbersPricingPage.clickOnPayAsYouGoBoxLink()
})
Then(
  'The dropdown lists for choosing a country and currency are displayed on the page',
  () => {
    numbersPricingPage.elements.countryFilterDropdownBtn().should('be.visible')
    numbersPricingPage.elements.currencyFilterDropdownBtn().should('be.visible')
  }
)
Then(
  'The default values of dropdown lists are “United States” and “USD”',
  () => {
    numbersPricingPage.elements
      .countryFilterDropdownBtn()
      .should('have.text', 'United States')

    numbersPricingPage.elements
      .currencyFilterDropdownBtn()
      .should('have.text', 'USD')
  }
)
Then(
  'The “Number pricing” table caption is displayed below the section with dropdown lists',
  () => {
    numbersPricingPage.elements.numberPricingTableCaption().should('be.visible')
  }
)

Then('The `$` sign is displayed in the “Number pricing” section', () => {
  numbersPricingPage.elements.numberPricingTableData().should('contain', '$')
})

When('I click on the “Country” dropdown list', () => {
  numbersPricingPage.clickOnCountryFilterDropdownBtn()
})
Then(
  'The list of “countries” options is displayed in the dropdown list',
  () => {
    numbersPricingPage.elements.countryFilterDropdownList().should('be.visible')
  }
)

When('I select the “Canada” option', () => {
  numbersPricingPage.selectCountryOption('Canada')
})
Then('The selected value of “Country” dropdown list is “Canada”', () => {
  numbersPricingPage.elements
    .countryFilterDropdownBtn()
    .should('have.text', 'Canada')
})

When('I click on the “Currency” dropdown list', () => {
  numbersPricingPage.clickOnCurrencyFilterDropdownBtn()
})
Then(
  'The list of “currencies” options is displayed in the dropdown list',
  () => {
    numbersPricingPage.elements
      .currencyFilterDropdownList()
      .should('be.visible')
  }
)

When('I select the “EUR” option', () => {
  numbersPricingPage.selectCurrencyOption('EUR')
})
Then('The selected value of “Currency” dropdown list is “EUR”', () => {
  numbersPricingPage.elements
    .currencyFilterDropdownBtn()
    .should('have.text', 'EUR')
})
Then('The `€` sign is displayed in the “Number pricing” section', () => {
  numbersPricingPage.elements.numberPricingTableData().should('contain', '€')
})
