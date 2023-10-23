class blogPage {
  elements = {
    heading: () => cy.get('main h1'),
    // subHeading: () => cy.get('header h2 > span'),
    // filterDropdown: () => cy.get('#blog-filter'),
    // filterDropdownList: () => cy.get('div[role="listbox"]'),
    // filterDropdownListOptions: () => cy.get('div[role="option"] a'),

    //todo
    searchInput: () => cy.get('input[id="search"]'),
    sectionHeading: () => cy.get('#articles h2'),

    firstProductFilterOption: () =>
      cy.get('[id="articles"] > div > div > div:first-child a').first(),
    firstContentTypeFilterOption: () =>
      cy.get('[id="articles"] > div > div > div:last-child a').first(),

    paginationNav: () => cy.get('nav[aria-label="pagination"]'),
    nextPageBtn: () => cy.get('svg[aria-describedby="go-to-next-page"]'),
    //todo: nextPageBtnTitle: () => cy.get('title[id="go-to-next-page"]'),

    //! article
    // firstArticle: () => cy.get('#articles ul li a').first(),
    lastArticle: () => cy.get('#articles ul li a').last(),

    articleCategory: () => cy.get('#articles ul li a strong').first(),
    articleTitle: () => cy.get('#articles ul li a h3').first(),
    articleAuthor: () => cy.get('#articles ul li a p').first(),
  }

  clickOnFirstProductFilterOption() {
    this.elements.firstProductFilterOption().should('be.visible')
    this.elements.firstProductFilterOption().click()
  }

  clickOnFirstFirstContentTypeFilterOption() {
    this.elements.firstContentTypeFilterOption().should('be.visible')
    this.elements.firstContentTypeFilterOption().click()
  }

  //! article
  // clickOnFirstArticle() {
  //   this.elements.firstArticle().should('be.visible')
  //   this.elements.firstArticle().click()
  // }

  clickOnLastArticle() {
    this.elements.lastArticle().should('be.visible')
    this.elements.lastArticle().click()
  }
}

module.exports = new blogPage()
