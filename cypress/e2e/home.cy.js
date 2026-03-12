describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page successfully', () => {
    cy.url().should('include', '/');
    cy.get('#home-page').should('be.visible');
  });

  it('should display the navigation bar', () => {
    cy.get('.navbar').should('be.visible');
    cy.get('#search-box').should('be.visible');
    cy.get('#search-link').should('be.visible');
    cy.get('#home-link').should('be.visible');
  });

  it('should display the hero carousel', () => {
    cy.get('#jumbotron-carousel').should('be.visible');
    cy.get('#jumbotron-carousel .item').should('have.length.greaterThan', 0);
  });

  it('should display featured product sections', () => {
    cy.get('#home-page').within(() => {
      cy.contains('Arrivals').should('be.visible');
      cy.contains('Top Selling').should('be.visible');
    });
  });

  it('should navigate to the store when clicking a carousel link', () => {
    cy.get('#jumbotron-carousel').find('a').first().click();
    cy.url().should('not.eq', Cypress.config('baseUrl') + '/');
  });

  it('should have a working footer', () => {
    cy.get('footer').should('exist');
  });
});
