import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('Accedo al juego', ()=>{
      // eslint-disable-next-line no-undef
      cy.visit(Cypress.env('url'))
})

When ('Click en dificultad fácil, medio o dificil', ()=>{
    cy.get('.button-difficult > button').contains('Facil').click()
})

Then('el sistema muestra el abecedario', ()=>{
    cy.get('.grid-abecedario').should('exist')
})

