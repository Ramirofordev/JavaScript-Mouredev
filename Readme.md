# Este es un repositorio del curso de JavaScript de Mouredev

El fin de este repositorio es documentar todo el **aprendizaje obtenido** en mi cuenta de GitHub y practicar lo aprendido en el curso de Git.

## Datos importantes acerca de JS:
- Segun sus buenas practicas, hay que nombras los archivos con separaciones "-" en vez de snake_case.
- Para mostrar mensajes en pantalla usaremos el comando *"console.log"*
- Para hacer comentario en Js utilizaremos la sintaxis de: **//**

Este curso de divide en dos partes:
1. La parte de principiantes
2. La parte para intermedios

En este repositorio encontraran dos carpetas de la respectiva parte.

Cabe recalcar que tambien usare este Readme para dejar algunas anotaciones a lo largo del curso. Cosas que me parezcan cursiosas como por ejemplo *el operador ternario (?)*, que es basicamente una forma de realizar un condicional pero reducido, por lo que llevo aprendido hasta el momento.

Todos los lenguajes de programacion comparten los mismos fundamentos, lo que suele cambiar es la sintaxis o la forma en la que los utilizamos. Redactare toda la informacion acerca de los fundamentos de Js que me parezca curiosa.

### Estructuras de datos 
1. *Arrays*
> Los array son una estructura de datos organizada, y localizable, la cual tiene varios nombres. Es conocida en Python como las listas, las cuales pueden poseer datos de varios tipos y duplicados, son de facil acceso y manipulacion.

2. *Sets*
> Los sets o tambien conocidas tuplas son un tipo de "listas" las cuales tienen orden. Sin embargo, su principal diferencia con los arrays es que estas no permiten la integracion de dos datos exactamente iguales. Ademas, de que no tiene un indice de donde estan sus elementos, ya que solo hay uno de cada uno.

3. *Maps*
> La estrucutra de datos map o mejor conocida como "Diccionario", nos permite almacenar pares de clave-valor. Las claves pueden ser de cualquier tipo, esto hace que los Maps sean muy flexibles y robustos.


### Loops
Los bucles permiten recorrer colecciones de datos, realizar tareas repetitivas y ejecutar acciones has que se cumpla una condicion especifica.

* *For*
> El bucle mas facil de usar y el que se usa cuando sabes el numero de iteraciones que necesitas. La sintaxis es bastante parecido (sino que identica) a la del lenguaje **C**. Nos permite iterar de las estrucutras de datos.

* *While*
> Este es un bucle que se sigue ejecutando mientras se cumpla una condicion. Es excelente cuando no sabes exactamente cuantas veces deseas repetir algo.

* *Do While*
> Similar al while, pero asegura que el bloque de codigo se ejecute al menos una vez, ya que la condicon se evalua despues de cada iteracion

* *For Of*
> Es como el for pero te permite recorrer directamente los elementos de una coleccion, como un array, un set o un map, de manera ms legible.

Ademas, debemos de tener en cuenta el control de bucles:
>> *Break:* Termina el bucle antes de tiempo cuando se cumple una condicion
>> *Continue:* Salta la iteracion actual y pasa a la siguiente, util para omitir ciertos valroes dentro del bucle.

### Funciones
Nos permiten agrupar bloques de codigo reutilizables, aquellos que nos ayudan a realizar tareas especificas de manera eficiente y organizada. Asi podremos escribir codigo modular, mas limpio y facil de mantener.

[!NOTE]
La forma para escribir funciones en JS es con la sintaxis "function <nombreDeLaFuncion>"

* Lo mas destacado dentro de las funciones en JS o mejor dicho lo unico diferente a Python son dos cosas:
    * Las *"arrows functios"* que son una forma de redactar funciones de una manera mas simplificada, su sintaxis es: "variable =(<nombreDelParametro> => utilidad o operacion que necesite hacer la funcion).

    * Y la funcion **forEach** la cual nos permite recorrer directamente los elementos de un objeto iterable *(arrays, sets , maps, etc.)*.