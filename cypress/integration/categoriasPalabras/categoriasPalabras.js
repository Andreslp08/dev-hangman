/* eslint-disable no-undef */
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


let contiene = ''

Given('Que el jugador inicie una partida', ()=>{
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Fácil')
    cy.get('.button-difficult > button').contains('Fácil').click()
    cy.get('.grid-item-partida').should('exist')
})
Then ('La partida me mostrara la cantidad de letras que tiene la palabra',()=>{
    contiene = localStorage.getItem('cantidadDeLetra');
    cy.get('.char-container > div').should('have.length', contiene);
})

// Como jugador quiero que me aparezca la categoria de la palabra 

Given('Que el jugador inicie un juego', ()=>{
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Fácil')
    cy.get('.button-difficult > button').contains('Fácil').click()
    cy.get('.grid-item-partida').should('exist')
})

Then('La partida nueva tendra el nombre de la categoria', ()=>{
    cy.get('.titulo').should('exist')
})