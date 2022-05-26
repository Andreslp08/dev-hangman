/* eslint-disable no-undef */
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('Que he seleccionado la dificultad fácil', ()=>{
     // eslint-disable-next-line no-undef
     cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Fácil').click()
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
    cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Difícil').click()
})
Then ('el usuario tendra 3 oportunidades por defecto', ()=>{
   cy.get('span[id="intento"]').contains('3').should('exist')
})

let noContiene = ''

// Como sistema quiero eliminar un intento cuando el jugador inserte una letra incorrecta.
Given ('Que el jugador ha seleccionado una letra',()=> {
    cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Fácil').click()
})
When ('la letra seleccionada es erronea', ()=>{
    noContiene = localStorage.getItem('no-contiene');
    cy.get('.grid-abecedario > button').contains(noContiene).click()
})
Then('se elimina un intento.', ()=>{
    cy.get('span[id="intento"]').contains('6').should('exist')
})
//Como jugador quiero Terminar el juego
Given('que el jugador se encuentre en partida',()=>{
    cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Difícil').click()
})
And('Que el jugador no quiera continuar con la partida actual', ()=>{
    cy.get('.config-button').click()
})
And('El jugador slecciona el menu', ()=>{
    cy.get('#menu-btn').contains('Menu').click()
}) 
Then('El jugador vuelve a la pagina inicial', ()=>{
    cy.visit(Cypress.env('url'))
})

//Como jugador quiero Terminar el juego(partida perdida)

Given('que el jugador se encuentre en una partida',()=>{
    cy.visit(Cypress.env('url')).get('.button-difficult > button').contains('Difícil').click()
})
And('el jugador prierde la primera oportunidad', ()=>{
    cy.get('.grid-abecedario > button').contains('Z').click()
})
And('el jugador prierde la segunda oportunidad', ()=>{
    cy.get('.grid-abecedario > button').contains('X').click()
})
Then('el jugador prierde la tercera oportunidad y se finaliza la partida', ()=>{
    cy.get('.grid-abecedario > button').contains('W').click()
})

//Como jugador quiero  ver mi progreso por medio de imagenes en pantalla
noContiene = ''
Given ('Que el jugador se encuentre en una partida', ()=>{
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Fácil')
    cy.get('.button-difficult > button').contains('Fácil').click()
    cy.get('.grid-item-partida').should('exist')
})
And('escoja una letra erronea', ()=>{
    noContiene = localStorage.getItem('no-contiene');
    cy.get('.grid-abecedario > button').contains(noContiene).click()
})

Then ('se actualiza el estado grafico del dibujo y del jugador.', ()=>{
    cy.get('.image-progress').should('have.attr', 'src')
})


Given('Que el jugador se encuentre en un juego', ()=>{
    cy.visit(Cypress.env('url'))
    cy.get('.button-difficult > button').contains('Fácil')
    cy.get('.button-difficult > button').contains('Fácil').click()
    cy.get('.grid-item-partida').should('exist')
})

And('Que el jugador complete la palabra', ()=>{
    let palabra = localStorage.getItem('palabra');
    let progress = []
    for(let c of palabra){
        if(!progress.includes(c)){
            progress.push(c)
            cy.get('.grid-abecedario > button').contains(c).click()
            console.log(c);
        }
     
    }
})

Then ('se gana la partida y permitiria iniciar una nueva partida.', ()=>{
    cy.get('.visible > .modal > .body > .flex > .primary-button-bordered').click()
    cy.get('.grid-item-partida').should('exist')
})

