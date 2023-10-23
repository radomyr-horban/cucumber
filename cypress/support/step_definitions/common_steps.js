import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'
import microsoftTeamsPage from '../../pages/microsoftTeamsPage'
import thankYouPage from '../../pages/thankYouPage'

const pageMap = {
  homePage: homePage,
  blogPage: blogPage,
  microsoftTeamsPage: microsoftTeamsPage,
  thankYouPage: thankYouPage,
}

//! general
Given('I am on home page', () => {
  cy.visit('/')
  acceptCookiesHelper()
})

Then('The {string} text is displayed in the URL', (url) => {
  cy.url().should('include', url)
})

//! Home page
// header
When('I click on the {string} link in the header', (link) => {
  homePage.clickOnMenuLink(link)
})
Then('The {string} link is displayed in the opened dropdown menu', (link) => {
  homePage.isSubmenuLinkVisible(link)
})
When('I click on the {string} link in the opened dropdown menu', (link) => {
  homePage.clickOnSubmenuLink(link)
})

// footer
// When('I click on the {string} link in the footer', (link) => {
//   homePage.clickOnMenuLink(link)
// })

//! common for all pages

// heading
Then(
  'The {string} heading is displayed on the {string}',
  (heading, pageName) => {
    const resolvedPage = pageMap[pageName]

    if (resolvedPage) {
      resolvedPage.elements.heading().should('contain', heading)
    } else {
      throw new Error(`Page '${pageName}' not found.`)
    }
  }
)

Then(
  'The {string} section heading is displayed on the {string}',
  (sectionHeading, pageName) => {
    const resolvedPage = pageMap[pageName]

    if (resolvedPage) {
      resolvedPage.elements.sectionHeading().should('contain', sectionHeading)
    } else {
      throw new Error(`Page '${pageName}' not found.`)
    }
  }
)

//? escape integer
//The "View \\({int})" section
