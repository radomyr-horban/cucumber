import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

//! Background
Given('I am on home page', () => {
  cy.visit('/')
  acceptCookiesHelper()
})

//! Scenario: Sorting functionality
Then('The "Search" input is displayed on the page', () => {
  blogPage.elements.searchInput().should('be.visible')
})
Then('The {string} section heading is displayed on the page', (heading) => {
  blogPage.elements
    .sectionHeading()
    .should('be.visible')
    .and('contain', heading)
})
Then('The pagination is displayed at the end of the page', () => {
  blogPage.elements.paginationNav().should('be.visible')
})

When('Click on “Voice” button in the “Filter by product:” section', () => {
  blogPage.clickOnFirstProductFilterOption()
})

When(
  'Click on “Partnerships” button in the “Filter by content type:” section',
  () => {
    blogPage.clickOnFirstFirstContentTypeFilterOption()
  }
)

//! Scenario: Pagination functionality
When('I click on the {string}', (btnName) => {
  blogPage.elements[btnName]().click()
})

//? escape integer
//The "View \\({int})" section
