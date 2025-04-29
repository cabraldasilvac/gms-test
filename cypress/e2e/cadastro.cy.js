/// <reference types="cypress" />

// This is a basic Cypress test file
// It contains a single test that visits a website
describe('US-012-Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
});


  it('Deve fazer o cadastro de campos obrigatórios', () => {
   
    //let email = 'wanderley${Date.now()}@teste.com' // Gera um email único - não rodou aqui este comando.
    let email = 'wanderley' + Date.now() + '@teste.com' // geral email aleatorio

    cy.preencherCadastro('wanderley', 'silva', email, '3199999999', 'Teste123@1289 ')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('wanderley58', 'silva', 'email@teste.com', '3199999999', 'Teste123@1289 ')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });
})