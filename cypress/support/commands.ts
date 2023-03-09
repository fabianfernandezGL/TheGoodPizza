// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
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
Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.contains('Login').click()

  cy.get('input[type=email]').type('e2e@test.com')
  cy.get('input[type=password]').type('wr0ngPa$$w0rd!')

  cy.intercept('POST', '**/v1/auth/login', {
    statusCode: 200,
    fixture: 'user',
  }).as('loginReq')

  cy.get('button[type=submit]').click()

  cy.wait('@loginReq')
})
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
//
