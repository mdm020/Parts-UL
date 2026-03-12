describe('Account', () => {
  it('should display the login page', () => {
    cy.visit('/Account/Login');
    cy.get('#login-page').should('be.visible');
    cy.get('#login-panel').should('be.visible');
  });

  it('should show the email and password fields on the login page', () => {
    cy.visit('/Account/Login');
    cy.get('input[name="Email"]').should('be.visible');
    cy.get('input[name="Password"]').should('be.visible');
  });

  it('should show a validation error when logging in with invalid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.visit('/Account/Login');
      cy.get('input[name="Email"]').type(users.invalidUser.email);
      cy.get('input[name="Password"]').type(users.invalidUser.password);
      cy.get('#login-panel').find('[type="submit"]').click();
      cy.get('#login-page').should('be.visible');
      cy.get('.validation-summary-errors, .text-danger').should('exist');
    });
  });

  it('should log in successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password);
      cy.url().should('not.include', '/Account/Login');
    });
  });

  it('should display the registration page', () => {
    cy.visit('/Account/Register');
    cy.get('input[name="Email"]').should('be.visible');
    cy.get('input[name="Password"]').should('be.visible');
    cy.get('input[name="ConfirmPassword"]').should('be.visible');
  });

  it('should show a link to register from the login page', () => {
    cy.visit('/Account/Login');
    cy.contains('Register as a new user').should('be.visible').and('have.attr', 'href');
  });

  it('should show a forgot password link on the login page', () => {
    cy.visit('/Account/Login');
    cy.contains('Forgot your password?').should('be.visible');
  });
});
