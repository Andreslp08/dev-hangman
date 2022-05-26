
Feature: Implementar criterios de juego


Scenario: Como jugador quiero al selecionar la dificultad facil que me aperezca 7 oportunidades

    Given Que he seleccionado la dificultad fácil
    Then el usuario tendra 7 oportunidades por defecto


Scenario: Como jugador quiero al selecionar la dificultad normal que me aperezca 5 oportunidades

    Given Que he seleccionado la dificultad normal
    Then el usuario tendra 5 oportunidades por defecto


Scenario: Como jugador quiero al selecionar la dificultad difícil que me aperezca 3 oportunidades

    Given Que he seleccionado la dificultad difícil
    Then el usuario tendra 3 oportunidades por defecto


Scenario: Como sistema quiero eliminar un intento cuando el jugador inserte una letra incorrecta.

     Given Que el jugador ha seleccionado una letra
     When la letra seleccionada es erronea
     Then se elimina un intento.


Scenario: Como jugador quiero  ver mi progreso por medio de imagenes en pantalla

    Given Que el jugador se encuentre en una partida
    And escoja una letra erronea
    Then se actualiza el estado grafico del dibujo y del jugador.

Scenario: Como jugador quiero poder pasar al siguiente nivel al completar la palabra

    Given Que el jugador se encuentre en un juego
    And Que el jugador complete la palabra
    Then se gana la partida y permitiria iniciar una nueva partida.

Scenario: Como jugador quiero Terminar el juego(partida perdida)

     Given que el jugador se encuentre en una partida
     And el jugador prierde la primera oportunidad
     And el jugador prierde la segunda oportunidad
     Then el jugador prierde la tercera oportunidad y se finaliza la partida 


Scenario: Como jugador quiero Terminar el juego

    Given que el jugador se encuentre en partida
    And Que el jugador no quiera continuar con la partida actual
    And El jugador slecciona el menu
    Then El jugador vuelve a la pagina inicial

    

