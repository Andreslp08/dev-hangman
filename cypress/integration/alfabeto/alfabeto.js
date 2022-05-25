/* eslint-disable no-undef */
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('Accedo al juego', ()=>{
      // eslint-disable-next-line no-undef
      cy.visit(Cypress.env('url'))
})

When ('Click en dificultad fácil, medio o dificil', ()=>{
    cy.get('.button-difficult > button').contains('Fácil').click()
})

Then('el sistema muestra el abecedario', ()=>{
    cy.get('.grid-abecedario').should('exist')
})

//-Scenario: Como jugador quiero seleccionar una letra del abecedario.
let contiene = ''
Given('La partida esta en curso', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Fácil')
    cy.get('.button-difficult > button').contains('Fácil').click()
})


And('ya puedo interactuar con la partida',()=>{
    cy.get('.grid-item-partida').should('exist')
    contiene = localStorage.getItem('contiene');
})


When ('selecciono una letra', ()=>{
  cy.get('.grid-abecedario > button').contains(contiene).click()
})

Then('se verifica si la letra esta en la palabra y se pone la letra en sus respectivos campos', ()=>{
  cy.get('.char-container > div').contains(contiene)
})


//Como jugador quiero que no se pueda seleccionar una letra cuando ya la haya utilizado antes

let noContiene = ''
Given('Me encuentro en la partida', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Fácil')
    cy.get('.button-difficult > button').contains('Fácil').click()
})


And('ya puedo interactuar con el juego',()=>{
    cy.get('.grid-item-partida').should('exist')
    noContiene = localStorage.getItem('no-contiene');
})


When ('selecciono una letra incorrecta', ()=>{
  cy.get('.grid-abecedario > button').contains(noContiene).click()
})

Then('se verifica la letra esta en la palabra y no se pone la letra', ()=>{
  cy.get('.char-container > div').contains(contiene).should('not.exist')
})

//Como jugador quiero que no se pueda seleccionar una letra cuando ya la haya utilizado antes

Given ('El jugador se encuentra dentro de la partida', ()=>{
  cy.visit(Cypress.env('url'))
  cy.get('.button-difficult > button').contains('Fácil')
  cy.get('.button-difficult > button').contains('Fácil').click()
  cy.get('.grid-item-partida').should('exist')
})

 And ('que la letra ya este asignada en la palabra', ()=>{
  contiene = localStorage.getItem('contiene');
  cy.get('.grid-abecedario > button').contains(contiene).click()
  cy.get('.char-container > div').contains(contiene)
 })
 
 Then('se deshabilitara la letra en el abecedario y no podrá agregarse nuevamente.',()=>{
   cy.get('.disabled').contains(contiene).should('exist')
 })