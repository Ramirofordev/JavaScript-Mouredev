// 1. Crea un bucle que imprima los numeros del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

// 3. Crea un bucle que imprima todos los numeros pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
    else {
        continue
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en consola

nombres = ["Jose", "Brais", "Nacho", "Cass", "Ellie"]

for (let valor of nombres) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto

myString = "Hola a todos, soy JavaScript!"

let vowelsCount = 0
let vowels = "aeiou"

for (let i = 0; i < myString.length; i++) {
    if (vowels.includes(myString.toLowerCase()[i])) {
        vowelsCount++
    }
}
console.log(vowelsCount)

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

let numeros = [1, 2, 3, 4, 5]
let mult = 1
for (let valor of numeros) {
    mult *= valor
}
console.log(mult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
        console.log(`5 * ${i} = ${5 * i}`)
    }


// 8. Usa un bucle para invertir una cadena de texto
myString = "Hola JavaScript!"
let nuevaCadena = ""
for (let i = myString.length - 1; i >= 0; i--) {
    nuevaCadena += myString[i]
}
console.log(nuevaCadena)

// 9. Usa un bucle par agenrear los primero 10 numeros de la secuencia Fibonacci

let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)

// 10. Dado un array de numeros, us aun bucle para crear un nuevo array que contenga solo los numeros mayores a 10

numeros = [109, 2, 32, 3, 45, 2]
let numerosMayores = []
for (let valor of numeros) {
    if (valor > 10) {
        numerosMayores.push(valor)
    }
}
console.log(numerosMayores)