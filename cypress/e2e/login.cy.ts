// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Login').click()

    // Should be on the login page
    cy.url().should('include', '/login')

    cy.get('input[type=email]').type('e2e@test.com')
    cy.get('input[type=password]').type('wr0ngPa$$w0rd!')
  })

  it('does not login bad credentials', () => {
    cy.intercept('POST', '**/v1/auth/login', {
      statusCode: 401,
      fixture: 'credentialsError',
    }).as('loginReq')

    cy.get('button[type=submit]').click()

    cy.wait('@loginReq')

    cy.contains('p', 'Incorrect email or password')
  })

  it('does login', () => {
    cy.intercept('POST', '**/v1/auth/login', {
      statusCode: 200,
      fixture: 'user',
    }).as('loginReq')

    cy.get('button[type=submit]').click()

    cy.wait('@loginReq')

    // Should redirect to the menu
    cy.url().should('include', '/menu')

    // Should display the full name
    cy.contains('span', 'John Doe').should('exist')

    // Should display the log out option
    cy.contains('a', 'Log out').should('exist')

    // Should display the shopping cart icon
    cy.get('[data-testid="ShoppingCartIcon"]').should('exist')

    // Should set the cookies
    cy.getCookies().should('have.length', 2)
    cy.getCookie('auth-refresh-token').should(
      'have.a.property',
      'value',
      'this_is_the_refresh_token'
    )
    cy.getCookie('auth-access-token').should(
      'have.a.property',
      'value',
      'this_is_the_access_token'
    )
  })
})
