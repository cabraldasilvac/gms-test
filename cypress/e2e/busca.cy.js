/// <reference types="cypress" />

describe('US-013-Funcionalidade: Busca de membros', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve buscar um membro por nome', () => {
        cy.get('#search').type('wanderley')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'Membro encontrado com sucesso!')
    });
    
    it('Deve buscar um membro por sobrenome', () => {
        cy.get('#search').type('silva')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'Membro encontrado com sucesso!')
    });
    it('Deve buscar um membro por email', () => {
        cy.get('#search').type('email@teste.com')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'Membro encontrado com sucesso!')
    });
    it('Deve buscar um membro por telefone', () => {
        cy.get('#search').type('3199999999')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'Membro encontrado com sucesso!')
    }
    );
    it('Deve buscar um membro por nome inválido', () => {
        cy.get('#search').type('wanderley58')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'Membro não encontrado')
    });
    it('Deve buscar um membro por sobrenome inválido', () => {
        cy.get('#search').type('silva123')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'Membro não encontrado')
    });
    it('Deve buscar um membro por email inválido', () => {
        cy.get('#search').type('email@teste')
        cy.get('#search-button').click()
        cy.get('#search-response').should('contain', 'Membro não encontrado')
    });

// Busca Filmes
    it('Deve buscar um filme por nome', () => {
        cy.get('#search.input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    });

    it('Deve buscar um filme com sucesso.', () => {
        cy.get('#search.input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    });

    it.only('Deve buscar filmes com sucesso de lista.', () => {
        cy.fixture('filmes').then((filmes) => {
                cy.get('#search-input').type(filmes[2].titulo)
                cy.get('#search-button').click()
                cy.get('#results-section').should('contain', filmes[2].titulo)
            })
        });

    it('Deve buscar filmes com sucesso na lista inteira.', () => {
        cy.fixture('filmes').each((filmes) => {
                cy.get('#search-input').clear().type(filmes.titulo)
                cy.get('#search-button').click({force: true})
                cy.get('#results-section').should('contain', filmes.titulo)
            })
        });

    })