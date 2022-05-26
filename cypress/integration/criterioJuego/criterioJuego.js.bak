import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('Que he seleccionado la dificultad fácil', ()=>{
     // eslint-disable-next-line no-undef
     cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Facil').click()
})
Then ('el usuario tendra 7 oportunidades por defecto', ()=>{
    cy.get('span[id="intento"]').contains('7').should('exist')
})

//normal
Given ('Que he seleccionado la dificultad normal', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Normal').click()
})
Then ('el usuario tendra 5 oportunidades por defecto', ()=>{
   cy.get('span[id="intento"]').contains('5').should('exist')
})

//dificil
Given ('Que he seleccionado la dificultad difícil', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Dificil').click()
})
Then ('el usuario tendra 3 oportunidades por defecto', ()=>{
   cy.get('span[id="intento"]').contains('3').should('exist')
})