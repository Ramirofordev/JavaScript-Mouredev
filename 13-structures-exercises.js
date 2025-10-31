// 1. Crea un array que almacene cinco animales

let animals = ["perro", "gato", "gallina", "serpiente", "tiburon"]

// 2. Añade dos o más. Uno al principio y otro al final

animals.unshift("cocodrilo")
animals.push("alcon")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posicion

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["Peter Pan", "Frieren", "One Piece", "Pokemon", "Jack"])

// 5. Añade dos más. Uno de ellos repetido

mySet.add("Alvin y las Ardillas")
mySet.add("Frieren")

console.log(mySet)

// 6. Elimina uno conreto a tu eleccion

mySet.delete("Alvin y las Ardillas")

// 7. Crea un mapa que asocie el numero del mes a su nombre
let months = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes 5 existe en el map e imprime su valor

if (months.has(5)) {
    console.log(months.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("Verano", ["Julio", "Agosto", "Septiembre"])
console.log(months)

// 10. Crea un array, transformalo a set y almacenalo en un map
let myArray = ["hello", "niggas", "negros"]
let newSet = new Set(myArray)

let myMap = new Map([
    ["Negros", newSet]
])

console.log(myMap)