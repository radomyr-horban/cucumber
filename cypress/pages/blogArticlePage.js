class blogArticlePage {
  elements = {
    backToBlogLink: () => cy.get('a span').contains('Back to blog'),
    categoryAndLastUpdateDate: () => cy.get('main>div>div strong').first(),
    heading: () => cy.get('main h1'),
    authorName: () => cy.get('div [data-author-initials]+p').contains('By'),
    shareOnSocialText: () => cy.get('span').contains('Share on Social'),
  }
}

module.exports = new blogArticlePage()
