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

    it('Deve buscar um filme com sucesso.', () => {
        cy.get('#search.input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#result-section').should('contain', 'Matrix')
    });

    it('Deve buscar filmes com sucesso de lista.', () => {
        cy.fixture('filmes').then((filmes) => {
                cy.get('#search-input').type(filmes[3].titulo)
                cy.get('#search-button').click()
                cy.get('#result-section').should('contain', filmes[3].titulo)
            })
        });

    it('Deve buscar filmes com sucesso d lista inteira.', () => {
        cy.fixture('filmes').each((filmes) => {
                cy.get('#search-input').clear().type(filmes.titulo)
                cy.get('#search-button').click({force: true})
                cy.get('#results-section').should('contain', filmes.titulo)
            })
        });

    })