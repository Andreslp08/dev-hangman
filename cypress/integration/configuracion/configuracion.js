/* eslint-disable no-undef */
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Que el jugador se encuentre en una partida',()=>{
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Fácil')
    cy.get('.button-difficult > button').contains('Fácil').click()
    cy.get('.grid-item-partida').should('exist')
})

And ('Que acceda a configuracion', ()=>{
    cy.get('.config-button').click()
})

Then('El jugador podrá reiniciarla',()=>{
 cy.get('button[id="again-btn"]').click()
 cy.get('.grid-item-partida').should('exist')
})