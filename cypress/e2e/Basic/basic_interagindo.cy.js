/// <reference types="Cypress"/>

describe('Interagindo com elemento Click ME', () => {
    it('Deve interargir com elemento "Click Me!" onde ao clicar altera para "Obrigado!" ', () =>{
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.get('#buttonSimple')
            .should('be.visible')
            .should('have.value', "Clique Me!")
            .click()
            .should('have.value', 'Obrigado!')
    })
}

)