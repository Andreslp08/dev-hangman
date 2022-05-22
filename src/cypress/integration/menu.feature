
Feature: Implementar dificultades


Scenario: Seleccion de la dificultad fácil
    Given Accedo al menu
    And Busco la dificultad fácil
    When Click en dificultad fácil
    Then Accedo a la partida

Scenario: Seleccion de la dificultad normal
    Given Accedo al menu
    And Busco la dificultad normal
    When Click en dificultad normal
    Then Accedo a la partida

Scenario: Seleccion de la dificultad dificil
    Given Accedo al menu
    And Busco la dificultad dificil
    When Click en dificultad dificil
    Then Accedo a la partida
