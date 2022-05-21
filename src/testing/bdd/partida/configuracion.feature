
Feature: Implementar criterios de juego


Scenario: Como jugador uiero poder reiniciar mi partida

    Given Que el jugador se encuentre en una partida
    And desee finalizarla para comenzar una nueva
    Then el jugador podrá reiniciarla
