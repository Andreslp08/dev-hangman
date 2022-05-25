
# @Menu @UO

Feature: Implementar dificultades



    Feature:Implementar dificultades

Scenario: Seleccion de la dificultad fácil

Given Accedo al menu para jugar en dificultad Facil
And  Busco la dificultad fácil
When Click en dificultad fácil
Then Accedo a la partida en dificultad Facil


Scenario: Seleccion de la dificultad normal
    Given Accedo al menu para jugar en dificultad Normal
    And Busco la dificultad normal
    When Click en dificultad normal
    Then Accedo a la partida en dificultad Normal


Scenario: Seleccion de la dificultad dificil
    Given Accedo al menu para jugar en dificultad dificil
    And Busco la dificultad dificil
    When Click en dificultad dificil
    Then Accedo a la partida en dificultad dificil



