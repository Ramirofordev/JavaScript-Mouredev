// Sets

// Declaracion

let mySet = new Set()

// Inicializacion

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Metdoso comunes

// add y delete

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Brais"))

console.log(mySet)

// has

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite ducplicados

mySet.add("braismouredev@jsdjf.com")
console.log(mySet)