// Custom Cypress commands for Parts Unlimited

/**
 * Log in using the account login form.
 * @param {string} email
 * @param {string} password
 */
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/Account/Login');
  cy.get('input[name="Email"]').type(email);
  cy.get('input[name="Password"]').type(password);
  cy.get('#login-panel').find('[type="submit"]').click();
});

/**
 * Add the first product from a given category to the shopping cart.
 * @param {number} categoryId
 */
Cypress.Commands.add('addFirstProductToCart', (categoryId) => {
  cy.visit(`/Store/Browse?categoryId=${categoryId}`);
  cy.get('.list-item-part').first().click();
  cy.get('.btn').contains('Add to Cart').click();
});
