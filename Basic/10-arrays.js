// Arrays

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3) // Este reserva tres espacios vacios 

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "Mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "Mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Brais"
myArray2[1] = "Moure"
myArray2[2] = "Mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "moure"
myArray[1] = "mouredev"

console.log(myArray)

// Metodos comunes

myArray = []

// push y pop 
myArray.push("Brais")
myArray.push("Moure")
myArray.push("Mouredev")
myArray.push(37)

console.log(myArray)

myArray.pop() // elimina el ultimo y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

myArray.shift() // elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length
console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativo
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "Mouredev", 37]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice 
myArray = ["Brais", "Moure", "Mouredev", 37]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)