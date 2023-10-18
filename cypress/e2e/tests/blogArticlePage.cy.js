// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'
import blogArticlePage from '../../pages/blogArticlePage'

describe('Blog aricle page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('7. should display main elements', () => {
    homePage.clickOnResourcesLink()
    homePage.clickOnBlogLink()

    cy.url().should('include', '/resources')
    blogPage.elements
      .heading()
      .should('contain', 'Browse all articles, guides, and news')

    blogPage.elements.searchInput().should('be.visible')
    blogPage.elements.articlesSectionHeading().should('be.visible')

    //! article
    blogPage.elements.firstArticleCategory().should('be.visible')
    blogPage.elements.firstArticleTitle().should('be.visible')
    blogPage.elements.firstArticleAuthor().should('be.visible')

    // blogPage.clickOnFirstArticle()
    blogPage.clickOnLastArticle()

    //! inside
    blogArticlePage.elements.backToBlogLink().should('be.visible')

    blogArticlePage.elements
      .categoryAndLastUpdateDate()
      .should('be.visible')
      .and('contain', 'Updated')

    blogArticlePage.elements.heading().should('be.visible')
    blogArticlePage.elements.authorName().should('be.visible')
  })
})
