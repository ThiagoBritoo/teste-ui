/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout');
    
    })

    // it('Deve exibir uma mensagem de erro ao inserir usuario ou senha invalidos', () => {
    it('Deve exibir uma mensagem de erro ao inserir um usuario invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('notaluno_ebac@teste.com');
        cy.get('#password').type('senha@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('exist');
    })

    it('Deve exibir uma mensagem de erro ao inserir uma senha invalida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('notsenha@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('exist');
    })
})