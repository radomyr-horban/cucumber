import {
  When,
  Then,
  Given,
  Before,
} from '@badeball/cypress-cucumber-preprocessor'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

// Before(() => {
//   cy.visit('/')
//   acceptCookiesHelper()
// })
//! Background ???
Given('I am on home page', () => {
  cy.visit('/')
  acceptCookiesHelper()
})

//! Scenario
// Given('I am on the Blog page', () => {
//   homePage.clickOnResourcesLink()
//   homePage.clickOnBlogLink()
// })

//! Pagination functionality
When('I click on the “Resources” link in the header', () => {
  homePage.clickOnResourcesLink()
})
Then('The “Blog” link is displayed in the opened dropdown menu', () => {
  homePage.elements.subNavigation.blogLink().should('be.visible')
  // homePage.clickOnBlogLink()
})

//!
When('I click on the “Blog” link in the opened dropdown menu', () => {
  homePage.clickOnBlogLink()
})

// ! fails because of `/`
Then('1. The {string} text is displayed in the URL', () => {
  cy.url().should('include', '/resources')
})
Then('2. The “Blog” heading is displayed on the page', () => {
  blogPage.elements.heading().should('contain', 'Blog')
})
Then(
  '3. The “Browse our latest articles and updates” text is displayed on the page',
  () => {
    blogPage.elements
      .subHeading()
      .should('contain', 'Browse our latest articles and updates')
  }
)
// Then('4. The “Filter by” dropdown element is displayed on the page.', () => {})

// When('I scroll to the end or articles list', () => {}) //! scrollIntoView ???
Then('The pagination is displayed below the articles list', () => {
  blogPage.elements.paginationNav().should('be.visible')
})

When('I click on the arrow-right icon', () => {
  blogPage.clickOnNextPageBtn()
})
Then('1. The page URL is updated with the {string} text', () => {
  cy.url().should('include', '/page/2')
})
Then('2. The “Blog Page 2” heading is displayed on the page', () => {
  blogPage.elements.heading().should('contain', 'Page 2')
})
Then(
  '3. The “Browse our latest articles and updates \\({int})” heading is displayed on the page',
  () => {
    blogPage.elements.subHeading().should('contain', '(2)')
  }
)
