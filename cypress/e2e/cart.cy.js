describe('Shopping Cart', () => {
  it('should show an empty cart when no items have been added', () => {
    cy.visit('/ShoppingCart/Index');
    cy.get('#shopping-cart-page').should('be.visible');
    cy.get('#empty-cart').should('be.visible');
  });

  it('should add a product to the cart and reflect it in the cart', () => {
    cy.visit('/Store/Browse?categoryId=1');
    cy.get('.list-item-part').first().click();
    cy.contains('Add to Cart').click();
    cy.get('#shopping-cart-page').should('be.visible');
    cy.get('.cart-item').should('have.length.greaterThan', 0);
  });

  it('should display the subtotal after adding a product', () => {
    cy.visit('/Store/Browse?categoryId=1');
    cy.get('.list-item-part').first().click();
    cy.contains('Add to Cart').click();
    cy.get('#cart-sub-total').should('be.visible');
    cy.get('#cart-sub-total').invoke('text').should('match', /\$[\d,]+\.\d{2}/);
  });

  it('should show the cart icon in the navigation', () => {
    cy.visit('/');
    cy.get('#shopping-cart-link').should('exist');
  });
});
