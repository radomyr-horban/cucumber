class releaseNotesPage {
  elements = {
    heading: () => cy.get('main h1'),
    filterDropdown: () => cy.get('button[id="product-filter"]'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),
    filterDropdownListOptions: () => cy.get('div[role="option"] span'),

    featureRequestLink: () => cy.get('main a').contains('Feature Request'),
    followUsOnTwitterLink: () =>
      cy.get('main a').contains('Follow us on Twitter'),
    filterDropdownList: () => cy.get('div[role="listbox"]'),

    //! pagination
    paginationNav: () => cy.get('nav[aria-label="pagination"]'),
    nextPageBtn: () => cy.get('svg[aria-describedby="go-to-next-page"]'),
    previousPageBtn: () =>
      cy.get('svg[aria-describedby="go-to-previous-page"]'),

    nextPageBtnTitle: () => cy.get('title[id="go-to-next-page"]'),
    previousPageBtnTitle: () => cy.get('title[id="go-to-previous-page"]'),

    //! current page number
    currentPageNumber: () =>
      cy.get('nav[aria-label="pagination"] > p > span').first(),
  }

  clickOnFilterDropdown() {
    this.elements.filterDropdown().should('be.visible')
    this.elements.filterDropdown().click()
  }
  selectProductOption(value) {
    cy.get('div[role="option"] span').contains(`${value}`).click()
  }

  //! pagination
  clickOnNextPageBtn() {
    this.elements.nextPageBtnTitle().should('have.text', 'Go to next page')
    this.elements.nextPageBtn().click()
  }
  clickOnPreviousPageBtn() {
    this.elements
      .previousPageBtnTitle()
      .should('have.text', 'Go to previous page')
    this.elements.previousPageBtn().click()
  }
}

module.exports = new releaseNotesPage()
