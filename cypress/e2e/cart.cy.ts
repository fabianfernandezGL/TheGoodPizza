// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

describe('Cart test', () => {
  beforeEach(() => {
    cy.login()
  })

  it('adds item from the menu page and modifies quantity in the checkout page', () => {
    cy.contains('button', 'Add').eq(0).click()

    // Should display items quantity
    cy.get('[data-testid="shopping-cart-badge"]').eq(0).should('contain', '1')

    cy.get('[data-testid="ShoppingCartIcon"]').eq(0).click()

    // Should be on the checkout page
    cy.url().should('include', '/checkout')

    // Should have the item data in summary table
    cy.get('[data-testid="item-summary-quantity"]').should('contain', '1')
    cy.get('[data-testid="item-summary-name"]').should('contain', 'Egg & Basil')
    cy.get('[data-testid="item-summary-price"]').should('contain', '$14.00')

    // Should have the costs
    cy.get('[data-testid="Subtotal"]').should('contain', '$14.00')
    cy.get('[data-testid="Total Savings"]').should('contain', '-$0.70')
    cy.get('[data-testid="Express"]').should('contain', '$5.00')
    cy.get('[data-testid="Taxes (13%)"]').should('contain', '$1.82')
    cy.get('[data-testid="Total"]').should('contain', '$20.12')

    // Should have one item in the table
    cy.get('tbody').should('have.length', 1)

    // Should display the delete icon and hide the minus icon
    cy.get('[data-testid="DeleteOutlineTwoToneIcon"]').should('be.visible')
    cy.get('[data-testid="RemoveIcon"]').should('not.exist')

    // Should display the value 1
    cy.get('[data-testid="item-quantity"]').should('contain', '1')

    // INCREASE ITEM QUANTITY ========
    cy.get('[data-testid="AddIcon"]').click()

    // Should have the item data in summary table updated!
    cy.get('[data-testid="item-summary-quantity"]').should('contain', '2')
    cy.get('[data-testid="item-summary-name"]').should('contain', 'Egg & Basil')
    cy.get('[data-testid="item-summary-price"]').should('contain', '$28.00')

    // Should have the costs
    cy.get('[data-testid="Subtotal"]').should('contain', '$28.00')
    cy.get('[data-testid="Total Savings"]').should('contain', '-$1.40')
    cy.get('[data-testid="Express"]').should('contain', '$5.00')
    cy.get('[data-testid="Taxes (13%)"]').should('contain', '$3.64')
    cy.get('[data-testid="Total"]').should('contain', '$35.24')

    // Should hide the delete icon and show the minus icon
    cy.get('[data-testid="DeleteOutlineTwoToneIcon"]').should('not.exist')
    cy.get('[data-testid="RemoveIcon"]').should('be.visible')

    // Should display the value 2
    cy.get('[data-testid="item-quantity"]').should('contain', '2')

    // DECREASE ITEM QUANTITY ========
    cy.get('[data-testid="RemoveIcon"]').click()

    // Should have the item data in summary table updated again!
    cy.get('[data-testid="item-summary-quantity"]').should('contain', '1')
    cy.get('[data-testid="item-summary-name"]').should('contain', 'Egg & Basil')
    cy.get('[data-testid="item-summary-price"]').should('contain', '$14.00')

    // Should have the costs
    cy.get('[data-testid="Subtotal"]').should('contain', '$14.00')
    cy.get('[data-testid="Total Savings"]').should('contain', '-$0.70')
    cy.get('[data-testid="Express"]').should('contain', '$5.00')
    cy.get('[data-testid="Taxes (13%)"]').should('contain', '$1.82')
    cy.get('[data-testid="Total"]').should('contain', '$20.12')

    // Should display the delete icon and hide the minus icon
    cy.get('[data-testid="DeleteOutlineTwoToneIcon"]').should('be.visible')
    cy.get('[data-testid="RemoveIcon"]').should('not.exist')

    // Should display the value 1
    cy.get('[data-testid="item-quantity"]').should('contain', '1')

    // REMOVE ITEM =======
    cy.get('[data-testid="DeleteOutlineTwoToneIcon"]').click()

    // Should have the item data in summary table updated again!
    cy.get('[data-testid="item-summary-quantity"]').should('not.exist')
    cy.get('[data-testid="item-summary-name"]').should('not.exist')
    cy.get('[data-testid="item-summary-price"]').should('not.exist')

    // Should have the costs
    cy.get('[data-testid="Subtotal"]').should('contain', '$0.00')
    cy.get('[data-testid="Total Savings"]').should('contain', '$0.00')
    cy.get('[data-testid="Express"]').should('contain', '$5.00')
    cy.get('[data-testid="Taxes (13%)"]').should('contain', '$0.00')
    cy.get('[data-testid="Total"]').should('contain', '$5.00')

    cy.contains(
      'No pizza yet! Go to our menu and select a pizza flavor (we have some options there 😉)!'
    ).should('exist')
  })
})
