// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'

describe('Blog page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('5. should allow a user to sort articles', function () {
    homePage.clickOnResourcesLink()
    homePage.clickOnBlogLink()

    cy.url().should('include', '/resources')
    blogPage.elements
      .heading()
      .should('contain', 'Browse all articles, guides, and news')

    blogPage.elements.searchInput().should('be.visible')
    blogPage.elements
      .articlesSectionHeading()
      .should('be.visible')
      .and('contain', 'View all articles')

    blogPage.clickOnFirstProductFilterOption()
    cy.url().should('include', 'topic/voice')

    blogPage.clickOnFirstFirstContentTypeFilterOption()
    cy.url().should('include', 'category=partnerships')
  })

  it('6. should display pagination', () => {
    homePage.clickOnResourcesLink()
    homePage.clickOnBlogLink()

    cy.url().should('include', '/resources')
    blogPage.elements
      .heading()
      .should('contain', 'Browse all articles, guides, and news')

    blogPage.elements.searchInput().should('be.visible')
    blogPage.elements
      .articlesSectionHeading()
      .should('be.visible')
      .and('contain', 'View all articles')

    blogPage.elements.paginationNav().should('be.visible')
    blogPage.clickOnNextPageBtn()

    cy.url().should('include', '/page/2')

    blogPage.elements.articlesSectionHeading().should('contain', '(2)')
  })
})
