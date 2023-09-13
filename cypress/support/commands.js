// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add(
    "userLogin",
    (
      userEmail = Cypress.env("userEmail"),
      userPassword = Cypress.env("userPassword")
    ) => {
      cy.request(
        "POST",
        "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
        {
          email: userEmail,
          password: userPassword,
        }
      ).then((response) => {
          window.localStorage.setItem("token", response.body.token);
          cy.log(response)
      });
    }
  );
  
  //
  //
  // -- This is a child command --
  // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })