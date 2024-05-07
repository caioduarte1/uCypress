/// <reference types="Cypress"/>

describe('Teste funcional de login com sucesso!', () => {
    it('Deve realizar login com sucesso', () =>{
        cy.visit("https://seubarriga.wcaquino.me/login")
        cy.get('#email').type("caioduarte1@hotmail.com")
        cy.get('#senha').type("123123")
        cy.get('.btn').click()
        cy.get('.alert').should('contain',"Bem vindo, Caio!")
        cy.contains('Bem vindo, Caio!')
    })
}

)