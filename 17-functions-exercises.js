// 1. Crea una funcion que reciba dos numeros y devuelva su suma

function sum(a , b) {
    return a + b
}

console.log(sum(10, 5))

// 2. Crea una funcion que reaciba un arary de numero y devuelva el mayor de ellos

myArray = [1, 2, 3, 4, 5, 6, 7]

function biggest(array) {
    biggest = 0
    for (let i = 0; i <= array.length; i++) {
        if (i >= biggest) {
            biggest = i
        }
    }
    return biggest
}

console.log(biggest(myArray))

// 3. Crea una funcion que reciba un string que devuelva el numero de vocales que contiene

function totalVowels(string) {
    let vowels = "aeiou"
    let vowelsCount = 0

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            vowelsCount++
        }
    }
    
    return vowelsCount
}

console.log(totalVowels("Hola, Javascript!"))

// 4. Crea una funcion que reciba un arrary de strings y devuelva un nuevo array con las strings en mayusculas

let strings = ["Hola" , "Javascript", "negros"]

function arrayMayusculas(strings) {
    let arrayStrings = []
    for (let valor of strings) {
        arrayStrings.push(valor.toUpperCase())
    }
    return arrayStrings
}

console.log(arrayMayusculas(strings))

// 5. Crea una funcion que reciba un numero y devuelva true si es primo y false en caso de contrario

function esPrimo(numero) {
    if (numero % numero == 0 && numero % 1 == 0) {
        return true
    } else {
        return false
    }
}

console.log(esPrimo(7))

// 6. Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = ["nacho", "ignacio", "cass", "moi", "gio"]

let array2 = ["cass", "gio", "ale", "max", "nacho"]

function elementosComunes(array1, array2) {

    let newArray = []

    for (let valor1 of array1) {
        for (let valor2 of array2) {
            if (valor1 == valor2) {
                newArray.push(valor1)
            } 
        }
    }
    return newArray
}

console.log(elementosComunes(array1, array2))

// 7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

let arrayPares = [1, 2, 3, 4, 5, 6]

function sumaPares(numeros) {

    let suma = 0

    for (let numero of numeros) {
        if (numero % 2 == 0) {
            suma += numero
        }
    }
    return suma
}

console.log(sumaPares(arrayPares))

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

let numerosNormales = [1, 2, 3, 4, 5, 6]

function numerosCuadrados(numeros) {
    
    let numCuadrados = []
    for (let numero of numeros) {
        numCuadrados.push(numero ** 2)
    }
    return numCuadrados
}

console.log(numerosCuadrados(numerosNormales))

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let texto = "adfeitjb"

function textoInverso(texto) {
    let words = texto.split(" ")
    let reverseWords = [ ]
    for (let i = words.length - 1; i >= 0; i--) {
        reverseWords.push(words[i])
    }
    return reverseWords.join(" ")
}

console.log(textoInverso(texto))

// 10. Crea una funcion que calcule el factorial de un numero dado

function factorial(num) {
    if (num == 0 || num == 1) return 1 
    return num * factorial(num - 1)
}