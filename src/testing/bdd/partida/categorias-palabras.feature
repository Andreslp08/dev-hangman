
Feature: Implementar categorias y palabras


Scenario: Como jugador quiero que me aparezca palabras y categorias de forma aleatoria 

    Given Que el jugador inicie una partida
    Then la partida nueva tendra una categoria y una palabra aleatoria.

Scenario: Como sistema quiero que exista 4 categorias (Lenguajes de Programación, Frameworks y librerias, IDE, Famosos de la Ingeniería de software)

   Given Que el jugador inicie una partida
   And el sistema escoge aleatoriamente una palabra perteneciente a alguna de las 4 categorias
   Then genera la partida