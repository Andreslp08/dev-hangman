/* eslint-disable no-undef */
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

//-Scenario: Como jugador quiero seleccionar una letra del abecedario.

Given('La partida esta en curso', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Facil')
    cy.get('.button-difficult > button').contains('Facil').click()
})

And('ya puedo interactuar con la partida',()=>{
    cy.get('.grid-item-partida').should('exist')
})

When ('selecciono una letra', ()=>{
  cy.get('.grid-abecedario > button').contains('A').click()
})

Then('se verifica si la letra esta en la palabra y se pone la letra en sus respectivos campos', ()=>{
  cy.get('.grid-abecedario').should('exist')
})


