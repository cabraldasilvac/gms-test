/// <reference types="cypress" />


describe('US-012-Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
}
);

afterEach(() => {
  cy.screenshot()
});

  it('Deve fazer o cadastro de campos obrigatórios', () => {
   
    //let email = 'wanderley${Date.now()}@teste.com' // Gera um email único - não rodou aqui este comando.
    let email = 'wanderley' + Date.now() + '@teste.com' // geral email aleatorio

    cy.preencherCadastro('wanderley', 'silva', email, '3199999999', 'Teste123@1289 ')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  }
);

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('wanderley58', 'silva', 'email@teste.com', '3199999999', 'Teste123@1289 ')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  }
);

  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.preencherCadastro('wanderley', 'silva123', 'email@teste.com', '3199999999', 'Teste123@1289 ')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  }
);

  it('Deve validar mensagem de erro com o campo telefone inválido', () => {
    cy.preencherCadastro('wanderley', 'silva', 'email@teste.com', 'tel319999999', 'Teste123@1289 ')
    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
  }
  );

});