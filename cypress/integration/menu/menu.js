import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import MenuPage  from '../pageObject/menu_page';

const menuPage = new MenuPage()

Given('Accedo al menu para jugar en dificultad Facil', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url'))
})

And ('Busco la dificultad fácil', ()=>{
    cy.get('.button-difficult > button').contains('Fácil')

})
When ('Click en dificultad fácil', ()=>{
    cy.get('.button-difficult > button').contains('Fácil').click()
})

Then ('Accedo a la partida en dificultad Facil', ()=>{
    cy.get('.grid-item-partida').should('exist')
})

//dificultad normal

Given('Accedo al menu para jugar en dificultad Normal', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url'))
})

And ('Busco la dificultad normal', ()=>{
    cy.get('.button-difficult > button').contains('Normal')

})
When ('Click en dificultad normal', ()=>{
    cy.get('.button-difficult > button').contains('Normal').click()
})

Then ('Accedo a la partida en dificultad Normal', ()=>{
    cy.get('.grid-item-partida').should('exist')
})

//dificultad dificil

Given('Accedo al menu para jugar en dificultad dificil', ()=>{
    // eslint-disable-next-line no-undef
    cy.visit(Cypress.env('url'))
})

And ('Busco la dificultad dificil', ()=>{
    cy.get('.button-difficult > button').contains('Difícil')

})
When ('Click en dificultad dificil', ()=>{
    cy.get('.button-difficult > button').contains('Difícil').click()
})

Then ('Accedo a la partida en dificultad dificil', ()=>{
    cy.get('.grid-item-partida').should('exist')
})


