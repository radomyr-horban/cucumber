class blogPage {
  elements = {
    heading: () => cy.get('main h1'),
    subHeading: () => cy.get('header h2 > span'),
    filterDropdown: () => cy.get('#blog-filter'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),
    filterDropdownListOptions: () => cy.get('div[role="option"] a'),

    //todo
    searchInput: () => cy.get('input[id="search"]'),
    articlesSectionHeading: () => cy.get('#articles h2'),

    firstProductFilterOption: () =>
      cy.get('[id="articles"] > div > div > div:first-child a').first(),
    firstContentTypeFilterOption: () =>
      cy.get('[id="articles"] > div > div > div:last-child a').first(),

    paginationNav: () => cy.get('nav[aria-label="pagination"]'),
    nextPageLink: () => cy.get('svg[aria-describedby="go-to-next-page"]'),
    nextPageLinkTitle: () => cy.get('title[id="go-to-next-page"]'),

    //! article
    firstArticle: () => cy.get('#articles ul li a').first(),
    //!todo
    lastArticle: () => cy.get('#articles ul li a').last(),

    firstArticleCategory: () => cy.get('#articles ul li a strong').first(),
    firstArticleTitle: () => cy.get('#articles ul li a h3').first(),
    firstArticleAuthor: () => cy.get('#articles ul li a p').first(),
  }

  // clickOnFilterDropdown() {
  //   this.elements.filterDropdown().should('be.visible')
  //   this.elements.filterDropdown().click()
  // }

  clickOnFirstProductFilterOption() {
    this.elements.firstProductFilterOption().should('be.visible')
    this.elements.firstProductFilterOption().click()
  }

  clickOnFirstFirstContentTypeFilterOption() {
    this.elements.firstContentTypeFilterOption().should('be.visible')
    this.elements.firstContentTypeFilterOption().click()
  }

  clickOnNextPageBtn() {
    this.elements.nextPageLinkTitle().should('have.text', 'Go to next page')
    this.elements.nextPageLink().click()
  }
  //! article
  clickOnFirstArticle() {
    this.elements.firstArticle().should('be.visible')
    this.elements.firstArticle().click()
  }

  clickOnLastArticle() {
    this.elements.lastArticle().should('be.visible')
    this.elements.lastArticle().click()
  }
}

module.exports = new blogPage()
