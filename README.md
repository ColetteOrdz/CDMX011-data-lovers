# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

DATA LOVERS -STUDIO GHIBLI
# 1. Título: "Fandom Data Base"
Consiste en una página web donde se muestra la infromación más importante de todas las películas que ha producido el Studio Ghibli a lo largo de los años.
---------------------------------------------------------
# 2. Resumen del proyecto
La página va dirigida para las personas que son usuarias de las películas, así como al público en general que está dispuesto a conocer más sobre los trabajos del estudio y quisiera adentrarse a este extenso mundo de películas.
La interfaz consiste en una página con diseño que incluye al personaje más entrañable del estudio: Totoro. Cuenta con diversos filtros los cuales ayudan al usuario a depurar la información que le interesa, tales como: filtro por año, director y calificación. De igual manera, las películas se pueden ordenar de manera ascendente y descendente de acuerdo al título y el año de lanzamiento, para que el usuario pueda encotrar las películas más recientes y/o antiguas.
Las tarjetas, que incluyen el poster e información básica de las películas, cuentan con un botón "ver más" que abre una ventana modal donde se muestra el resumen de la respectiva película para que el usuario pueda conocer más sobre esta.
    Se realizaron dos prototipos iniciales en papel:


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/prototipo_lapiz0.jpeg)


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/prototipo_lapiz.jpg)

    Después de iteraciones se realizó el prototipo final y se elaboró con la herramienta Google Slides, donde se determinó la paleta de colores a utilizar:


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/prototipo_alta_fidelidad_1.png)

    En un feedback se recomendó la implementación de un botón para mostrar la información en lugar de hacer que las tarjetas giraran, para tomar en cuenta la funcionalidad en dispositivos móviles.
---------------------------------------------------------
# 3. Historias de Usuario
Se realizaron 7 historias de usuario, de acuerdo al filtro que se implementaba
I. La primer historia de usuario consistió en maquetar el prototipo de alta fidelidad con HTML y CSS, también se elaboraron las tarjetas donde se mostraría la información básica de las películas (póster, año, título, score) y con JS se imprimieron en la página.
*Yo como:*
Fan del studio ghibli
*Quiero:*
Ver un listado de todas las películas que han producido
*Para:*
Conocer los datos básicos de cada una de ellas, como el póster, el título, año de lanzamiento y calificación
*CRITERIOS DE ACEPTACIÓN*
- La interfaz debe ser similar al prototipo de alta fidelidad
- Poder ver la lista de todas las películas
- Cada película debe tener su propia tarjeta con información


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/prototipo_hu1.png)
II. La segunda HU consistió en implementar un filtro donde mostrara las películas de acuerdo al año de lanzamiento.
*Yo como:*
Fan del studio ghibli
*Quiero:*
Poder ver las películas que han producido a lo largo de los años
*Para:*
Saber cuántas películas se han hecho por año
*CRITERIOS DE ACEPTACIÓN*
- Poder ver la lista de todas las películas
- Que un botón me muestre los años donde se han producido las películas
- Función con método "filter()" para seleccionar por la categoría "release_date"
- Manipulación del DOM para que aparezcan las tarjetas con su título y año


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/hu_2.png)

III. La historia de usuario tres consistió en hacer un filtro donde se pudieran seleccionar las películas de acuerdo a su porcentaje de calificación de cada una.
*Yo como:*
Fan del studio ghibli
*Quiero:*
Poder ver calificación que han obtenido las películas
*Para:*
Saber si son buenas y verlas, o descartarlas
*CRITERIOS DE ACEPTACIÓN*
- Poder ver la lista de todas las películas
- Que un botón me muestre el score obtenido por las películas
- Función con método "filter()" para seleccionar por la categoría "rt_score"
- Manipulación del DOM para que aparezcan las tarjetas con su título, año y puntuación

![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/hu_3.png)

IV. La cuarta HU consistió en implementar un filtro con los directores de cada película, al seleccionar un nombre se mostrarían todas las películas donde participó.
*Yo como:*
Fan del studio ghibli
*Quiero:*
Conocer al director de todas las películas
*Para:*
Poder ver las películas de mi director favorito
*CRITERIOS DE ACEPTACIÓN*
- Poder ver la lista de todas las películas
- Que un botón me muestre las películas con el nombre de su director
- Función con método "filter()" para seleccionar por la categoría "director"
- Manipulación del DOM para que aparezcan las tarjetas con su título, año, puntuación y el director 


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/hu_4.png)

V. La quinta HU consistió en implementar una función de ordenamiento de acuerdo al título de las películas, en orden ascendente y descendente. Esta opción se aplicará también si alguno de los filtros anteriores está seleccionado.
*Yo como:*
Fan del studio ghibli
*Quiero:*
Observar las películas por orden ascendente y descendente de acuerdo al título
*Para:*
Que mi vista de la lista sea más sencilla y encuentre las películas con mayor facilidad
*CRITERIOS DE ACEPTACIÓN*
- Poder ver la lista de todas las películas
- Que un botón me muestre las películas con el orden ascendente y descendente por título
- Función con método "sort()" para ordenar las películas
- Manipulación del DOM para que aparezcan las tarjetas con su título, año, puntuación en orden ascendente y descendete 


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/hu_5.png)

VI. La sexta HU consistió en implementar una función de ordenamiento de acuerdo a los años de lanzamiento, se mostrarían desde la película más reciente hasta la más antigua y de manera inversa. También esta opción se aplicaría si alguno de los primeros filtros está seleccionado.
*Yo como:*
Fan del studio ghibli
*Quiero:*
Observar las películas por la más antigüa a reciente y visceversa
*Para:*
Que mi vista de la lista sea más sencilla y encuentre las películas con mayor facilidad
*CRITERIOS DE ACEPTACIÓN*
- Poder ver la lista de todas las películas
- Que un botón me muestre las películas con el orden ascendente y descendente de acuerdo al año
- Función con método "sort()" para ordenar las películas
- Manipulación del DOM para que aparezcan las tarjetas con su título, año, puntuación de la más reciente a la más antigüa y visceversa


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/hu_6.png)

VII. La última HU consistió en mostrar el resumen de cada película en una ventana modal, al dar click en el botón "ver más" que aparece en las tarjetas.
*Yo como:*
Fan del studio ghibli
*Quiero:*
Conocer la sinopsis de la película 
*Para:*
Decidir si deseo verla o es de mi agrado
*CRITERIOS DE ACEPTACIÓN*
- Poder ver la lista de todas las películas
- Que un botón "Ver más" abra una ventana modal 
- Función con .filter() para que tome la descripción correspondiente de cada película
- Enlazar el botón y la función


![Screenshot](https://coletteordz.github.io/CDMX011-data-lovers/src/img/hu_7.png)

---------------------------------------------------------
# 4. Testing Unitario
Por último se realizaron los test de cada una de las funciones para comprobar su estado, en algunas se implementó el mocking de la data original para facilitar el proceso.
Se llegó a la conclusión de hacer la implementación del testing al finalizar cada historia de usuario.
 