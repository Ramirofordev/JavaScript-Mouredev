// 1. Concatena dos cadenas de texto
console.log("Hola, " + "Kuro")

// 2. Muestra la longitud de una cadena de texto
let message = "Hola este es mi mensaje"
console.log(message.length)

// 3. Muestra el primer y ultimo caracter de un string
console.log(`Primer caracter: ${message[0]}, Ultimo caracter: ${message.slice(-1)}`)

// 4. Convierte a mayusculas y minusculas un string
console.log(message.toUpperCase())
console.log(message.toLowerCase())

// 5. Crea una cadena de texto en varias lineas
message = `Esta es 
una cadena
en varias
lineas`

// 6. Interpola una varialbe en un string
console.log(`Hola mira mi mensaje: ${message}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(message.replace(" ", "-"))

// 8. Comprueba si una cadena e texto contiene una palabra concreta
console.log(message.includes("varias"))

// 9. Comprueaba si dos strings son iguales
let myName = "Jose"
console.log(message == myName)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(message.length == myName.length)