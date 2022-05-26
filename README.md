# DEV HANGMAN

## Integrantes

* Andrés López
* Juan David Romero
* Juan Diego Estupiñan
* Julián Enrique Correo
* Samuel Parra 

## Herramientas utilizadas
- [React JS](https://react.org): Framework de interfaces gráficas de JavaScript | V18.1.0
- [Node JS](https://nodejs.org): Entorno de tiempo de ejecución de JavaScript | V17.3.1
- [Cypress](https://www.cypress.io): Herramienta de testing de construida para la web moderna | V19.6.1
- [Figma](https://www.figma.com): Herramienta de prototipado web y editor de gráficos vectorial | V7.4.1
- [Excel](https://www.microsoft.com/en-us/microsoft-365/excel): Hojas de cálculo multifuncionales | V2019
- [Git](https://git-scm.com): Sistema de control de versiones distribuido | V2.36.1


## ¿Qué hace la aplicación?
Dev Hangman es un juego basado en las mecánicas del popular juego 'Ahorcado'. Aquí el jugador deberá encontrar la palabra correcta de cada nivel antes de que se agoten los  intentos, lo que para el personaje principal son horas laborales. 

El jugador será representado como un desarrollador, en donde si se logra encontrar la palabra antes de que los intentos se agoten, se ganará la partida y por ende el personaje terminará su trabajo a tiempo, pero si los intentos superan en límite, el desarrollador no entregará su trabajo a la hora acordada, por ende será despedido.

Este juego cuenta con 3 niveles de dificultad, representado en que a mayor sea el nivel, el jugador dispondrá de menos intentos, haciendo de cada estilo de juego uno más retador para el jugador.

## Instrucciones
### `Clonar`
Para clonar el repositorio utilice el siguiente comando en su línea de comandos de [Git](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiF4-jGo_b3AhWVtYQIHfoBAlMQFnoECAwQAQ&url=https%3A%2F%2Fgit-scm.com%2F&usg=AOvVaw1lFNWgbWf8FsbaoU4AOPBr)

```sh
git clone https://github.com/Andreslp08/dev-hangman.git
```

Si lo desea también puede dirigirse al repositorio del proyecto, allí seleccione 'code' y podrá también descargar el proyecto en formato ZIP.

Para que el proyecto funcione correctamente no olvide ejecutar el comando inferior para descargar las dependencias del proyecto.
```sh
npm install
```

### `Ejecutar`
Si desea ejecutar el proyecto en su ambiente local dirijase a la terminal de comandos de su preferencia y ejecute el comando que encontrará en la parte inferior
```sh
npm start
```
Una vez ejecutado el proyecto correrá por defecto en el puerto que encontrará debajo.
```sh
http://localhost:3000
```

### `Ambiente de pruebas`
Para ejecutar el ambiente de pruebas impulsado por Cypress ejecute el siguiente comando.
```sh
npm run cypress:open
```

### `Desplegar en producción`
Si desea desplegar el proyecto o guardarlo en un repositorio ejecute en orden los siguientes comandos
```sh
npm run build
git init
git add .
git commit -m 'Commit'
git branch -M main
git remote add origin /tu repositorio/
git push -u origin main
```
#### `Despliegue Github Pages`
Una vez con el código en el repositorio hay que dirigirse a `Settings`, posteriormente nos dirigimos a `Pages`, seleccionamos nuestra carpeta raíz, generamos nuestra página, esperamos unos minutos y accedemos al link de nuestro proyecto

## Historias de usuario
Para consultar todas las historias de usuario de Dev Hangman consulte el siguiente [documento](https://unipanamericanaeduco-my.sharepoint.com/:x:/g/personal/jestupinanr_ucompensar_edu_co/EVBjK5M-REZHj5g_UtufxgYBgDz7gbLGeNIKy1GTI2dJIA?rtime=JBXBDuM82kg) 

## Features Gherkin
- `alfabeto.feature`
- `categoriasPalabras.feature`
- `configuracion.feature`
- `criterioJuego.feature`
- `menu.feature`

Consulta los features en el [siguiente enlace](https://cucumber.io/docs/gherkin/reference/)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Conclusiones
Las pruebas BDD mediante Cypress potenciado con Cucumber y Gherkin fueron muy sencillas, satisfactorias e intuitivas para todo el equipo, cambiando un poco la psique que se tenía al momento de realizar pruebas por algunos integrantes del equipo, que las consideraban tediosas ya que algunas veces tomaban casi el mismo tiempo que un desarrollo. 
 
El impacto que tuvo en la calidad del producto fue enorme, ya que al momento de realizar cambios o actualizaciones en el sistema, se corrían las pruebas para comprobar el correcto funcionamiento del mismo, lo que permitía dejar versiones estables en cada release.

Por último, gracias a estas pruebas se pudieron comprender mejor los escenarios que debía enfrentar el usuario final, ya que el objetivo de las pruebas era simular actividades que pudiese ejecutar una persona. Este aspecto hizo entender de mejor manera el UX y entender la estructura del producto de cara a los usuarios.

