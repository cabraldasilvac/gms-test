/// <reference types="cypress" />

// This is a basic Cypress test file
// It contains a single test that visits a website
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
  
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Wanderley')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('wanderley2@email.com')
    cy.get('#signup-phone').type('319999999')
    cy.get('#signup-password').type('Wanderley123!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')

  })
})