import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import blogPage from '../../pages/blogPage'
import blogArticlePage from '../../pages/blogArticlePage'

Then(
  'The article category, title and author are displayed in the article card',
  () => {
    blogPage.elements.articleCategory().should('be.visible')
    blogPage.elements.articleTitle().should('be.visible')
    blogPage.elements.articleAuthor().should('be.visible')
  }
)

When('I click on the first article card', () => {
  blogPage.clickOnLastArticle()
})
Then(
  'The “Back to blog” link is displayed on the top left corner of the page',
  () => {
    blogArticlePage.elements.backToBlogLink().should('be.visible')
  }
)
Then(
  'The category and last update date is displayed above the article title',
  () => {
    blogArticlePage.elements
      .categoryAndLastUpdateDate()
      .should('be.visible')
      .and('contain', 'Updated')
  }
)
Then('The article title is displayed on the page', () => {
  blogArticlePage.elements.heading().should('be.visible')
})
Then('The article author name is displayed below the article title', () => {
  blogArticlePage.elements.authorName().should('be.visible')
})
Then('The “SHARE ON SOCIAL” text is displayed under the article', () => {
  blogArticlePage.elements.shareOnSocialText().should('be.visible')
})
