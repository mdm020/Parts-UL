describe('Store', () => {
  it('should display product categories on store index page', () => {
    cy.visit('/Store');
    cy.contains('Browse Categories').should('be.visible');
    cy.get('.list-item-part').should('have.length.greaterThan', 0);
  });

  it('should navigate to a category when clicking a category tile', () => {
    cy.visit('/Store');
    cy.get('.list-item-part').first().click();
    cy.url().should('include', 'categoryId');
  });

  it('should display products when browsing a category', () => {
    cy.visit('/Store/Browse?categoryId=1');
    cy.get('.list-item-part').should('have.length.greaterThan', 0);
  });

  it('should show product details page when a product is clicked', () => {
    cy.visit('/Store/Browse?categoryId=1');
    cy.get('.list-item-part').first().click();
    cy.get('.btn').should('be.visible');
  });

  it('should display an Add to Cart button on a product details page', () => {
    cy.visit('/Store/Browse?categoryId=1');
    cy.get('.list-item-part').first().click();
    cy.contains('Add to Cart').should('be.visible');
  });
});
