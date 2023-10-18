class homePage {
  elements = {
    signUpBtn: () => cy.get('#header-sign-up > span').first(),

    navigation: {
      resourcesLink: () => cy.get('nav').contains('Resources'),
      solutionsLink: () => cy.get('nav').contains('Solutions'),
      pricingLink: () => cy.get('nav').contains('Pricing'),
      whyTelnyxLink: () => cy.get('nav').contains('Why Telnyx'),
      productsLink: () => cy.get('nav').contains('Products'),
    },

    subNavigation: {
      supportCenterLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Support Center')
          .invoke('removeAttr', 'target'),

      blogLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Blog')
          .invoke('removeAttr', 'target'),

      globalNumbersLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Global Numbers')
          .invoke('removeAttr', 'target'),

      globalCoverageLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Global coverage')
          .invoke('removeAttr', 'target'),

      integrationsLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Integrations')
          .invoke('removeAttr', 'target'),

      microsoftTeamsLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Microsoft Teams')
          .invoke('removeAttr', 'target'),

      IoTSimCardsLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('IoT SIM Card')
          .invoke('removeAttr', 'target'),
    },

    footer: {
      footerSocialMediaLinks: () =>
        cy.get('footer [rel="noopener noreferrer"]'),

      footerLogo: () => cy.get('footer svg > g'),
      releaseNotesLink: () => cy.get('footer a[href="/release-notes"]'),

      // reportAbuseLink: () => cy.get('footer a[href="/report-abuse"]'),
      telnyxVsTwilioLink: () =>
        cy.get('footer a[href="/the-better-twilio-alternative"]'),
    },
  }

  //! clickers
  clickOnSignUpBtn() {
    this.elements.signUpBtn().click()
  }
  clickOnFooterLogo() {
    this.elements.footerLogo().click()
  }

  //! navigation
  clickOnResourcesLink() {
    this.elements.navigation.resourcesLink().should('be.visible')
    this.elements.navigation.resourcesLink().click()
  }
  clickOnSolutionsLink() {
    this.elements.navigation.solutionsLink().should('be.visible')
    this.elements.navigation.solutionsLink().click()
  }
  clickOnPricingLink() {
    this.elements.navigation.pricingLink().should('be.visible')
    this.elements.navigation.pricingLink().click()
  }
  clickOnWhyTelnyxLink() {
    this.elements.navigation.whyTelnyxLink().should('be.visible')
    this.elements.navigation.whyTelnyxLink().click()
  }
  clickOnProductsLinkLink() {
    this.elements.navigation.productsLink().should('be.visible')
    this.elements.navigation.productsLink().click()
  }

  //! footer
  clickOnReleaseNotesLink() {
    this.elements.footer.releaseNotesLink().should('be.visible')
    this.elements.footer.releaseNotesLink().click()
  }
  // clickOnReportAbuseLink() {
  //   this.elements.footer.reportAbuseLink().should('be.visible')
  //   this.elements.footer.reportAbuseLink().click()
  // }
  clickOnTelnyxVsTwilioLink() {
    this.elements.footer.telnyxVsTwilioLink().should('be.visible')
    this.elements.footer.telnyxVsTwilioLink().click()
  }

  //! sub-navigation
  clickOnSupportCenterLink() {
    this.elements.subNavigation.supportCenterLink().should('be.visible')
    this.elements.subNavigation.supportCenterLink().click()
  }
  clickOnBlogLink() {
    this.elements.subNavigation.blogLink().should('be.visible')
    this.elements.subNavigation.blogLink().click()
  }
  clickOnGlobalNumbersLink() {
    this.elements.subNavigation.globalNumbersLink().should('be.visible')
    this.elements.subNavigation.globalNumbersLink().click()
  }
  clickOnGlobalCoverageLink() {
    this.elements.subNavigation.globalCoverageLink().should('be.visible')
    this.elements.subNavigation.globalCoverageLink().click()
  }
  clickOnIntegrationsLink() {
    this.elements.subNavigation.integrationsLink().should('be.visible')
    this.elements.subNavigation.integrationsLink().click()
  }
  clickOnMicrosoftTeamsLink() {
    this.elements.subNavigation.microsoftTeamsLink().should('be.visible')
    this.elements.subNavigation.microsoftTeamsLink().click()
  }
  clickOnIoTSimCardsLink() {
    this.elements.subNavigation.IoTSimCardsLink().should('be.visible')
    this.elements.subNavigation.IoTSimCardsLink().click()
  }
}

module.exports = new homePage()
