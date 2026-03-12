describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a search box in the navigation', () => {
    cy.get('#search-box').should('be.visible');
    cy.get('#search-link').should('be.visible');
  });

  it('should return results when searching for "oil"', () => {
    cy.get('#search-box').type('oil');
    cy.get('#search-link').click();
    cy.get('#search-page').should('be.visible');
    cy.get('.list-item-part').should('have.length', 3);
  });

  it('should navigate to the search results page after submitting a search', () => {
    cy.get('#search-box').type('brake');
    cy.get('#search-link').click();
    cy.url().should('include', '/Search');
    cy.get('#search-page').should('be.visible');
  });

  it('should show a message when no results are found', () => {
    cy.get('#search-box').type('xyznotaproduct123');
    cy.get('#search-link').click();
    cy.get('#search-page').should('be.visible');
    cy.get('.list-item-part').should('have.length', 0);
  });
});
