import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

import homePage from '../pages/homePage'
import blogPage from '../pages/blogPage'
import { acceptCookiesHelper } from '../helpers/acceptCookies.helper'

Given('I am on blog page', () => {
  cy.visit('/')
  acceptCookiesHelper()

  homePage.clickOnResourcesLink()
  homePage.clickOnBlogLink()
})

When('I click sort button', () => {
  blogPage.clickOnNextPageBtn()
})

Then('I should be see sorted articles', () => {
  cy.url().should('include', '/page/2')
  blogPage.elements.heading().should('contain', 'Page 2')
  blogPage.elements.subHeading().should('contain', '(2)')
})
