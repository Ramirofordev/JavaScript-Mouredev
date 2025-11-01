// Funciones 

// Simple

function myFunct() {
    console.log("Hola, funcion!")
}

for (let i = 0; i < 5; i++) {
    myFunct()
}

// Con parametros

function myFuncWithParameters(name) {
    console.log(`Hola, ${name}!`)
}

myFuncWithParameters("Nacho")

// Funciones anonimas 

const myFunc2 = function(name) {
    console.log(`Hola, ${name}!`)
}

myFunc2("Nacho")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}!`)

myFunc3("Nachooo")

// Parametros

function sum(a , b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

// Por defecto

function defaultSum(a = 0 , b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a , b) {
    return a * b
}

console.log(mult(5, 10))

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: Fuera del scope

// Funciones de orden superior

function applyFunc(func, parametro) {
    func(parametro)
}

applyFunc(myFunc4, "Funcion de orden superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(element => {
    console.log(element)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))