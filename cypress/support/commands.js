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
// Cypress.Commands.add('login', (email, password) => { ... })
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

// cypress/support/commands.js
  // cypress/support/commands.js
// cypress/support/commands.js


/// <reference types='Cypress'/>


Cypress.Commands.add('getToken', () => {
  return cy.request({
    method: 'GET',
    url: 'https://testservices.eventzet.com/api/Login/GetToken?AuthUID=e3b1d5bb-5f8e-4bae-80fb-e4db9f425d11',
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error(`Failed to retrieve token. Status: ${response.status}`);
    }

    // Assuming the token is in the response body directly
    const authToken = response.body; // Adjust this based on the actual response structure
    Cypress.env('authToken', authToken);
    return authToken; // Return the token for further use
  });
});

