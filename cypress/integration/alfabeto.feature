
Feature: Implementar alfabeto


Scenario: Como jugador quiero que me aperezca el abecedario en pantalla.

    Given Accedo al juego
    When Click en dificultad fácil, medio o dificil
    Then el sistema muestra el abecedario

Scenario: Como jugador quiero seleccionar una letra correcta en el abecedario.

    Given La partida esta en curso
    And ya puedo interactuar con la partida
    When selecciono una letra
    Then se verifica si la letra esta en la palabra y se pone la letra en sus respectivos campos

Scenario: Como jugador quiero seleccionar una letra incorrecta en el abecedario.

    Given Me encuentro en la partida
    And ya puedo interactuar con el juego
    When selecciono una letra incorrecta
    Then se verifica la letra esta en la palabra y no se pone la letra


Scenario: Como jugador quiero que no se pueda seleccionar una letra cuando ya la haya utilizado antes

    Given El jugador se encuentra dentro de la partida
    And que la letra ya este asignada en la palabra
    Then se deshabilitara la letra en el abecedario y no podrá agregarse nuevamente.
